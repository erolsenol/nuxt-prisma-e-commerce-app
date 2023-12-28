<script>
export default {
  name: "ProductAdd",
};
</script>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { array, string, object } from 'yup';

const imageStorageTypeCalc = useImageStorageTypeCalc()

const { $helper } = useNuxtApp();

const schema = object().shape({
  name: string().required(),
  title: string().required(),
  content: string().required(),
  image: array().min(1).required(),
});

const snackbar = useSnackbar();

const initialProduct = () => ({
  name: null,
  title: null,
  content: null,
  name_en: null,
  title_en: null,
  content_en: null,
  image: [],
});


const productAddForm = ref('productAddForm');
const product = ref(initialProduct());
const imageNames = ref([])
const images = ref([])

async function formClear() {
  return new Promise((resolve, reject) => {
    imageNames.value = []
    images.value = []
    product.value.name = null
    product.value.title = null
    product.value.content = null
    product.value.name_en = null
    product.value.title_en = null
    product.value.content_en = null
    product.value.image = []
    resolve(true)
  })
}

function onFileChange(e) {
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  createImage(files);
}
function createImage(files) {
  images.value = []
  imageNames.value = []
  for (var index = 0; index < files.length; index++) {
    var reader = new FileReader();
    imageNames.value.push(files[index].name);
    reader.onload = (event) => {
      images.value.push(event.target.result);
    };
    reader.readAsDataURL(files[index]);
  }
}

async function save() {
  console.log("savee");

  const imageData = []

  images.value.forEach((img, index) => {
    imageData.push({ name: imageNames.value[index], image: img })
  });

  const test = $helper.replaceTurkishCharacters(product.value.name)
  console.log("test", test);

  product.value.name = $helper.replaceTurkishCharacters(product.value.name)

  delete product.value.image

  const productData = { ...product.value }
  const { data, pending, error, refresh } = await useFetch("/api/product", {
    method: "post",
    body: productData,
  }).catch((error) => {
    console.error(error);
  });
  console.log("client product post response:", data.value);
  if (data.value.status) {
    console.log(data.value.data.id);

    const response = await useFetch("/api/image", {
      method: "post",
      body: {
        ownerName: "productId",
        ownerId: data.value.data.id,
        images: imageData,
        storageType: imageStorageTypeCalc,
      },
    }).catch((error) => {
      console.error(error);
    });

    console.log("client image post response:", response.data.value);

    if (response.data.value.status) {
      console.log("Görsel Yüklendi");
      snackbar.add({
        type: "success",
        text: "Görsel Yüklendi",
      });

      await formClear()
    } else {
      if (response.data.value.error === "cannot be empty") {
        snackbar.add({
          type: "error",
          text: "Görsel Boş olamaz",
        });
        return
      }

      console.log("Görsel Kaydedilemedi");
      snackbar.add({
        type: "error",
        text: "Görsel Kaydedilemedi",
      });
    }
  } else {
    if (data.value.error === "same_name") {
      snackbar.add({
        type: "error",
        text: "Aynı İsimle Ürün bulunuyor",
      });


      return true
    }
    console.log("Ürün Kaydedilemedi");
    snackbar.add({
      type: "error",
      text: "Ürün Kaydedilemedi",
    });
  }

}

</script>

<template>
  <div class="product-add">
    <Form @submit="save" ref="productAddForm" :validation-schema="schema">
      <div class="mb-3">
        <label for="product-add-name" class="form-label">{{ $t('product_name') }}</label>
        <div class="input-group">
          <span class="input-group-text">TR *</span>
          <Field name="name" v-model="product.name" class="form-control" id="product-add-name">
          </Field>
        </div>
        <div class="input-group mt-2">
          <span class="input-group-text px-3">EN</span>
          <Field name="name_en" v-model="product.name_en" class="form-control" id="product-add-name-en">
          </Field>
        </div>
        <ErrorMessage class="invalid text-capitalize" name="name" />
      </div>
      <div class="mb-3">
        <label for="product-add-title" class="form-label">{{ $t('product_title') }}</label>
        <div class="input-group">
          <span class="input-group-text">TR *</span>
          <Field name="title" v-model="product.title" type="text" class="form-control" id="product-add-title" />
        </div>
        <div class="input-group mt-2">
          <span class="input-group-text px-3">EN</span>
          <Field name="title_en" v-model="product.title_en" class="form-control" id="product-add-title-en">
          </Field>
        </div>
        <ErrorMessage class="invalid text-capitalize" name="title" />
      </div>
      <div class="mb-3">
        <label for="product-add-content" class="form-label">{{ $t('product_content') }}</label>
        <div class="input-group">
          <span class="input-group-text">TR *</span>
          <Field name="content" v-model="product.content" type="text" class="form-control" id="product-add-content" />
        </div>
        <div class="input-group mt-2">
          <span class="input-group-text px-3">EN</span>
          <Field name="content_en" v-model="product.content_en" class="form-control" id="product-add-content-en">
          </Field>
        </div>
        <ErrorMessage class="invalid text-capitalize" name="content" />
      </div>
      <div class="product-add-slide mb-3">
        <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
          :autoplay="{ delay: 5000, disableOnInteraction: true, }" :creative-effect="{
            prev: { shadow: false, translate: ['-20%', 0, -1], },
            next: { translate: ['100%', 0, 0], },
          }">
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <div class="card" style="width: 28rem">
              <nuxt-img :src="image" class="card-img-top img-fluid" style="width: 100%; height: 18rem;" />
              <div class="card-body">
                <h5 class="card-title fs-5">
                  {{ $t('image_name') }}: {{ imageNames[index] }}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="mb-3">
        <label for="product-add-image" class="form-label">{{ $t('product_image') }}</label>
        <Field name="image" @change="onFileChange" v-model="product.image" class="form-control" type="file"
          id="product-add-image" accept="image/png, image/jpeg" multiple />
        <ErrorMessage class="invalid text-capitalize" name="image" />
      </div>
      <button type="submit" class="btn btn-primary">{{ $t('save') }}</button>
    </Form>
  </div>
</template>

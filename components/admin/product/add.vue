<script>
export default {
  name: "ProductAdd",
};
</script>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const { $helper } = useNuxtApp();

const schema = yup.object({
  name: yup.string().required(),
  title: yup.string().required(),
  content: yup.string().required(),
  image: yup.array().required(),
});

const snackbar = useSnackbar();

const initialProduct = () => ({
  name: null,
  title: null,
  content: null,
});

const addValidation = ref('addValidation');
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
  const { valid } = await addValidation.value.validate()
  if (!valid) {
    snackbar.add({
      type: "error",
      text: "Formu Eksiksiz Doldurun",
    });
    return
  }

  const imageData = []

  images.value.forEach((img, index) => {
    imageData.push({ name: imageNames.value[index], image: img })
  });

  const test = $helper.replaceTurkishCharacters(product.value.name) 
  console.log("test",test);
 
  product.value.name = $helper.replaceTurkishCharacters(product.value.name) 

  const productData = product.value
  const { data, pending, error, refresh } = await useFetch("/api/product", {
    method: "post",
    body: productData,
  }).catch((error) => {
    console.error(error);
  });
  console.log("client product post response:",data.value);
  if (data.value.status) {
    console.log(data.value.data.id);

    const response = await useFetch("/api/image", {
      method: "post",
      body: {
        ownerName: "productId",
        ownerId: data.value.data.id,
        images: imageData
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
      console.log("Görsel Kaydedilemedi");
      snackbar.add({
        type: "error",
        text: "Görsel Kaydedilemedi",
      });
    }
  } else {
    if (data.value.error === "There is a product with the same name") {
      snackbar.add({
        type: "error",
        text: "Aynı İsimle Ürün bulunuyor",
      });

      await addValidation.value.reset()
      return true
    }
    console.log("Ürün Kaydedilemedi");
    snackbar.add({
      type: "error",
      text: "Ürün Kaydedilemedi",
    });
  }
  await addValidation.value.reset()
  return true
}
</script>

<template>
  <div class="product-add">
    <Form as="v-form" ref="addValidation" :validation-schema="schema">
      <div class="mb-3">
        <label for="product-name" class="form-label">Ürün Adı</label>
        <Field name="name" v-model="product.name" as="input" type="text" v-slot="{ field, handleChange }"
          class="form-control" id="product-name">
          <input v-bind="field" @change="handleChange">
        </Field>
        <ErrorMessage class="invalid" name="name" />
      </div>
      <div class="mb-3">
        <label for="product-name" class="form-label">Ürün Başlığı</label>
        <Field name="title" v-model="product.title" as="input" type="text" class="form-control" id="product-name" />
        <ErrorMessage class="invalid" name="title" />
      </div>
      <div class="mb-3">
        <label for="product-content" class="form-label">Ürün Açıklaması</label>
        <Field name="content" v-model="product.content" as="input" type="text" class="form-control"
          id="product-content" />
        <ErrorMessage class="invalid" name="content" />
      </div>
      <div class="product-add-slide mb-3">
        <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
          :autoplay="{ delay: 8000, disableOnInteraction: true, }" :creative-effect="{
            prev: { shadow: false, translate: ['-20%', 0, -1], },
            next: { translate: ['100%', 0, 0], },
          }">
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <div class="card" style="width: 28rem">
              <nuxt-img :src="image" class="card-img-top img-fluid" style="width: 100%; height: 18rem;" />
              <div class="card-body">
                <h5 class="card-title">
                  Görsel Adı: {{ imageNames[index] }}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="mb-3">
        <label for="product-image" class="form-label">Ürün Görselli</label>
        <Field name="image" @change="onFileChange" class="form-control" as="input" type="file" id="product-image"
          accept="image/png, image/jpeg" multiple />
        <ErrorMessage class="invalid" name="image" />
      </div>
      <button @click="save()" class="btn btn-primary">Kaydet</button>
    </Form>
  </div>
</template>

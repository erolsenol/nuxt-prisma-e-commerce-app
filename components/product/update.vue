<script>
export default {
  name: "ProductUpdate",
};
</script>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';

const snackbar = useSnackbar();

const initialProduct = () => ({
  name: null,
  title: null,
  content: null,
});

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

async function save(event) {
  const imageData = []

  images.value.forEach((img, index) => {
    imageData.push({ name: imageNames.value[index], image: img })
  });

  console.log("send producttt 12312");
  const { data, pending, error, refresh } = await useFetch("/api/product", {
    method: "post",
    body: product,
  }).catch((error) => {
    console.error(error);
  });
  if (data.value.status) {
    console.log(data.value.data.id);
    const response = await useFetch("/api/image", {
      method: "post",
      body: {
        productId: data.value.data.id,
        images: imageData
      },
    }).catch((error) => {
      console.error(error);
    });

    console.log("response", response);

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
    console.log("Ürün Kaydedilemedi");
    snackbar.add({
      type: "error",
      text: "Ürün Kaydedilemedi",
    });
  }
}
</script>

<template>
  <div class="product-update">
    <Form @submit="save">
      <div class="mb-3">
        <label for="product-name" class="form-label">Ürün Adı</label>
        <Field name="name" v-model="product.name" type="text" class="form-control" id="product-name" rules="required" />
        <ErrorMessage class="invalid" name="name" />
      </div>
      <div class="mb-3">
        <label for="product-name" class="form-label">Ürün Başlığı</label>
        <Field name="title" rules="required" v-model="product.title" type="text" class="form-control" id="product-name" />
        <ErrorMessage class="invalid" name="title" />
      </div>
      <div class="mb-3">
        <label for="product-content" class="form-label">Ürün Açıklaması</label>
        <Field name="content" rules="required" v-model="product.content" type="text" class="form-control"
          id="product-content" />
        <ErrorMessage class="invalid" name="content" />
      </div>
      <div class="product-add-slide mb-3">
        <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
          :autoplay="{ delay: 8000, disableOnInteraction: true, }" :creative-effect="{
            prev: { shadow: false, translate: ['-20%', 0, -1], },
            next: { translate: ['100%', 0, 0], },
          }">
          <SwiperSlide v-for="(image, index) in product.images" :key="index">
            <div class="card" style="width: 28rem">
              <nuxt-img :src="image" class="card-img-top img-fluid" style="width: 100%" />
              <div class="card-body">
                <h5 class="card-title">
                  Görsel Adı: {{ product.imageNames[index] }}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="mb-3">
        <label for="product-image" class="form-label">Ürün Görselli</label>
        <Field name="image" rules="required" @change="onFileChange" class="form-control" type="file" id="product-image"
          accept="image/png, image/jpeg" multiple />
        <ErrorMessage class="invalid" name="image" />
      </div>
      <button class="btn btn-primary">Kaydet</button>
    </Form>
  </div>
</template>

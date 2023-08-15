<script>
export default {
  name: "ProductAdd",
};
</script>

<script setup>
import { ref } from "vue";
const snackbar = useSnackbar();
// const { $hello, $readFileSync } =  useNuxtApp()

const product = ref({
  name: null,
  title: null,
  content: null,
});
const imageNames = ref([])
const images = ref([])

function dataClear() {
  product.value.imageNames = {
    name: null,
    title: null,
    content: null,
  }
  imageNames.value = []
  images.value = []
}

function onFileChange(e) {
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  createImage(files);
}
function createImage(files) {
  dataClear()

  for (var index = 0; index < files.length; index++) {
    var reader = new FileReader();
    imageNames.value.push(files[index].name);
    reader.onload = (event) => {
      images.value.push(event.target.result);
    };
    // reader.readAsArrayBuffer(files[index]);
    // reader.readAsText(files[index]);
    reader.readAsDataURL(files[index]);

    // const blob = new Blob([files[index]], { type: files[index].type });
    // reader.readAsArrayBuffer(blob);

    // data.value.files.push(blob)
  }
}

async function save() {
  const imageData = []

  images.value.forEach((img, index) => {
    imageData.push({ name: imageNames.value[index], image: img })
  });

  const { data, pending, error, refresh } = await useFetch("/api/product", {
    method: "post",
    body: product,
  });
  if (data.value.status) {
    console.log(data.value.data.id);
    const response = await useFetch("/api/image", {
      method: "post",
      body: {
        productId: data.value.data.id,
        images: imageData
      },
    });

    if (response.data.status) {
      console.log("Görsel Yüklendi");
      snackbar.add({
        type: "success",
        text: "Görsel Yüklendi",
      });
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
  <div class="product-add">

      <div class="mb-3">
        <label for="product-name" class="form-label">Ürün Adı</label>
        <input :value="product.name" @change="product.name = $event.target.value" type="text" class="form-control"
          id="product-name" />
      </div>
      <div class="mb-3">
        <label for="product-name" class="form-label">Ürün Başlığı</label>
        <input :value="product.title" @change="product.title = $event.target.value" type="text" class="form-control"
          id="product-name" />
      </div>
      <div class="mb-3">
        <label for="product-content" class="form-label">Ürün Açıklaması</label>
        <input :value="product.content" @change="product.content = $event.target.value" type="text" class="form-control"
          id="product-content" />
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
        <input @change="onFileChange" class="form-control" type="file" id="product-image" accept="image/png, image/jpeg"
          multiple />
      </div>
      <button class="btn btn-primary" @click="save">Kaydet</button>
 
  </div>
</template>

<script>
export default {
  name: "ProductAdd",
};
</script>

<script setup>
import { ref } from "vue";
// const { $hello, $readFileSync } =  useNuxtApp()

const input_image = ref(null);
const product = ref({
  name: null,
  title: null,
  content: null,
  files: [],
  images: [],
  imageNames: [],
});

function onFileChange(e) {
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  createImage(files);
}
function createImage(files) {
  product.value.imageNames = [];
  product.value.images = [];


  for (var index = 0; index < files.length; index++) {
    console.log("files[index]", files[index]);
    var reader = new FileReader();
    product.value.imageNames.push(files[index].name);
    reader.onload = (event) => {
      console.log("12312", event);
      const imageUrl = event.target.result;
      product.value.images.push(imageUrl);
    };
    // reader.readAsText(files[index]);
    // reader.readAsDataURL(files[index]);

    const blob = new Blob([files[index]], { type: files[index].type });
    reader.readAsArrayBuffer(blob);
    // data.value.files.push(blob)
  }
}
function removeImage(index) {
  images.splice(index, 1);
}

async function save() {

  const { data, pending, error, refresh } = await useFetch("/api/product", {
    method: "post",
    body: product,
  });
  console.log("save res:", { data, pending, error, refresh });
  console.log("data", data.value);
  console.log("111");
  if (data.value.status) {
    console.log("trueee");
    for (let index = 0; index < product.value.images.length; index++) {
      const imageArrayBuffer = product.value.images[index];
      const response = await useFetch("/api/image", {
      method: "post",
      body: imageArrayBuffer,
    });
    console.log(`request ${index}:`, response.value.data)
    }
   
  }
}
</script>

<template>
  <div class="product-add">
    {{ product }}
    {{ images }}
    <div class="mb-3">
      <label for="product-name" class="form-label">Ürün Adı</label>
      <input
        :value="product.name"
        @change="product.name = $event.target.value"
        type="text"
        class="form-control"
        id="product-name"
      />
    </div>
    <div class="mb-3">
      <label for="product-name" class="form-label">Ürün Başlığı</label>
      <input
        :value="product.title"
        @change="product.title = $event.target.value"
        type="text"
        class="form-control"
        id="product-name"
      />
    </div>
    <div class="mb-3">
      <label for="product-content" class="form-label">Ürün Açıklaması</label>
      <input
        :value="product.content"
        @change="product.content = $event.target.value"
        type="text"
        class="form-control"
        id="product-content"
      />
    </div>
    <div class="product-add-slide mb-3">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="(image, index) in product.images" :key="index">
          <div class="card" style="width: 28rem">
            <nuxt-img
              :src="image"
              class="card-img-top img-fluid"
              style="width: 100%"
            />
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
      <input
        @change="onFileChange"
        ref="input_image"
        class="form-control"
        type="file"
        id="product-image"
        accept="image/png, image/jpeg"
        multiple
      />
    </div>
    <button class="btn btn-primary" @click="save">Kaydet</button>
  </div>
</template>

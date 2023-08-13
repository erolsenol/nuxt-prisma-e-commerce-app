<script>
export default {
  name: "ProductAdd",
};
</script>

<script setup>
import { ref } from "vue";

const input_image = ref(null);
const data = ref({
  title: null,
  content: null,
  images: [],
  imageNames: [],
});

function onFileChange(e) {
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  createImage(files);
}
function createImage(files) {
  data.value.imageNames = [];
  data.value.images = [];

  for (var index = 0; index < files.length; index++) {
    var reader = new FileReader();
    data.value.imageNames.push(files[index].name);
    reader.onload = (event) => {
      const imageUrl = event.target.result;
      data.value.images.push(imageUrl);
    };
    reader.readAsDataURL(files[index]);
  }
}
function removeImage(index) {
  images.splice(index, 1);
}
</script>

<template>
  <div class="product-add">
    {{ data }}
    {{ images }}
    <div class="mb-3">
      <label for="product-name" class="form-label">Ürün Adı</label>
      <input
        :value="data.title"
        @change="data.title = $event.target.value"
        type="text"
        class="form-control"
        id="product-name"
      />
    </div>
    <div class="mb-3">
      <label for="product-content" class="form-label">Ürün Açıklaması</label>
      <input
        :value="data.content"
        @change="data.content = $event.target.value"
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
        <SwiperSlide v-for="(image, index) in data.images" :key="index">
          <div class="card" style="width: 28rem">
            <nuxt-img
              :src="image"
              class="card-img-top img-fluid"
              style="width: 100%"
            />
            <div class="card-body">
              <h5 class="card-title">
                Görsel Adı: {{ data.imageNames[index] }}
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

<script>
export default {
  name: "PageProducts",
};
</script>
<script setup>
import { useLocalePath } from '#imports'
import { ref, onMounted } from 'vue'
const router = useRouter();
const { id, title, content, name, images } = defineProps({
  id: Number,
  title: String,
  content: String,
  name: String,
  images: Array,
})

const image = images && images.length > 0 && images[0]

function openDetail() {
  router.push({ path: "/product-" + name, params: { id: name } });

}

// declare a ref to hold the element reference
// the name must match template ref value
const paginate = ref({ skip: 0, take: 20 })

</script>

<template>
  <div class="product-item col-6 col-md-4 col-lg-3 px-md-2 px-sm-1 px-xs-1 mb-3">
    <nuxt-link :to="localePath({ path: '/product-' + name, params: { id: name } })">
      <div class="card shadow dark" style="width: 100%; height: 27rem;">
        <NuxtImg class="border-bottom border-secondary-subtle" v-if="image" :src="'images/' + image.name"
          style="height: 15rem;" />
        <NuxtImg class="border-bottom border-secondary-subtle" v-else :src="'images/no-image.jpeg'"
          style="height: 15rem;" />
        <div class="card-body p-2">
          <h5 class="card-title text-capitalize mb-3">{{ title }}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary text-capitalize mb-3">{{ name }}</h6>
          <div class="card-body-desc overflow-y-auto scrollbar-light" style="max-height: 90px;">
            <p class="card-text text-capitalize ">{{ content }} </p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.product-item {
  a {
    text-decoration: none;
  }
}
</style>
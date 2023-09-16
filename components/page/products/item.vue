<script>
export default {
  name: "ProductItem",
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
let point = ref(3.5)
let starColor = ref("red")
let starBgWidth = ref(0)
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
    <nuxt-link :to="localePath({ path: '/product/' + name, params: { id: name } })">
      <div class="card shadow dark" style="width: 100%; height: 27rem;">
        <NuxtImg class="border-bottom border-secondary-subtle" v-if="image" :src="'images/' + image.name"
          style="height: 15rem;" />
        <NuxtImg class="border-bottom border-secondary-subtle" v-else :src="'default/no_image.jpeg'"
          style="height: 15rem;" />
        <div class="card-body p-2 overflow-y-auto position-relative scrollbar-light">
          <h6 class="card-title text-capitalize mb-2">{{ title }}</h6>
          <div class="product-item-name text-break">
            <p class="fs-6 card-subtitle text-body-secondary  text-capitalize  mb-2">{{ name }} qweqweqwqweqweqweqw</p>
          </div>
         
          <div class="d-flex aling-items-center justify-content-start mb-3">
            <template v-for="index in 5">
              <!-- <Icon name="fontisto:star" :color="`${index < point ? 'orange' : 'black'}`" class="product-item-star"
                :class="`${index != 1 ? 'ms-2' : ''}`" /> -->
              <BootstrapIconStar :color="`${index < point ? 'orange' : 'black'}`" class="product-item-star"
                :class="`${index != 1 ? 'ms-2' : ''}`" width="20" height="20" />
            </template>


          </div>
          <!-- <div class="card-body-desc overflow-y-auto scrollbar-light" style="max-height: 90px;">
            <p class="card-text text-capitalize ">{{ content }} </p>
          </div> -->

          <!-- Detail Button Animation -->
          <!-- <Transition type="animation">
            <div class="product-item-detail w-100 d-flex flex-column position-absolute bottom-0 start-0">
              <button class="btn btn-secondary rounded-0">{{ $t('detail') }}</button>
            </div>
          </Transition> -->

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

  .card-body {
    max-height: 12rem;

    * {
      line-height: 1.6rem;
    }
  }

  .product-item-star {
    // color: v-bind('starColor') !important;
  }
}
</style>
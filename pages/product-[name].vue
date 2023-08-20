<script>
export default {
  name: "PageProductDetail",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
const route = useRoute()
const item = ref({})

onMounted(() => {
  console.log("product onMounted");
  //fix
  setTimeout(() => {
    get()
  }, 500);

})

async function get() {

  const config = {
    params: {
      name: route.params.name
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/product", config);
  console.log("data", data.value);
  if (!data || !data.value || !data.value.data) return

  item.value = data.value.data
  console.log("item.value", item.value);
}

</script>

<template>
  <div class="container product-detail">
    <div class="row">
      <div class="col-6 product-detail-image border rounded-2 p-2">
        <template v-if="item.images && item.images.length > 0">
          <NuxtImg class="rounded-2" :src="'images/' + item.images[0].name" style="width: 26rem; height: 30rem;" />
        </template>
        <NuxtImg class="border-bottom border-secondary-subtle" v-else :src="'images/no-image.jpeg'"
          style="height: 15rem;" />
      </div>
      <div class="col-6 product-detail-content">
        <div class="product-detail-content-title">
          {{ item.title }}
        </div>
        <div class="product-detail-content-name">
          {{ item.name }}
        </div>
      </div>
    </div>
    <p>{{ item }}</p>
  </div>
</template>
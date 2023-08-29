<script>
export default {
  name: "PageCategories",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
const { locales } = useI18n()
const { $qs } = useNuxtApp()

// declare a ref to hold the element reference
// the name must match template ref value
const paginate = ref({ skip: 0, take: 20 })
const items = ref([])
let loading = ref(true)

onMounted(() => {
  console.log("product onMounted");
  //fix
  setTimeout(() => {
    getAll()
  }, 500);

})

async function getAll() {
  const config = {
    params: {
      ...paginate.value
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/product", config).finally(() => loading.value = false);

  if (!data || !data.value || !data.value.data) return

  items.value = data.value.data
}

</script>

<template>
  <div class="product">
    sdfsd
    <div class="row">
      <div class="col product-filter p-2 px-3 mb-2">
        <!-- filter -->
      </div>
    </div>
    
    <div class="row" v-if="!loading">
      <PageProductsItem :id="item.id" :images="item.images" :title="item.title" :content="item.content" :name="item.name"
        v-for="(item, index) in items" :key="index" />
    </div>
    <Loading v-else />
  </div>
</template>
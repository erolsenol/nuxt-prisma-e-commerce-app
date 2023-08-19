<script>
export default {
  name: "PageProducts",
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

onMounted(() => {
  getAll()
})

async function getAll() {
  const config = {
    params: {
      ...paginate.value
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/product", config);
  if (!data.value && !data.value.data) return

  items.value = data.value.data
}

</script>

<template>
  <div class="product">
    <div class="product-item" v-for="(item, index) in items" :key="index">
      {{ item.name }}
    </div>
  </div>
</template>
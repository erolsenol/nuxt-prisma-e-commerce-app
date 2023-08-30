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
let paginate = reactive({
  skip: 0,
  take: 5,
  currentPage: 1,
  totalCount: 0,
  totalPage: 0,
})
let items = ref([])
let loading = ref(true)

onMounted(() => {
  console.log("product onMounted");
  //fix
  setTimeout(() => {
    getAll()
  }, 500);

})

async function getAll(page) {
  if (Number.isInteger(page)) {
    paginate.skip = paginate.take * (page - 1)
  }

  const config = {
    params: {
      paginate
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/product", config).finally(() => loading.value = false);

  if (data.value.status) {
    items.value = data.value.data
    console.log("paginate", paginate);
    paginate = data.value.paginate
    console.log("paginate", paginate);
  }


}

</script>

<template>
  <div class="product">
    <div class="row">
      <div class="col product-filter p-2 px-3 mb-2">
        <!-- filter -->
      </div>  
    </div>

    <template v-if="!loading">
      <div class="row">
        <PageProductsItem :id="item.id" :images="item.images" :title="item.title" :content="item.content"
          :name="item.name" v-for="(item, index) in items" :key="index" />
      </div>

      <PaginationPage :paginate="paginate" @page="getAll" />
    </template>

    <Loading v-else />
  </div>
</template>
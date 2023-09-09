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
  take: 20,
  currentPage: 1,
  totalCount: 0,
  totalPage: 0,
})
let items = ref([])
let filter = ref({})
let loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    getAll()
  }, 100);

})

async function getAll(page) {
  if (Number.isInteger(page)) {
    paginate.skip = paginate.take * (page - 1)
  }

  const config = {
    params: {
      filter: { ...filter },
      paginate
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/product", config).finally(() => loading.value = false);

  if (data?.value?.status) {
    items.value = data.value.data
    console.log("paginate", paginate);
    paginate = data.value.paginate
    console.log("paginate", paginate);
  }
}

</script>


<template>
  <ClientOnly fallback-tag="span" fallback="Loading comments...">


    <div class="product">
      <div class="row mt-3 mb-2">
        <div class="col product-filter p-2 px-3 mb-2">
          <div class="input-group input-search mb-3" v-if="items.length > 0">
            <span class="input-group-text p-2" id="product-search">
              <Icon name="el:search" size="26" />
            </span>
            <input type="text" v-model="filter.general" class="form-control"
              :placeholder="$t('search_product_brand_category')" aria-label="Search" aria-describedby="product-search">
            <button class="input-group-text btn btn-secondary px-4" @click="getAll">{{ $t('search_btn') }}</button>
          </div>
        </div>
      </div>

      <template v-if="!loading">
        <div class="row">
          <PageProductsItem :id="item.id" :images="item.images" :title="item.title" :content="item.content"
            :name="item.name" v-for="(item, index) in items" :key="index" />
        </div>

        <PaginationPage v-if="items.length > 0" :paginate="paginate" @page="getAll" />
        <template v-else>
          <p class="text-center fs-5 mb-5">{{ $t('no_found_products') }}</p>
        </template>
      </template>

      <Loading v-else />
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.input-search {
  width: 32rem;

  @media screen and (max-width: 575px) {
    width: 28rem;
  }
}
</style>
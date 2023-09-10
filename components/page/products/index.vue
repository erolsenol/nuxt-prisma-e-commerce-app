<script>
export default {
  name: "PageProducts",
};
</script>
<script setup>
import { ref, onMounted, onUnmounted, onServerPrefetch } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate';
import { string, object } from 'yup';

const { locales } = useI18n()
const { $qs } = useNuxtApp()

const schema = object().shape({
  general: string().required().min(2),
});

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
onUnmounted(() => {
  formClear()
})

function formClear() {
  items.value = []
  loading.value = true
}

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

async function search(page, e) {
  if (Number.isInteger(page)) {
    paginate.skip = paginate.take * (page - 1)
  }

  const config = {
    params: {
      general: filter.value.general,
      paginate
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/product/search", config).finally(() => loading.value = false);

  if (data?.value?.status) {
    items.value = data.value.data

    paginate = data.value.paginate

  }
}
</script>


<template>
  <ClientOnly fallback-tag="span" fallback="Loading comments...">


    <div class="product">
      <Form @submit="search(1)" :validation-schema="schema">
        <div class="row mt-3 mb-2">
          <div class="col product-filter p-2 px-3 mb-2">
            <div class="input-group input-search mb-3" v-if="items.length > 0">
              <span class="input-group-text p-2" id="product-search">
                <Icon name="el:search" size="26" />
              </span>
              <Field name="general" v-model="filter.general" type="text" class="form-control"
                :placeholder="$t('search_product_brand_category')" aria-describedby="product-search" aria-label="Search"
                id="search-product" />
              <button class="input-group-text btn btn-secondary px-4" type="submit">{{ $t('search_btn')
              }}</button>
            </div>
            <ErrorMessage class="invalid" name="general" />
          </div>
        </div>
      </Form>
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
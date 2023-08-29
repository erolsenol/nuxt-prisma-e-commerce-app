<script>
export default {
  name: "PageCategories",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
const { locale } = useI18n()
const { $qs } = useNuxtApp()
const route = useRoute()

let loading = ref(true)
let items = reactive([])
let category = reactive(null)
const filter = reactive({})
let paginate = reactive({
  skip: 0,
  take: 20,
  currentPage: 1,
  totalCount: 0,
  totalPage: 0,
})

async function getCategory() {
  const { data } = await useFetch("/api/category/" + route.query.id)

  if (data.value.status) {
    category = data.value.data
    await getAll()
  }
}

async function getAll() {
  const config = {
    params: {
      filter: {
        ...filter,
        categoryId: category.id,
      },
      paginate
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  loading.value = true
  const { data } = await useFetch("/api/product", config).finally(() => loading.value = false);

  if (data.value.status) {
    items = data.value.data
  }
}

watch(() => route.query.id, async (newVal) => {
  getData()
}, { deep: true })

async function getData() {
  await getCategory()
}

onMounted(() => {
  setTimeout(async () => {
    await getData()
  }, 100);
})

</script>

<template>
  <div class="product">
    <div class="row">
      <div class="col product-filter p-2 px-3 mb-2">
        <!-- filter -->
      </div>
    </div>
    {{ items }}
    <div class="row" v-if="!loading">
      <PageProductsItem :id="item.id" :images="item.images" :title="item.title" :content="item.content" :name="item.name"
        v-for="(item, index) in items" :key="index" />
    </div>
    <Loading v-else />
  </div>
</template>
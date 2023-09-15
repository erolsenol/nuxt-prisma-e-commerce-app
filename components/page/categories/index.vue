<script>
export default {
  name: "PageCategories",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
const { $qs } = useNuxtApp()
const route = useRoute()

let loading = ref(true)
let items = ref([])
let category = ref(null)
let filter = reactive({})
let paginate = reactive({
  skip: 0,
  take: 20,
  currentPage: 1,
  totalCount: 0,
  totalPage: 0,
})

// async function getCategory() {
//   console.log("route.query.id", route.query.id);
//   const { data } = await useFetch("/api/category/" + route.query.id).finally(() => loading.value = false)

//   if (data?.value?.status) {
//     category.value = data.value.data
//   }
// }

// watch(() => category.value, async (newVal) => {
//   console.log("new category", newVal)
//   await getAll(1, newVal.id)
// }, { deep: true })

async function getAll(page) {
  console.log("getAllgetAllgetAll");
  if (Number.isInteger(page)) {
    paginate.skip = paginate.take * (page - 1)
  }

  const config = {
    params: {
      filter: {
        ...filter,
        // categoryId: category.id,
      },
      paginate
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };
  console.log("useFetch");
  loading.value = true
  const { data } = await useFetch("/api/product/category/" + route.query.id, config).finally(() => loading.value = false);
  console.log("useFetch done");
  if (data?.value?.status) {
    items.value = data.value.data
    paginate = data.value.paginate
    // nextTick(() => {
    //   console.log("items", items)
    //   console.log("paginate", paginate)
    //   items = data.value.data
    //   paginate = data.value.paginate
    // })
  }


}

// watch(() => route.query.id, async (newVal) => {
//   getData()
// }, { deep: true })

// async function getData() {
//   await getCategory()
// }

onMounted(async () => {
  await getAll(1)
})

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
        <template v-for="(item, index) in items" :key="index">
          <PageProductsItem :id="item.id" :images="item.images" :title="item.title" :content="item.content"
            :name="item.name" />
        </template>
      </div>

      <div class="text-center fs-5 my-5" v-if="items.length == 0">
        {{ $t('no_found_products_this_category') }}
      </div>

      <PaginationPage v-if="paginate.totalPage > 1" :paginate="paginate" @page="getAll" />
    </template>

    <Loading v-else />
  </div>
</template>
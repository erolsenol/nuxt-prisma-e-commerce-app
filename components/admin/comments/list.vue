<script>
export default {
  name: "CommentList",
};
</script>

<script setup>
import { ref, reactive, onMounted } from "vue";
const { $qs, $helper, $swal } = useNuxtApp()
const { locale, t } = useI18n();

let props = defineProps({
  productId: Number,
})

watch(() => props.productId, async (newVal) => {
  getAll(1)
})

const rows = ref([])
const loading = ref(false)
let paginate = reactive({
  skip: 0,
  take: 20,
  currentPage: 1,
  totalCount: 0,
  totalPage: 0,
})
const total = ref({
  count: 0,
  page: 0
})
const goPage = ref(1)
let product = ref({
  id: null,
  name: null,
  title: null,
  content: null,
  createdAt: null,
  updatedAt: null
})
let filter = reactive({})
let formData = reactive({})
let formId = ref(-1)

onMounted(() => {
  setTimeout(() => {
    getAll(1)
  }, 100);

})


const snackbar = useSnackbar();
// const { $hello, $readFileSync } =  useNuxtApp()

function getPage(page) {
  if (page < 1) return
  goPage.value = page
  paginate.value.skip = (paginate.value.take * page) - paginate.value.take
  getAll()
}

async function remove(id, deleted) {
  if (!deleted) {
    const result = await $swal.fire({
      title: t('are_you_sure_delete'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `${t('yes')} ${t('delete')}`
    })

    if (!result.isConfirmed) {
      return
    }
  }

  const config = {
    method: "delete",
    body: {
      id,
      deleted
    }
  };

  loading.value = true
  const { data } = await useFetch("/api/comment", config).finally(() => loading.value = false);
  if (data.value.status) {
    getAll()
  }
}

async function getAll(page) {
  if (Number.isInteger(page)) {
    paginate.skip = paginate.take * (page - 1)
  }

  if (props.productId < 0) {
    return
  }

  const config = {
    params: {
      productId: props.productId,
      filter: { ...filter },
      paginate
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  loading.value = true
  const { data } = await useFetch("/api/comment", config).finally(() => loading.value = false);
  if (!data.value) return

  console.log("response data", data.value);

  if (data?.value?.status) {
    console.log("Görsel Yüklendi");
    rows.value = data.value.data
    paginate = data.value.paginate

    if (rows.value.length == 0) {
      snackbar.add({
        type: "success",
        text: t('success.item_count', [t('comment')]),
      });
    }
  } else {
    console.log("Görseller çekilirken bir sorun oluştu");
    snackbar.add({
      type: "error",
      text: "Görseller çekilirken bir sorun oluştu",
    });
  }
}

</script>

<template>
  <div class="comment-list position-relative mb-5">
    <p class="h5 mb-3" v-if="props.productId == -1">{{ $t('select_product_to_receive_comments') }}</p>

    <template v-if="!loading">

      <hr class="my-1" />

      <div class="comment-list-filter alert alert-primary border border-2 border-secondary border-opacity-50 rounded p-2"
        role="alert">
        <div class="d-flex justify-content-between mb-3">
          <span class="fs-5">{{ $t('filters') }}</span>
          <div class="filter-item form-switch mx-3">
            <input class="form-check-input me-2" role="switch" type="checkbox" v-model="filter.deleted"
              id="filter-deleted">
            <label class="form-check-label" for="filter-deleted">
              {{ $t('show_deleted') }}
            </label>
          </div>
        </div>
        
        <div class="comment-list-filter-container d-flex flex-row collapse">
          <div class="filter-item">
            <label for="filter-name" class="form-label">{{ $t('general') }}</label>
            <input type="text" v-model="filter.general" class="form-control" id="filter-name">
          </div>
        </div>

        <div class="d-flex justify-content-start mt-4 ">
          <button class="btn btn-primary px-3" @click="getAll">{{ $t('search') }}</button>
        </div>
      </div>

      <template v-if="rows.length > 0">
        <table class="table table-responsive table-hover table-striped">
          <thead>
            <tr class="table-light">
              <th scope="col">Id</th>
              <th scope="col">{{ $t('product') }} {{ $t('name') }}</th>
              <th scope="col">{{ $t('title') }}</th>
              <th scope="col">{{ $t('content') }}</th>
              <th scope="col">{{ $t('actions') }}</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="table-light" v-for="(row, index) in rows" :key="index">
              <th scope="row">{{ row.id }}</th>
              <td>{{ row.product[`name${locale != 'tr' ? `_${locale}` : ''}`] }}</td>
              <td>{{ row.title }}</td>
              <td>
                <p>{{ row.content }}</p>
              </td>
              <td>
                <div class="btn-group dropstart">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {{ $t('actions') }}
                  </button>
                  <ul class="dropdown-menu">
                    <!-- <li class="dropdown-item" @click="formId = row.id" data-bs-toggle="modal"
                    data-bs-target="#productFormModal">
                    {{ $t('update') }}</li> -->
                    <li class="dropdown-item" @click="remove(row.id, row.deleted)" data-bs-toggle="modal"
                      data-bs-target="#productFormModal">
                      {{ row.deleted ? $t('republish') : $t('delete') }}
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
      <template v-else>
        <p class="ms-1 mt-2 fs-6"> {{ $t('success.item_count', [$t('comment')]) }}</p>
      </template>
    </template>

    <Loading v-else />

    <div class="d-flex flex-row justify-content-end">
      <Pagination v-if="paginate.totalPage > 1" :paginate="paginate" @page="getAll" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
table {
  tbody {
    td {
      max-width: 400px
    }
  }
}
</style>
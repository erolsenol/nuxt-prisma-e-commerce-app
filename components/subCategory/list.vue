<script>
export default {
  name: "SubCategoryList",
};
</script>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
const { $qs } = useNuxtApp()


const rows = ref([])
let formId = ref(-1)
let formType = ref("")
let paginate = reactive({
  skip: 0,
  take: 120,
  currentPage: 1,
  totalCount: 0,
  totalPage: 0,
})
const filter = reactive({})

watch(() => filter, async (newVal) => {
  console.log("filter newVal:", newVal);
}, { deep: true })

onMounted(() => {
  console.log("onMounted");
  getAll()
})

function formOpen(type, id) {
  formType.value = type
  formId.value = id
}

const snackbar = useSnackbar();

async function getAll(page) {
  if (Number.isInteger(page)) {
    paginate.skip = paginate.take * (page - 1)
  }

  const config = {
    params: {
      paginate: { ...paginate },
      filter: { ...filter }
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: true })
  };

  const { data } = await useFetch("/api/subCategory", config);
  if (!data.value) return

  if (data?.value?.status) {
    console.log("Alt Kategori Yüklendi");
    rows.value = data.value.data
    paginate = data.value.paginate

    if (rows.value.length == 0) {
      snackbar.add({
        type: "success",
        text: "Alt Kategori sayısı 0",
      });
    }
  } else {
    console.log("Alt Kategoriler çekilirken bir sorun oluştu");
    snackbar.add({
      type: "error",
      text: "Alt Kategoriler çekilirken bir sorun oluştu",
    });
  }
}

</script>

<template>
  <div class="sub-category-list">
    <div
      class="sub-category-list-filter alert alert-primary border border-2 border-secondary border-opacity-50 rounded p-2"
      role="alert">
      <div class="d-flex justify-content-between mb-3">
        <span class="fs-5">{{ $t('filters') }}</span>
        <div class="filter-item form-switch mx-3">
          <input class="form-check-input me-2" role="switch" type="checkbox" v-model="filter.deleted" id="filter-deleted">
          <label class="form-check-label" for="filter-deleted">
            {{ $t('show_deleted') }}
          </label>
        </div>
      </div>

      <div class="sub-category-list-filter-container d-flex flex-row collapse">
        <div class="filter-item">
          <label for="filter-name" class="form-label">{{ $t('name') }}</label>
          <input type="text" v-model="filter.name" class="form-control" id="filter-name">
        </div>
        <div class="filter-item">
          <label for="filter-name-en" class="form-label">{{ $t('name_en') }}</label>
          <input type="text" v-model="filter.name_en" class="form-control" id="filter-name-en">
        </div>
        <div class="filter-item">
          <label for="filter-description" class="form-label">{{ $t('description') }}</label>
          <input type="text" v-model="filter.description" class="form-control" id="filter-description">
        </div>
        <div class="filter-item">
          <label for="filter-description-en" class="form-label">{{ $t('description_en') }}</label>
          <input type="text" v-model="filter.description_en" class="form-control" id="filter-description-en">
        </div>

      </div>
    </div>
    <div class="filter-item mb-3 text-end d-flex flex-row justify-content-between">
      <h5 class="ps-1">{{ $t('sub_category') }} {{ $t('list') }}</h5>
      <button @click="getAll" class="btn btn-primary">{{ $t('category_get') }}</button>
    </div>
    <table class="table table-hover table-striped ">
      <thead>
        <tr class="table-light">
          <th scope="col">{{ $t('order') }}</th>
          <th scope="col">Id</th>
          <th scope="col">{{ $t('name') }}</th>
          <th scope="col">{{ $t('name_en') }}</th>
          <th scope="col">{{ $t('description') }}</th>
          <th scope="col">{{ $t('description_en') }}</th>
          <th scope="col">{{ $t('top_category') }}</th>
          <th scope="col">{{ $t('sub_category') }}</th>
          <th scope="col">{{ $t('actions') }}</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr class="table-light" v-for="(row, index) in rows" :key="index">
          <th>{{ index + 1 }}</th>
          <th scope="row">{{ row.id }}</th>
          <td>{{ row.name }}</td>
          <td>{{ row.name_en }}</td>
          <td>{{ row.description }}</td>
          <td>{{ row.description_en }}</td>
          <td>{{ row.product?.name }}</td>
          <td class="text-center">
            <Tooltip text="123123123">
              <template v-slot:content>
                <h6>
                  <span class="badge bg-secondary">
                    {{ row.subCategory?.length }}
                  </span>
                </h6>
              </template>
            </Tooltip>
          </td>
          <td>
            <div class="btn-group dropstart">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                {{ $t('actions') }}
              </button>
              <ul class="dropdown-menu">
                <li class="dropdown-item" @click="formOpen('update', row.id)" data-bs-toggle="modal"
                  data-bs-target="#categoryFormModal">
                  {{ $t('update') }}</li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li class="dropdown-item" @click="formOpen('delete', row.id, row.deleted)" data-bs-toggle="modal"
                  data-bs-target="#categoryFormModal"> {{ row.deleted ? $t('republish') : $t('delete') }}
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex flex-row justify-content-between">
      <button @click="getAll" class="btn btn-primary" v-if="rows.length > 0">{{ $t('category_get') }}</button>
      <Pagination :paginate="paginate" @page="getAll" />
    </div>

    <div class="modal fade" id="categoryFormModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="categoryFormModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="categoryFormModalLabel">{{ $t('category') }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <CategoryForm @getAll="getAll" :type="formType" closeBtnStatus :formId="formId" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-item {
  margin-right: 1rem;
}
</style>
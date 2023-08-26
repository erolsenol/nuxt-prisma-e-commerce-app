<script>
export default {
  name: "CategoryList",
};
</script>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
const { $qs } = useNuxtApp()

const rows = ref([])
let formId = ref(-1)
const paginate = reactive({
  skip: 0,
  take: 20
})
const filter = reactive({})
const category = ref({
  id: null,
  name: null,
  name_en: null,
  description: null,
  description_en: null,
  createdAt: null,
  updatedAt: null
})

watch(() => filter, async (newVal) => {
  console.log("filter newVal:", newVal);
}, { deep: true })

onMounted(() => {
  console.log("onMounted");
  getAll()
})

const snackbar = useSnackbar();

async function getAll() {
  console.log("filter", filter);

  const config = {
    params: {
      paginate: { ...paginate },
      filter: { ...filter }
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: true })
  };

  const { data } = await useFetch("/api/category", config);
  if (!data.value) return

  console.log("response data", data.value);

  if (data?.value?.status) {
    console.log("Kategori Yüklendi");
    rows.value = data.value.data

    if (rows.value.length == 0) {
      snackbar.add({
        type: "success",
        text: "Kategori sayısı 0",
      });
    }
  } else {
    console.log("Kategoriler çekilirken bir sorun oluştu");
    snackbar.add({
      type: "error",
      text: "Kategoriler çekilirken bir sorun oluştu",
    });
  }
}

async function get(id) {
  const config = {
    params: {
      id
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/category/" + id);
  if (!data.value) return

  if (data.value.data) {
    category.value = data.value.data
  }

  if (data.value.error) {
    console.log("Bir hata oluştu");
    snackbar.add({
      type: "error",
      text: "Bir hata oluştu",
    });
  }
}

async function update(body) {
  console.log("update", body);
  return

  const config = {
    params: {
      id
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/image/" + id, {
    method: "put",
    body: {
      ...body.value
    }
  });
  if (!data.value.status) return

  if (data.value.error) {
    console.log("Bir hata oluştu");
    snackbar.add({
      type: "error",
      text: "Bir hata oluştu",
    });
  }
}
</script>

<template>
  <div class="category-list">
    <div class="category-list-filter border border-2 border-secondary border-opacity-50 rounded p-2">
      <div class="d-flex justify-content-between mb-3">
        <span class="fs-5">{{ $t('filters') }}</span>
        <div class="filter-item form-switch mx-3">
          <input class="form-check-input me-2" role="switch" type="checkbox" v-model="filter.deleted" id="filter-deleted">
          <label class="form-check-label" for="filter-deleted">
            {{ $t('show_deleted') }}
          </label>
        </div>
      </div>

      <div class="category-list-filter-container d-flex flex-row">
        <div class="filter-item">
          <label for="filter-name" class="form-label">{{ $t('name') }}</label>
          <input type="text" v-model="filter.name" class="form-control" id="filter-name">
        </div>

      </div>
    </div>
    <table class="table table-hover table-striped ">
      <thead>
        <tr class="table-light">
          <th scope="col">Id</th>
          <th scope="col">{{ $t('name') }}</th>
          <th scope="col">{{ $t('name_en') }}</th>
          <th scope="col">{{ $t('description') }}</th>
          <th scope="col">{{ $t('description_en') }}</th>
          <th scope="col">{{ $t('actions') }}</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr class="table-light" v-for="(row, index) in rows" :key="index">
          <th scope="row">{{ row.id }}</th>
          <td>{{ row.name }}</td>
          <td>{{ row.name_en }}</td>
          <td>{{ row.description }}</td>
          <td>{{ row.description_en }}</td>
          <td>
            <div class="btn-group dropstart">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                {{ $t('actions') }}
              </button>
              <ul class="dropdown-menu">
                <li class="dropdown-item" @click="formId = row.id" data-bs-toggle="modal"
                  data-bs-target="#categoryFormModal">
                  {{ $t('update') }}</li>
                <li class="dropdown-item" data-bs-toggle="modal" data-bs-target="#categoryFormModal"> {{ $t('delete') }}
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="getAll" class="btn btn-primary">{{ $t('category_get') }}</button>

    <div class="modal fade" id="categoryFormModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="categoryFormModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="categoryFormModalLabel">{{ $t('category') }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <CategoryForm type="update" closeBtnStatus :formId="formId" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

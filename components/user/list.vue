<script>
export default {
  name: "UserList",
};
</script>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { useI18n } from "vue-i18n"

const { locale, t } = useI18n()
const { $qs } = useNuxtApp()
const rows = ref([])
let formId = ref(-1)
let formType = ref("")
let paginate = reactive({
  skip: 0,
  take: 20,
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
  const { data } = await useFetch("/api/user", config);
  if (!data.value) return
  if (data?.value?.status) {
    rows.value = data.value.data
    paginate = data.value.paginate
    if (rows.value.length == 0) {
      snackbar.add({
        type: "success",
        text: t('count_zero', [t('user')]),
      });
    }
  } else {
    console.log("Kullanıcılar çekilirken bir sorun oluştu");
    snackbar.add({
      type: "error",
      text: t('same_error', [t('user')]),
    });
  }
}
// function tooltipText(arr) {
//   return arr.subCategory.map(item => item[`name${locale.value !== 'tr' ? `_${locale.value}` : ''}`]).join(', ')
// }
</script>
<template>
  <div class="user-list">
    <div class="user-list-filter alert alert-primary border border-2 border-secondary border-opacity-50 rounded p-2"
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
      <div class="user-list-filter-container d-flex flex-row collapse">
        <div class="filter-item">
          <label for="filter-name" class="form-label">{{ $t('firstname_lastname') }}</label>
          <input type="text" v-model="filter.firstname_lastname" class="form-control" id="filter-name">
        </div>
        <div class="filter-item">
          <label for="filter-username" class="form-label">{{ $t('username') }}</label>
          <input type="text" v-model="filter.username" class="form-control" id="filter-username">
        </div>
        <div class="filter-item">
          <label for="filter-email" class="form-label">{{ $t('email') }}</label>
          <input type="text" v-model="filter.email" class="form-control" id="filter-email">
        </div>
        <div class="filter-item">
          <label for="filter-phone" class="form-label">{{ $t('phone') }}</label>
          <input type="text" v-model="filter.phone" class="form-control" id="filter-phone">
        </div>
      </div>
    </div>
    <div class="filter-item mb-3 text-end d-flex flex-row justify-content-between">
      <h5 class="ps-1">{{ $t('user') }} {{ $t('list') }}</h5>
      <button @click="getAll" class="btn btn-primary">{{ $t('user_get') }}</button>
    </div>
    <table class="table table-responsive table-hover table-striped ">
      <thead>
        <tr class="table-light">
          <th scope="col">{{ $t('order') }}</th>
          <th scope="col">Id</th>
          <th scope="col">{{ $t('firstname_lastname') }}</th>
          <th scope="col">{{ $t('username') }}</th>
          <th scope="col">{{ $t('email') }}</th>
          <th scope="col">{{ $t('phone') }}</th>
          <th scope="col">{{ $t('verify') }}</th>
          <th scope="col">{{ $t('actions') }}</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr class="table-light" v-for="(row, index) in rows" :key="index">
          <th>{{ index + 1 }}</th>
          <th scope="row">{{ row.id }}</th>
          <td>{{ `${row.firstname} ${row.lastname}` }}</td>
          <td>{{ row.username }}</td>
          <td>{{ row.email }}</td>
          <td>{{ row.phone }}</td>
          <td>
            <BootstrapIconCheckLg v-if="row.verify" class=" position-relative me-4" width="32" height="40"
              fill="#39a223" />
            <BootstrapIconXLg v-else class=" position-relative me-4" width="32" height="40" fill="#c52626" />
          </td>
          <td>
            <div class="btn-group dropstart">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                {{ $t('actions') }}
              </button>
              <ul class="dropdown-menu">
                <li class="dropdown-item" @click="formOpen('update', row.id)" data-bs-toggle="modal"
                  data-bs-target="#userFormModal">
                  {{ $t('update') }}</li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li class="dropdown-item" @click="formOpen('delete', row.id, row.deleted)" data-bs-toggle="modal"
                  data-bs-target="#userFormModal"> {{ row.deleted ? $t('republish') : $t('delete') }}
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex flex-row justify-content-between">
      <button @click="getAll" class="btn btn-primary" v-if="rows.length > 0">{{ $t('user_get') }}</button>
      <Pagination :paginate="paginate" @page="getAll" />
    </div>
    <div class="modal fade" id="userFormModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="userFormModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="userFormModalLabel">{{ $t('user') }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <UserForm @getAll="getAll" :type="formType" @formId:reset="(e) => formId = e" closeBtnStatus
              :formId="formId" />
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
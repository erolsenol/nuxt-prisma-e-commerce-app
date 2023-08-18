<script>
export default {
  name: "CategoryList",
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
const { $qs } = useNuxtApp()

const rows = ref([])
const paginate = ref({
  skip: 0,
  take: 20
})
const category = ref({
  id: null,
  name: null,
  name_en: null,
  description: null,
  createdAt: null,
  updatedAt: null 
})

onMounted(() => {
  console.log("onMounted");
  getAll()
})

const snackbar = useSnackbar();

async function getAll() {
  const config = {
    params: {
      ...paginate.value
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/category", config);
  if (!data.value) return

  console.log("response data", data.value);

  if (data?.value?.status) {
    console.log("Kategori Yüklendi");
    rows.value = data.value.data

    if(rows.value.length == 0) {
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

async function get(id){
  const config = {
    params: {
      id
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/category/"+id);
  if (!data.value) return

  if(data.value.data) {
    category.value = data.value.data
  }

  if(data.value.error) {
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
    <table class="table table-hover table-striped ">
      <thead>
        <tr class="table-dark">
          <th scope="col">Id</th>
          <th scope="col">İsim</th>
          <th scope="col">İngilizce İsim</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Aksiyon</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr class="table-light" v-for="(row, index) in rows" :key="index">
          <th scope="row">{{ row.id }}</th>
          <td>{{ row.name }}</td>
          <td>{{ row.name_en }}</td>
          <td>{{ row.description }}</td>
          <td>
            <div class="btn-group dropstart">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                İşlemler
              </button>
              <ul class="dropdown-menu">
                <li class="dropdown-item" @click="get(row.id)" data-bs-toggle="modal" data-bs-target="#categoryFormModal">Güncelle</li>
                <li class="dropdown-item" data-bs-toggle="modal" data-bs-target="#categoryFormModal"> TEST </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="getAll">QWE</button>

    <div class="modal fade" id="categoryFormModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="categoryFormModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="categoryFormModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <CategoryForm type="update" :form="category" @update:form="newValue => category = newValue" />
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

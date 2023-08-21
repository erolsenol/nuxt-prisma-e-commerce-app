<script>
export default {
  name: "ProductList",
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
const { $qs } = useNuxtApp()

const rows = ref([])
const loading = ref(true)
const paginate = ref({
  skip: 0,
  take: 20
})
const product = ref({
  id: null,
  name: null,
  title: null,
  content: null,
  createdAt: null,
  updatedAt: null
})

onMounted(() => {
  setTimeout(() => {
    getAll()
  }, 500);

})


const snackbar = useSnackbar();
// const { $hello, $readFileSync } =  useNuxtApp()



async function getAll() {
  const config = {
    params: {
      ...paginate.value
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  loading.value = true
  const { data } = await useFetch("/api/product", config).finally(() => loading.value = false);
  if (!data.value) return

  console.log("response data", data.value);

  if (data?.value?.status) {
    console.log("Görsel Yüklendi");
    rows.value = data.value.data

    if (rows.value.length == 0) {
      snackbar.add({
        type: "success",
        text: "Ürün sayısı 0",
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

async function get(id) {
  const config = {
    params: {
      id
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/product/" + id);
  if (!data.value) return

  if (data.value.data) {
    product.value = data.value.data
  }

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
  <div class="product-list" v-if="!loading">
    <table class="table table-hover table-striped">
      <thead>
        <tr class="table-light">
          <th scope="col">Id</th>
          <th scope="col">İsim</th>
          <th scope="col">Başlık</th>
          <th scope="col">İçerik</th>
          <th scope="col">Aksiyon</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr class="table-light" v-for="(row, index) in rows" :key="index">
          <th scope="row">{{ row.id }}</th>
          <td>{{ row.name }}</td>
          <td>{{ row.title }}</td>
          <td>{{ row.content }}</td>
          <td>
            <div class="btn-group dropstart">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                İşlemler
              </button>
              <ul class="dropdown-menu">
                <li class="dropdown-item" @click="get(row.id)" data-bs-toggle="modal" data-bs-target="#productFormModal">
                  Güncelle</li>
                <li class="dropdown-item" data-bs-toggle="modal" data-bs-target="#productFormModal"> TEST </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example" class="d-flex flex-row align-items-center justify-content-end">

      <ul class="pagination mb-0 me-5">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>

      <div class="d-flex flex-row align-items-center input-group me-3" style="width: 8rem;">
        <input type="text" class="form-control">
        <span class="input-group-text">.00</span>
      </div>

      <button type="button" class="btn btn-primary" @click="getAll">
        Ürünleri Getir
      </button>
    </nav>

    <div class="modal fade" id="productFormModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="productFormModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="productFormModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <AdminProductForm type="update" :form="product" @update:form="newValue => product = newValue" />
          </div>

        </div>
      </div>
    </div>
  </div>
  <Loading v-else />
</template>

<script>
export default {
  name: "MiniSliderList",
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
const { $qs, $helper } = useNuxtApp()

const rows = ref([])
const loading = ref(true)
const paginate = ref({
  skip: 0,
  take: 20,
})
const total = ref({
  count: 0,
  page: 0
})
const goPage = ref(1)
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

function getPage(page) {
  goPage.value = page
  paginate.value.skip = (paginate.value.take * page) - paginate.value.take
  getAll()
}


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

    total.value.count = data.value.paginate.totalCount
    total.value.page = data.value.paginate.totalPage

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

function itemUpdate(val) {
  console.log("itemUpdate", val);
  product.value = val
}

</script>

<template>
  <div class="product-list position-relative mb-5">
    <table class="table table-responsive table-hover table-striped" v-if="!loading">
      <thead>
        <tr class="table-light">
          <th scope="col">Id</th>
          <th scope="col">{{$t('name')}}</th>
          <th scope="col">{{$t('title')}}</th>
          <th scope="col">{{$t('content')}}</th>
          <th scope="col">{{$t('actions')}}</th>
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
                <li class="dropdown-item" @click="get(row.id)" data-bs-toggle="modal">
                  Güncelle</li>
                <li class="dropdown-item" data-bs-toggle="modal"> TEST </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Loading v-else />
    <nav class="d-flex flex-row align-items-center justify-content-end position-absolute bottom-10 end-0">
      <ul class="pagination mb-0 me-5">
        <li class="page-item">
          <a class="page-link" aria-label="Previous" @click="getPage(1)">
            <span aria-hidden="true">First</span>
          </a>
        </li>
        <template v-for="(page, index) in total.page">
          <li class="page-item" :class="goPage == page ? 'active' : ''" @click="getPage(page)"
            v-if="$helper.paginationCondition(page, goPage, total.page)"><a class="page-link">{{ page }}</a></li>
        </template>
        <li class="page-item">
          <a class="page-link" aria-label="Next" @click="getPage(total.page)">
            <span aria-hidden="true">Last</span>
          </a>
        </li>
      </ul>

      <span class="fs-6 me-2">{{ total.page }} /</span>
      <div class="d-flex flex-row align-items-center input-group me-3" style="width: 8rem;">
        <input type="text" class="form-control" v-model="goPage">
        <span class="input-group-text btn" style="cursor: pointer;" @click="getPage(goPage)">
          <Icon name="el:search" size="24" color="gray" />
        </span>
      </div>

      <button type="button" class="btn btn-primary" @click="getPage(goPage)">
        Ürünleri Getir
      </button>
    </nav>

    <div class="modal fade" id="productFormModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="productFormModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="productFormModalLabel"> {{ product.name }} {{ $t('detail') }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <AdminProductForm type="update" @update="itemUpdate" :form="product" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

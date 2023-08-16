<script>
export default {
  name: "ProductList",
};
</script>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
const { $qs } = useNuxtApp()

console.log("$qs", $qs)


const snackbar = useSnackbar();
// const { $hello, $readFileSync } =  useNuxtApp()

const rows = ref([])
const paginate = ref({
  skip: 0,
  take: 20
})

async function getAll() {
  const config = {
    params: {
      ...paginate.value
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const response = await useFetch("/api/product",config);

  if (response.data.status) {
    console.log("Görsel Yüklendi");
    snackbar.add({
      type: "success",
      text: "Görsel Yüklendi",
    });
  } else {
    console.log("Görsel Kaydedilemedi");
    snackbar.add({
      type: "error",
      text: "Görsel Kaydedilemedi",
    });
  }
}
</script>

<template>
  <div class="product-list">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <button @click="getAll">QWE</button>
  </div>
</template>

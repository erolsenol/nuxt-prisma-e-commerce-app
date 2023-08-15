<script>
export default {
  name: "ProductList",
};
</script>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';

const snackbar = useSnackbar();
// const { $hello, $readFileSync } =  useNuxtApp()

const imageNames = ref([])
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
  </div>
</template>

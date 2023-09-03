<script>
export default {
  name: "CategoriesPage",
};
</script>
<script setup>
import { reactive, onMounted } from "vue"

</script>

<template>
  <div class="slider">
    <div class="container">
      <HomeSwiper />
    </div>
  </div>

  <div class="content">
    <div class="container">
      <PageCategories />
    </div>
  </div>
</template>

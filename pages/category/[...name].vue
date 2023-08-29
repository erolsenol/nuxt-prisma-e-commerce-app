<script>
export default {
  name: "CategoriesPage",
};
</script>
<script setup>

</script>

<template>
  <div class="slider">
    <div class="container">
      <HomeSwiper />
    </div>
  </div>

  {{$route.params.name}}

  <div class="content">
    <div class="container">
     <PageCategories />
    </div>
  </div>
</template>

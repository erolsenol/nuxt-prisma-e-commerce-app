<script setup>
const foo = useFoo();
const { $helper } = useNuxtApp();


</script>

<template>
  <div class="slider">
    <div class="container-fluid">
      <HomeSwiper />
    </div>
  </div>

  <div class="content">
    <div class="container">
     <QuickContent />
     <PageProducts />
    </div>
  </div>
</template>

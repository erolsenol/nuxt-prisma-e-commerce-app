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

  <div class="content mt-3">
    <div class="container">
     <QuickContent />
    </div>
  </div>
</template>

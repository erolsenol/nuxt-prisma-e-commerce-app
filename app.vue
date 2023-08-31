<script setup>
import { ref, onMounted } from "vue";
const { $bootstrap } = useNuxtApp()

</script>

<template>
  <!-- <el-config-provider :size="elConfig.size" :z-index="elConfig.zIndex" :locale="locale"> -->
  <NuxtLayout>

    <router-view></router-view>
    
    <NuxtSnackbar />
    <SeoKit />
  </NuxtLayout>
  <!-- </el-config-provider> -->
</template>

<style></style>

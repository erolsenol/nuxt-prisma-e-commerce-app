<script setup>
import { ref, onMounted } from "vue";
import { ElConfigProvider } from "element-plus";
import en from "element-plus/dist/locale/en.mjs";
import tr from "element-plus/dist/locale/tr.mjs";



const show = ref(true);

const elConfig = ref({
  size: "small",
  zIndex: 2000,
});
const locale = ref({
  en,
  tr,
});
</script>

<template>
  <el-config-provider
    :size="elConfig.size"
    :z-index="elConfig.zIndex"
    :locale="locale"
  >
    
    <router-view></router-view>

    <div class="my-class">
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/dashboard">dashboard</NuxtLink>
      <LazyElButton type="warning">lazy button</LazyElButton>
      <h1 class="title">Nuxt Anime</h1>
      <div>nasilsin iyi misin ben iyiym</div>
    </div>
    
    <NuxtSnackbar />
    <SeoKit />
  </el-config-provider>
</template>

<style></style>

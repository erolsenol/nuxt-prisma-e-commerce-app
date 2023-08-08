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
    <NuxtLayout>
      <router-view></router-view>
    </NuxtLayout>
    <NuxtSnackbar />
    <SeoKit />
  </el-config-provider>
</template>

<style></style>

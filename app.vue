<script setup>
import { ref, onMounted } from "vue";
const { $bootstrap } = useNuxtApp()
const storage = useStorage()
const storeUser = useUser()

function checkLogin() {


  const user = storage.get("user") || null
  const access_token = storage.get("access_token") || null
  const has_login = storage.get("has_login") || null

  if (user && access_token && has_login) {
    storeUser.login({ user, access_token })
  }
}

onMounted(() => {
  checkLogin()
});


</script>

<template>
  <!-- <el-config-provider :size="elConfig.size" :z-index="elConfig.zIndex" :locale="locale"> -->
  <NuxtLayout>

    <!-- <router-view></router-view> -->
    <NuxtPage />
    <NuxtSnackbar />
    <SeoKit />
  </NuxtLayout>
  <!-- </el-config-provider> -->
</template>

<style></style>

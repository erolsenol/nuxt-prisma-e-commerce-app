<script>
export default {
  name: "PageAbout",
};
</script>
<script setup>

import { onMounted } from "vue"
const { locale } = useI18n()
const snackbar = useSnackbar();
const { $qs } = useNuxtApp()


const items = ref([])
const loading = ref(true)

async function getAll() {
  const config = {
    params: {
      pageName: "about",
      locale
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  loading.value = true
  const { data } = await useFetch("/api/pageContent", config).finally(() => loading.value = false);
  if (!data.value) return

  console.log("response data", data.value);

  if (data?.value?.status) {
    items.value = data.value.data

  } else {
    console.log("Görseller çekilirken bir sorun oluştu");
    snackbar.add({
      type: "error",
      text: "Görseller çekilirken bir sorun oluştu",
    });
  }
}

onMounted(() => {
  setTimeout(() => {
    getAll()
  }, 300);
})
</script>

<template>
  <div class="about-content">
    <div class="container">
      <HomeSwiper />
      <template v-for="(item, index) in items" :key="index">
        <PageDesing :index="index" :hasImage="item.images && item.images.length > 0"
          :hasContent="typeof item.content == 'string'" :hasTitle="typeof item.title == 'string'">
          <template v-slot:content>
            <p class="fs-4 text-capitalize fw-bold">{{ item.title }}</p>
            <p class="fs-6 ">{{ item.content }}</p>
          </template>
          <template v-slot:image>
            <template v-if="item.images && item.images.length > 0">
              <NuxtImg style="width: 26rem;" :src="`images/about-us/${item.images[0].name}`" />
            </template>
          </template>
        </PageDesing>
        <hr v-if="index < items.length - 1" />
      </template>
    </div>
  </div>
</template>

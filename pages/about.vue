<script setup>
import { ref, onMounted } from "vue"
const { locale, locales } = useI18n()

const { $qs, $helper } = useNuxtApp()

const items = ref([])
const loading = ref(true)

async function getAll() {
  const config = {
    params: {
      locale
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  loading.value = true
  const { data } = await useFetch("/api/pageAbout", config).finally(() => loading.value = false);
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
      {{ items }}
      <PageDesing>
        <template v-slot:content>
          content
        </template>
        <template v-slot:image>
          image
        </template>
      </PageDesing>
    </div>
  </div>
</template>

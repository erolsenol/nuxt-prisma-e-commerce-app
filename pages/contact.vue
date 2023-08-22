<script>
export default {
    name: "PageContact",
};
</script>
<script setup>
import { ref, onMounted } from "vue"


const { locale, locales } = useI18n()

const { $qs, $helper } = useNuxtApp()

const items = ref([])
const loading = ref(true)

async function getAll() {
  const config = {
    params: {
      pageName: "contact",
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
  <div class="contact-content">
    <div class="container">
   
    </div>
  </div>
</template>

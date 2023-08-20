<script>
export default {
  name: "PageProductDetail",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
const route = useRoute()
const item = ref({})

onMounted(() => {
  console.log("product onMounted");
  //fix
  setTimeout(() => {
    get()  
  }, 500);
  
})

async function get(){

  const config = {
    params: {
      name : route.params.name
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/product", config);
  console.log("data",data.value);
  if (!data || !data.value || !data.value.data) return

  item.value = data.value.data
  console.log("item.value",item.value);
}

</script>

<template>
  <div class="container">
    <p>{{ item }}</p>
    </div>
</template>
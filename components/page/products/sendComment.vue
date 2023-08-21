<script>
export default {
  name: "ProductSendComment",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
const comment = ref({})

async function get() {

  const config = {
    params: {
      name: route.params.name
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/product", config).finally(() => loading.value = false);
  console.log("data", data.value);
  if (!data || !data.value || !data.value.data) return

  item.value = data.value.data
  console.log("item.value", item.value);
}

</script>

<template>
  <div class="container product-detail-comment">
    <div class="row mt-3">
      <div class="col-12">
       comment
      </div>
    </div>
  </div>
</template>
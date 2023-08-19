<script>
export default {
  name: "PageProducts",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
    title: String,
    content: String,
    name: String
})

// declare a ref to hold the element reference
// the name must match template ref value
const paginate = ref({ skip: 0, take: 20 })
const items = ref([])

</script>

<template>
  <div class="product">
    <div class="product-item" v-for="(item, index) in items" :key="index">
      {{ item.name }}
    </div>
  </div>
</template>
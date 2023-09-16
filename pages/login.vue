<script setup>
  import { ref } from 'vue'

const name = ref('John')
definePageMeta({
  layout: "auth",
});


</script>

<template>
  <div>login page</div>
</template>

<script setup >
  import { ref } from 'vue'

const name = ref('John')
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div>register page</div>
</template>

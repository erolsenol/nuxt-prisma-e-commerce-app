<script setup>
const { locale } = useI18n()
</script>


<template>
  <div>
    <p>{{ $t('welcome') }}</p>
    <NuxtWelcome />
  </div>
</template>

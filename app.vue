<script setup>
const { locale } = useI18n()
const { isMobile } = useDevice();
const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({ targets: '.title', translateX: 250, duration: 800 })
  })
//lodash
var other = _difference([7,8,9], 2, [3], [[4]]);
</script>


<template>
  <div>
    <SeoKit />
    <h1 class="title">Nuxt Anime</h1>
    <div>nasilsin iyi misin ben iyiym</div>
    <NuxtWelcome />
  </div>
</template>

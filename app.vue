<script setup>
const { locale } = useI18n()
const { isMobile } = useDevice();

//lodash
var other = _difference([7,8,9], 2, [3], [[4]]);
</script>


<template>
  <div>
    <SeoKit />
    <div>nasilsin iyi misin ben iyiym</div>
    <NuxtWelcome />
  </div>
</template>

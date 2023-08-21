<script>
export default {
    name: "PageAboutEdit",
};
</script>

<script setup>
import { ref } from 'vue'
const { locale, locales } = useI18n()


</script>

<template>
<div>
    <template v-for="(lang,index) in locales" :key="`lang-${lang}-${index}`">
        <PageAboutContentEdit :lang="lang" :index="index" />
    </template>
</div>
</template>

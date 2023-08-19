<script>
export default {
    name: "PageAboutEdit",
};
</script>

<script setup>
import { ref } from 'vue'
const { locale, locales } = useI18n()

// declare a ref to hold the element reference
// the name must match template ref value

</script>

<template>
<div>
    <template v-for="(lang,index) in locales" :key="`lang-${lang}-${index}`">
        <PageAboutContentEdit :lang="lang" :index="index" />
    </template>
</div>
</template>

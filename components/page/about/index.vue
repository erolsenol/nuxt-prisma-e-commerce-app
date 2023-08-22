<script>
export default {
    name: "PageAboutEdit",
};
</script>

<script setup>
const { locale, locales } = useI18n()


</script>

<template>
    <div>
        <template v-for="(lang, index) in locales" :key="`about-lang-${lang}-${index}`">
            <PageContentEdit :lang="lang" :index="index" :pageName="'about'" :imagePath="'about-us/'" />
        </template>
    </div>
</template>

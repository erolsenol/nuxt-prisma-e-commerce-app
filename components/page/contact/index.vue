<script>
export default {
    name: "PageContactEdit",
};
</script>

<script setup>
const { locale, locales } = useI18n()


</script>

<template>
    <div>
        <template v-for="(lang, index) in locales" :key="`contact-lang-${lang}-${index}`">
            <PageContentEdit :lang="lang" :index="index" :pageName="'contact'" :imagePath="'contact-us/'" />
        </template>
    </div>
</template>
<script>
export default {
    name: "PageContactEdit",
};
</script>

<script setup>


</script>

<template>
    <div>
        <template v-for="(lang, index) in ['tr', 'en']" :key="`contact-lang-${lang}-${index}`">
            <PageContentEdit :lang="lang" :index="index" :pageName="'contact'" :imagePath="'contact-us/'" />
        </template>
    </div>
</template>
<script>
export default {
    name: "PageAboutEdit",
};
</script>

<script setup>


</script>

<template>
    <div>
        <template v-for="(lang, index) in ['tr', 'en']" :key="`about-lang-${lang}-${index}`">
            <PageContentEdit :lang="lang" :index="index" :pageName="'about'" :imagePath="'about-us/'" />
        </template>
    </div>
</template>

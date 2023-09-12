<script>
export default {
    name: "PageNull",
};
</script>
<script setup>
definePageMeta({
  layout: "404",
});

</script>

<template>
    <div class="page-null d-flex align-items-center justify-content-center">
        <NuxtImg src="default/404.jpg" />
    </div>
</template>

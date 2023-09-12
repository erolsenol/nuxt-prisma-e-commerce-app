<script>
export default {
    name: "LayoutDefault",
    // head() {
    //     return $nuxtI18nHead()
    // }
};
</script>

<template>
    <TheHeaderr></TheHeaderr>
    <slot />
    <TheFooter></TheFooter>
</template>
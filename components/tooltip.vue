<script>
export default {
    name: "Tooltip",
};
</script>
<script setup>
const props = defineProps({
    text: {
        type: String,
        default: ""
    },
    placement: {
        type: String,
        default: "top"
    },
})
</script>

<template>
    <a data-bs-toggle="tooltip" :data-bs-placement="placement" :data-bs-title="props.text">
        <slot name="content"></slot>
    </a>
</template>
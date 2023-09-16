<script>
export default {
    name: "Tooltip",
};
</script>
<script setup>
const { text } = defineProps({
    text: {
        type: String,
        default: ""
    },
})
</script>

<template>
        <div class="my-tooltip">
            <slot name="content"></slot>
            <span class="my-tooltiptext">{{ text }}</span>
        </div>
</template>
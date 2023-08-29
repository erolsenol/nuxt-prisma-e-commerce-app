<script>
export default {
    name: "CountBadge",
};
</script>

<script setup>
const props = defineProps({
    count: { type: Number, default: 0 },
})
</script>

<template>
    <h6>
        <span class="badge bg-secondary">
            {{ props.count }}
        </span>
    </h6>
</template>

<style lang="scss" scoped></style>
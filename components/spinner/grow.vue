<script>
export default {
    name: "SpinnerGrow",
};
</script>

<script setup>
let props = defineProps({
    color: { type: String, default: "light" },
    margin: { type: String, default: "0" },
    size: { type: String, default: "2" },
})


</script>

<template>
    <div class="spinner-grow" :class="`text-${props.color} m-${props.margin}`" role="status"
        :style="`width: ${props.size}rem; height: ${props.size}rem;`">
        <span class="visually-hidden">Loading...</span>
    </div>
</template>

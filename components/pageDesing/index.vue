<script>
export default {
    name: "PageDesing",
};
</script>
<script setup>
import { ref } from "vue"
const { index } = defineProps({
    index: { type: Number, required: true },
    hasImage: { type: Boolean, default: true },
    hasContent: { type: Boolean, default: true },
    hasTitle: { type: Boolean, default: true },
})
</script>

<template>
    <div class="d-flex flex-column flex-sm-column flex-md-row flex-lg-row mt-5"
        :class="index % 2 == 0 ? 'flex-md-row-reverse flex-lg-row-reverse' : ''">
        <div class="w-100">
            <slot name="content"></slot>
        </div>

        <div class="w-100 text-center">
            <NuxtImg v-if="!hasImage" src="svg/circle.png" style="width: 14rem" />
            <slot name="image"></slot>
        </div>
    </div>
</template>

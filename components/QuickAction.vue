<script setup>
const props = defineProps({
    title: String,
    content: String,
    icon: String
})
</script>

<template>
    <div class="card rounded border border-2 border-secondary border-opacity-75 overflow-hidden shadow-lg my-3" style="max-width: 15rem; min-width: 10rem; max-height: 15rem;">
        <div class="card-body overflow-y-scroll scrollbar-light">
            <Icon name="emojione-monotone:1st-place-medal" color="black" class="mb-3" size="50" />
            <h5 class="card-title text-capitalize" v-if="title">{{ title }}</h5>
            <p class="card-text text-capitalize pb-2" v-if="content">{{ content }}</p>
        </div>
    </div>
</template>

<style></style>
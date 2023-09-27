<script>
export default {
    name: "Accordion",
};
</script>

<script setup>
import { ref, reactive, onMounted } from "vue";
const { $qs, $helper } = useNuxtApp()


const props = defineProps({
    title: { type: String, required: true },
    name: { type: String, required: true },
})

</script>

<template>
    <div class="accordion mt-3" :id="`accordion${props.name}`">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${props.name}`" aria-expanded="true"
                    :aria-controls="`collapse${props.name}`">
                    {{ props.title }}
                </button>
            </h2>
            <div :id="`collapse${props.name}`" class="accordion-collapse collapse"
                :data-bs-parent="`accordion${props.name}`">
                <div class="accordion-body">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>
</template>



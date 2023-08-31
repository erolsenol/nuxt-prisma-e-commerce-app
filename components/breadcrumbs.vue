<script>
export default {
    name: "Breadcrumbs",
};
</script>

<script setup>
import { ref, watch, computed, toRefs, toRef } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
const { locale } = useI18n();

const emit = defineEmits(['value:update'])
const { $qs } = useNuxtApp()

let items = ref([]);
let innerValue = ref(-1);

let props = defineProps({
    value: Number,
})

watch(() => innerValue.value, async (newVal) => {
    emit('value:update', newVal)
}, { deep: true })

watch(() => props.value, async (newVal) => {
    innerValue.value = newVal
})

onMounted(() => {
    setTimeout(() => {
        get()
    }, 150);
});

async function get() {
    const config = {
        params: {
            all: "1"
        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data, pending, error, refresh } = await useFetch("/api/category", {
        ...config,
        method: "get",
    }).catch((error) => {
        console.error(error);
    });

    console.log("locale", locale.value);
    if (data.value.status) {
        const localName = `name${locale.value !== 'tr' ? `_${locale.value}` : ''}`
        items.value = data.value.data.map(item => ({ text: item[localName], value: item.id }))
        console.log("items.value", items);
    }
}
</script>

<template>
    <div class="container my-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-custom overflow-hidden text-center bg-body-tertiary border rounded-3">
                <li class="breadcrumb-item">
                    <a class="link-body-emphasis fw-semibold text-decoration-none" href="#">
                        <svg class="bi" width="16" height="16">
                            <use xlink:href="#house-door-fill"></use>
                        </svg>
                        Home
                    </a>
                </li>
                <li class="breadcrumb-item">
                    <a class="link-body-emphasis fw-semibold text-decoration-none" href="#">Library</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    Data
                </li>
            </ol>
        </nav>
    </div>
</template>

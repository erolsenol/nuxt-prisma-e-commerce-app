<script>
export default {
    name: "SelectCategory",
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

let { value } = defineProps({
    value: Number,
})

watch(() => innerValue.value, async (newVal) => {
    emit('value:update', newVal)
}, { deep: true })
watch(() => value, async (newVal) => {
    emit('props.value', newVal)
}, { deep: true })

onMounted(() => {
    get()
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
    <div class="mb-3">
        <label for="sb-category" class="form-label">{{ $t('category') }}</label>
        <div class="selectbox sb-category">
            <select class="form-select" id="sb-category" v-model="innerValue">
                <option :value="-1">{{ $t('select') }}</option>
                <template v-for="(item, index) in items" :key="index">
                    <option :value="item.value"> {{ item.text }}</option>
                </template>
            </select>
        </div>
    </div>
</template>

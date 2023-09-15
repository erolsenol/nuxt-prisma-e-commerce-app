<script>
export default {
    name: "SelectCategory",
};
</script>

<script setup>
import { ref, watch, computed, toRefs, toRef } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { useI18n } from "vue-i18n"

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

        <!-- // Datalist Ekle
        <label for="exampleDataList" class="form-label">Datalist example</label>
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
        <datalist id="datalistOptions">
            <option value="San Francisco"></option>
            <option value="New York"></option>
            <option value="Seattle"></option>
            <option value="Los Angeles"></option>
            <option value="Chicago"></option>
        </datalist> -->
    </div>
</template>

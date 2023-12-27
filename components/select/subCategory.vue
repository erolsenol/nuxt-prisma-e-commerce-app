<script>
export default {
    name: "SelectSubCategory",
};
</script>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed, toRefs, toRef } from "vue";
import { useI18n } from "vue-i18n"

const { locale } = useI18n();

const emit = defineEmits(['value:update'])
const { $qs } = useNuxtApp()

let items = ref([]);
let innerValue = ref(-1);
let filter = reactive({})

watch(() => innerValue.value, async (newVal) => {
    emit('value:update', newVal)
}, { deep: true })

let props = defineProps({
    value: Number,
    categoryId: Number,
})

watch(() => props?.value, async (newVal) => {
    innerValue.value = newVal
})

watch(() => props?.categoryId, async (newVal) => {
    if (newVal < 0) {
        delete filter.categoryId
    } else {
        filter.categoryId = newVal
    }
    get()
})



onMounted(() => {
    setTimeout(() => {
        get()
    }, 150);
});
onUnmounted(() => {
    items.value = []
    innerValue.value = -1
    filter = {}
})

async function get() {
    const config = {
        params: {
            filter: filter,
            all: "1"
        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data, pending, error, refresh } = await useFetch("/api/subCategory", {
        ...config,
        method: "get",
    }).catch((error) => {
        console.error(error);
    });

    if (data.value.status) {
        const localName = `name${locale.value !== 'tr' ? `_${locale.value}` : ''}`
        items.value = data.value.data.map(item => ({ text: item[localName], value: item.id }))
        console.log("items.value", items);
    }
}
</script>

<template>
    <div class="mb-3">
        <label for="sb-sub-category" class="form-label">{{ $t('sub_category') }}</label>
        <div class="selectbox sb-category">
            <select class="form-select" id="sb-sub-category" v-model="innerValue">
                <option :value="-1">{{ $t('select') }}</option>
                <template v-for="(item, index) in items" :key="index">
                    <option :value="item.value"> {{ item.text }}</option>
                </template>
            </select>
        </div>
    </div>
</template>

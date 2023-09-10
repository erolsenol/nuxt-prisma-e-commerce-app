<script>
export default {
    name: "Breadcrumb",
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
    value: Object,
})

const breadcrumbItems = computed(() => {
   return items.value.reverse()
})

watch(() => props.value, async (newVal) => {
    get(props.value)
}, { deep: true })


async function get({ name, id }) {
    const config = {
        params: {
        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data, pending, error, refresh } = await useFetch(`/api/${name}/${id}`, {
        ...config,
        method: "get",
    }).catch((error) => {
        console.error(error);
    });

    if (data.value.status) {
        const localName = `name${locale.value !== 'tr' ? `_${locale.value}` : ''}`
        const resData = data.value.data
        // items.value.push(data.value.data.map(item => ({ text: item[localName], value: item.id })))
        items.value.push(resData)

        const topCategory = resData.lowerSubCategoryId ? { name: 'subCategory', id: resData.lowerSubCategoryId } :
            resData.categoryId ? { name: 'category', id: resData.categoryId } : null
        if (topCategory) {
            get(topCategory)
        }
    }
}

function pageChange(to, route = "", item) {
    if (route && item) {
        router.push({ path: `/${route}/${to}`, query: { id: item.id } })
        // router.push({ name: `${route}-${to}___${locale.value}` })
    }
    else if (to) {
        router.push({ name: `${to}___${locale.value}` })
    }
}
</script>

<template>
    <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
        <ol class="breadcrumb breadcrumb-custom overflow-hidden text-center bg-body-tertiary border rounded-3 ps-4">
            <li class="breadcrumb-item" v-for="(item, index) in breadcrumbItems">
                <NuxtLink class="link-body-emphasis text-decoration-none text-capitalize"
                    @click="pageChange(item.name, 'category', category)"
                    :class="items.length > index + 1 ? 'fw-semibold' : ''">
                    <i class="bi bi-house-door-fill"></i>
                    {{ item[`name${locale !== 'tr' ? `_${locale}` : ''}`] }}
                </NuxtLink>
            </li>
        </ol>
    </nav>
</template>

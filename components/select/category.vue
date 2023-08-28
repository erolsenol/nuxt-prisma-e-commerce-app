<script>
export default {
    name: "SelectCategory",
};
</script>

<script setup>
import { ref, computed, toRefs, toRef } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';

const snackbar = useSnackbar();
const { $qs } = useNuxtApp()

const data = ref([]);

const { value } = defineProps({
    value: Number,
})

const innerValue = computed({
    get: () => value,
    set: val => $emit('update:value', val)
})

async function get() {
    const config = {
        params: {
            all: "1"
        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data, pending, error, refresh } = await useFetch("/api/category", {
        ...config,
        method: "post",
    }).catch((error) => {
        console.error(error);
    });

    if (!data.value.status) {
        return
    }

    data.value = data.value.data
}
</script>

<template>
    <div class="selectbox sb-category">
        <select class="form-select" v-model="innerValue">
            <option selected :value="null">Seçiniz</option>
            <option selected :value="'1'">1</option>
            <option :value="item.id" v-for="(item, index) in data">{{item.name}}</option>
        </select>
    </div>
</template>

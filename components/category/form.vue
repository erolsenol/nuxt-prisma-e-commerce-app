<script>
export default {
    name: "CategoryForm",
};
</script>

<script setup>
import { ref, computed, toRefs, watch } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { array, string, number, object } from 'yup';
import { useI18n } from "vue-i18n"

const emit = defineEmits(['getAll', 'formId:reset'])

const { t } = useI18n();
const snackbar = useSnackbar();
const { $qs } = useNuxtApp()

const schema = object().shape({
    name: string().required(),
    name_en: string().required(),
    description: string().nullable(true),
    description_en: string().nullable(true),
    subCategoryId: number().nullable(true),
    categoryId: number().nullable(true),
});

const props = defineProps({
    type: String,
    formId: Number,
    closeBtnStatus: {
        type: Boolean,
        default: () => false
    },
})
let formData = ref({})

watch(() => props.formId, async (newVal) => {
    if (newVal > -1) {
        console.log("watch formId:", newVal);
        await get(newVal)
    }
})

const disabled = computed(() => {
    return ['delete', 'show'].includes(props.type)
})

async function formClear() {
    return new Promise((resolve, reject) => {
        formData.value.name = null
        formData.value.name_en = null
        formData.value.description = null
        formData.value.description_en = null
        resolve(true)
    })

}

async function save(e, { resetForm }) {

    const bodyData = { ...formData.value }

    const keys = Object.keys(bodyData)
    keys.forEach(key => {
        if (typeof bodyData[key] === "object" || bodyData[key] === -1) {
            delete bodyData[key]
        }
    })

    const method = props.type == "create" ? "post" : props.type == "update" ? 'put' : props.type == "delete" ? 'delete' : ''

    const { data, pending, error, refresh } = await useFetch("/api/category", {
        method: method,
        body: bodyData,
    }).catch((error) => {
        console.error(error);
    });

    if (data.value.status) {
        resetForm()
        if (props.type !== "create") {
            const closeModal = document.querySelector('#close-modal-category-form')
            closeModal?.click()
            emit('getAll')
            emit('formId:reset', -1)

            snackbar.add({
                type: "success",
                text: t('api.success', [t('category')]),
            });
            return
        }

        snackbar.add({
            type: "success",
            text: t('api.created', [t('category')]),
        });
        return
    }

    snackbar.add({
        type: "error",
        text: t(`api.error.${data.value.error}`, [t('category')]),
    });
    return

}

async function get(id) {
    console.log("qweqweqw");
    const { data } = await useFetch("/api/category/" + id);
    if (!data.value) return

    if (data.value.status) {
        console.log("data.value.data", data.value.data);
        formData.value = data.value.data
    }
}
</script>

<template>
    <div class="image-form">
        <Form @submit="save" :validation-schema="schema">
            <div class="mb-3">
                <label for="image-form-name" class="form-label">{{ $t('category') }} {{ $t('name') }}</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="name" v-model="formData.name" :disabled="disabled" type="text" class="form-control"
                        id="image-form-name" />
                </div>
                <ErrorMessage class="invalid" name="name" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="name_en" v-model="formData.name_en" :disabled="disabled" type="text" class="form-control"
                        id="image-form-name-en" />
                </div>
                <ErrorMessage class="invalid" name="name_en" />
            </div>
            <div class="mb-3">
                <label for="image-form-description" class="form-label">{{ $t('category') }} {{ $t('description') }}</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="description" :disabled="disabled" v-model="formData.description" type="text"
                        class="form-control" id="image-form-description" />
                </div>

                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="description_en" v-model="formData.description_en" :disabled="disabled" type="text"
                        class="form-control" id="image-form-description-en" />
                </div>
            </div>
            <hr class="hr" />
            <div class="image-form-footer d-flex justify-content-between">
                <button type="submit" class="btn px-4"
                    :class="`${props.type == 'delete' ? 'btn-danger' : 'btn-primary'}`">{{ props.type == 'delete' ?
                        formData.deleted ? $t('republish') : $t('delete') : $t('save') }}</button>
                <button v-if="closeBtnStatus" class="close btn btn-secondary px-4" id="close-modal-category-form" data-bs-toggle="modal"
                    data-bs-target="#productFormModal">{{ $t('close') }}</button>
            </div>
        </Form>
    </div>
</template>

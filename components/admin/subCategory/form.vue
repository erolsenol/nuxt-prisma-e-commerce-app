<script>
export default {
    name: "SubCategoryForm",
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
    categoryId: number().nullable(true),
    lowerSubCategoryId: number().nullable(true),
});

const props = defineProps({
    type: String,
    closeBtnStatus: {
        type: Boolean,
        default: () => false
    },
    formId: Number,
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

    const { data, pending, error, refresh } = await useFetch("/api/subCategory", {
        method: method,
        body: bodyData,
    }).catch((error) => {
        console.error(error);
    });

    if (data.value.status) {
        resetForm()
        formData.value.categoryId = -1
        formData.value.lowerSubCategoryId = -1
        if (props.type !== "create") {
            const closeModal = document.querySelector('#close-modal-sub-category')
            closeModal?.click()
            emit('getAll')
            emit('formId:reset', -1)

            snackbar.add({
                type: "success",
                text: t('api.success', [t('sub_category')]),
            });
            return
        }

        snackbar.add({
            type: "success",
            text: t('api.created', [t('sub_category')]),
        });
        return
    }

    snackbar.add({
        type: "error",
        text: t(`api.error.${data.value.error}`, [t('sub_category')]),
    });
    return  

}

async function get(id) {
    const { data } = await useFetch("/api/subCategory/" + id);
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
            <SelectCategory :value="formData.categoryId" @value:update="(e) => formData.categoryId = e" />
            <SelectSubCategory :categoryId="formData.categoryId" :value="formData.lowerSubCategoryId"
                @value:update="(e) => formData.lowerSubCategoryId = e" />
            <div class="mb-3">
                <label for="image-form-name" class="form-label">{{ $t('sub_category') }} {{ $t('name') }}</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="name" v-model="formData.name" :disabled="disabled" type="text" class="form-control"
                        id="image-form-name" rules="required" />
                </div>
                <ErrorMessage class="invalid" name="name" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="name_en" v-model="formData.name_en" :disabled="disabled" type="text" class="form-control"
                        id="image-form-name-en" rules="" />
                </div>
                <ErrorMessage class="invalid" name="name_en" />
            </div>
            <div class="mb-3">
                <label for="image-form-description" class="form-label">{{ $t('sub_category') }} {{ $t('description')
                }}</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="description" rules="required" :disabled="disabled" v-model="formData.description"
                        type="text" class="form-control" id="image-form-description" />
                </div>
                <ErrorMessage class="invalid" name="description" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="description-en" v-model="formData.description_en" :disabled="disabled" type="text"
                        class="form-control" id="image-form-description-en" rules="" />
                </div>
            </div>
            <hr class="hr" />
            <div class="image-form-footer d-flex justify-content-between">
                <button type="submit" class="btn px-4"
                    :class="`${props.type == 'delete' ? 'btn-danger' : 'btn-primary'}`">{{ props.type == 'delete' ?
                        formData.deleted ? $t('republish') : $t('delete') : $t('save') }}</button>
                <button v-if="closeBtnStatus" class="close btn btn-secondary px-4" id="close-modal-sub-category" data-bs-toggle="modal"
                    data-bs-target="#productFormModal">{{ $t('close') }}</button>
            </div>
        </Form>
    </div>
</template>

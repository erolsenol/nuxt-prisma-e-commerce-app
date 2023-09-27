<script>
export default {
    name: "AdminSliderIndex",
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
const { $qs, $helper } = useNuxtApp()


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
let data = ref([])
let uploadImages = ref([])

watch(() => props.formId, async (newVal) => {
    if (newVal > -1) {
        console.log("watch formId:", newVal);
        await get(newVal)
    }
})

onMounted(() => {
    getAll()
});

const disabled = computed(() => {
    return ['delete', 'show'].includes(props.type)
})

function upload() {
    const imgInput = document.querySelector(`#img-input-admin-slider`)

    if (!imgInput) return

    imgInput.click()
}

async function onFileChange(e) {
    uploadImages.value = []
    let files = e.target.files || e.dataTransfer.files;

    if (!files.length) return;

    for (const file of files) {
        const image = await $helper.fileToBase64(file)
        uploadImages.value.push({ name: file.name, image })
    }
    save()
}

async function formClear() {
    return new Promise((resolve, reject) => {
        formData.value.name = null
        formData.value.name_en = null
        formData.value.description = null
        formData.value.description_en = null
        resolve(true)
    })

}

async function save() {
    if (uploadImages.value.length < 1) {
        return
    }

    const response = await useFetch("/api/image", {
        method: "post",
        body: {
            ownerName: "slider",
            images: uploadImages
        },
    }).catch((error) => {
        console.error(error);
    });

    if (response.data.value.status) {
        snackbar.add({
            type: "success",
            text: t('success.image_saved'),
        });
    }
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

async function getAll() {
    const { data } = await useFetch("/api/image?ownerName=slider");
    if (!data.value) return

    if (data.value.status) {
        console.log("data.value.data", data.value.data);
        data.value = data.value.data
    }
}
</script>

<template>
    <div class="admin-slider">
        <p class="fs-6">{{ $t('admin_slider_title') }}</p>
        <div></div>

        <div class="mt-4">
            <input v-show="false" name="image" @change="onFileChange" class="form-control" type="file"
                :id="`img-input-admin-slider`" accept="image/png, image/jpeg" multiple />
            <button class="btn btn-primary d-inline-flex justify-content-center align-items-center" @click="upload">
                <div class="spinner-border spinner-border-sm float-start me-3" role="status" v-if="loading">
                </div>
                {{ $t('upload_image') }}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "CategoryForm",
};
</script>

<script setup>
import { ref, computed, toRefs, watch } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { array, string, object } from 'yup';
const emit = defineEmits(['update', 'get'])

const snackbar = useSnackbar();
const { $qs } = useNuxtApp()

const schema = object().shape({
    name: string().required(),
    name_en: string(),
    description: string(),
    description_en: string(),
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

async function formClear() {
    return new Promise((resolve, reject) => {
        formData.value.name = null
        formData.value.name_en = null
        formData.value.description = null
        formData.value.description_en = null
        resolve(true)
    })

}

async function save(event) {
    console.log("save");

    const bodyData = { ...formData.value }

    const keys = Object.keys(bodyData)
    keys.forEach(key => {
        if (typeof bodyData[key] === "object") {
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
        formClear()
    }
    if (data.value.error === "There is a category with the same name") {
        snackbar.add({
            type: "error",
            text: "Aynı isimle kategori bulunuyor",
        });
        return
    }
    if (!data.value.status) {
        console.log("Kategori Kaydedilemedi");
        snackbar.add({
            type: "error",
            text: "Kategori Kaydedilemedi",
        });
        return
    }

}

async function get(id) {
    console.log("qweqweqw");
    const { data } = await useFetch("/api/category/" + id);
    if (!data.value) return

    if (data.value.status) {
        console.log("data.value.data",data.value.data);
        formData.value = data.value.data
    }
}

</script>

<template>
    <div class="image-form">
        <Form @submit="save" :validation-schema="schema">
            <div class="mb-3">
                <label for="image-form-name" class="form-label">Kategori Adı</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="name" v-model="formData.name" type="text" class="form-control" id="image-form-name"
                        rules="required" />
                </div>
                <ErrorMessage class="invalid" name="name" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="name-en" v-model="formData.name_en" type="text" class="form-control"
                        id="image-form-name-en" rules="" />
                </div>
            </div>
            <div class="mb-3">
                <label for="image-form-description" class="form-label">Kategori Açıklaması</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="description" rules="required" v-model="formData.description" type="text"
                        class="form-control" id="image-form-description" />
                </div>
                <ErrorMessage class="invalid" name="description" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="description-en" v-model="formData.description_en" type="text" class="form-control"
                        id="image-form-description-en" rules="" />
                </div>
            </div>
            <hr class="hr" />
            <div class="image-form-footer d-flex justify-content-between">
                <button type="submit" class="btn btn-primary">Kaydet</button>
                <button v-if="closeBtnStatus" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#productFormModal">Kapat</button>
            </div>

        </Form>
    </div>
</template>

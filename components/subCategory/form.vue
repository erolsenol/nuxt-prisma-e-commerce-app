<script>
export default {
    name: "SubCategoryForm",
};
</script>

<script setup>
import { ref, computed, toRefs, toRef } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';

const snackbar = useSnackbar();
const { $qs } = useNuxtApp()

const { type, form } = defineProps({
    type: String,
    form: Object,
    value: Object,
})

const innerForm = computed({
    get: () => form,
    set: value => $emit('update:form', value)
})

const initialCategory = () => ({
    name: null,
    name_en: null,
    description: null,
    categoryId: null
});

const subCategory = ref(initialCategory());

async function formClear() {
    return new Promise((resolve, reject) => {
        subCategory.value.name = null
        subCategory.value.name_en = null
        subCategory.value.description = null
        subCategory.value.categoryId = null
        resolve(true)
    })

}

async function save(event) {
    console.log("save");
    return
    const imageData = []

    console.log("send categorytt 12312");
    const { data, pending, error, refresh } = await useFetch("/api/subCategory", {
        method: "post",
        body: subCategory,
    }).catch((error) => {
        console.error(error);
    });
    if (data.value.status) {
        console.log("Kategori Yüklendi");
        snackbar.add({
            type: "success",
            text: "Kategori Yüklendi",
        });
        await formClear()
    } else {
        console.log("Kategori Kaydedilemedi");
        snackbar.add({
            type: "error",
            text: "Kategori Kaydedilemedi",
        });
    }
}

async function remove(id) {
    const config = {
        params: {
            id
        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data, pending, error, refresh } = await useFetch("/api/subCategory", {
        ...config,
        method: "delete",
    }).catch((error) => {
        console.error(error);
    });

    if (!data.value.status) {
        console.log("Kategori Silinemedi");
        snackbar.add({
            type: "error",
            text: "Kategori Silinemedi",
        });
        return
    }

    console.log("Kategori Silindi");
    snackbar.add({
        type: "success",
        text: "Kategori Silindi",
    });
}
</script>

<template>
    <div class="subCategory-form">
        <div>
            {{ type }} - {{ form }}
        </div>
        <div>
            innerForm - {{ innerForm }}
        </div>

        <Form @submit="save">
            <div class="mb-3">
                <label for="subCategory-name" class="form-label">Adı</label>
                <Field name="name" v-model="form.name" type="text" class="form-control" id="subCategory-name"
                    rules="required" />
                <ErrorMessage class="invalid" name="name" />
            </div>
            <div class="mb-3">
                <label for="subCategory-name_en" class="form-label">İngilizce Adı</label>
                <Field name="name_en" rules="required" v-model="form.name_en" type="text" class="form-control"
                    id="subCategory-name_en" />
                <ErrorMessage class="invalid" name="name_en" />
            </div>
            <div class="mb-3">
                <label for="subCategory-description" class="form-label">Kategori Açıklaması</label>
                <Field name="description" rules="required" v-model="form.description" type="text" class="form-control"
                    id="subCategory-description" />
                <ErrorMessage class="invalid" name="description" />
            </div>
            <div class="mb-3">
                <label for="subCategory-categoryId" class="form-label">Alt kategori Açıklaması</label>
                <Field name="categoryId" v-model="form.categoryId" as="select" class="form-control"
                    id="subCategory-categoryId" v-slot="{ field }">
                    <select class="form-select" v-bind="field">
                        <option selected :value="null">Seçiniz</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Field>
                <ErrorMessage class="invalid" name="categoryId" />
            </div>

            <hr class="hr" />
            <div class="subCategory-form-footer d-flex justify-content-between">
                <button type="submit" class="btn btn-primary">Kaydet</button>
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#categoryFormModal">Kapat</button>
            </div>
        </Form>
    </div>
</template>

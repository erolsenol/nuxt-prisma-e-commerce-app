<script>
export default {
    name: "CategoryForm",
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
});

const category = ref(initialCategory());

async function formClear() {
    return new Promise((resolve, reject) => {
        category.value.name = null
        category.value.name_en = null
        category.value.description = null
        resolve(true)
    })

}

async function save(event) {
    console.log("save");
    return
    const imageData = []

    console.log("send categorytt 12312");
    const { data, pending, error, refresh } = await useFetch("/api/category", {
        method: "post",
        body: category,
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

    const { data, pending, error, refresh } = await useFetch("/api/category", {
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
    <div class="category-form">
        <div>
            {{ type }} - {{ form }}
        </div>
        <div>
            innerForm - {{ innerForm }}
        </div>

        <Form @submit="save">
            <div class="mb-3">
                <label for="category-name" class="form-label">Adı</label>
                <Field name="name" v-model="form.name" type="text" class="form-control" id="category-name"
                    rules="required" />
                <ErrorMessage class="invalid" name="name" />
            </div>
            <div class="mb-3">
                <label for="category-name_en" class="form-label">İngilizce Adı</label>
                <Field name="name_en" rules="required" v-model="form.name_en" type="text" class="form-control"
                    id="category-name_en" />
                <ErrorMessage class="invalid" name="name_en" />
            </div>
            <div class="mb-3">
                <label for="category-description" class="form-label">Kategori Açıklaması</label>
                <Field name="description" rules="required" v-model="form.description" type="text" class="form-control"
                    id="category-description" />
                <ErrorMessage class="invalid" name="description" />
            </div>
        
            <hr class="hr" />
            <div class="category-form-footer d-flex justify-content-between">
                <button type="submit" class="btn btn-primary">Kaydet</button>
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#categoryFormModal">Kapat</button>
            </div>
        </Form>
    </div>
</template>

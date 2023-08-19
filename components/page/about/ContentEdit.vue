<script>
export default {
    name: "PageContentEdit",
};
</script>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const { lang, index } = defineProps({
    lang: String,
    index: Number,
})
const image = ref("")
const form = ref({
    title: null,
    content: null,
})
const { $helper } = useNuxtApp()

console.log("$helper", $helper);

const schema = yup.object({
    name: yup.string().required(),
    name_en: yup.string().required(),
    description: yup.string(),
    categoryId: yup.number().required(),
});

const snackbar = useSnackbar();


async function formClear() {
    return new Promise((resolve, reject) => {
        form.value.title = null
        form.value.content = null
        image.value = ""
        resolve(true)
    })
}

function upload() {
    const imgInput = document.querySelector(`#img-input-${lang}-${index}`)
    console.log(imgInput);
    if (!imgInput) return

    imgInput.click()
}

async function onFileChange(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    image.value = null
    image.value = await $helper.fileToBase64(files[0])
}

function save() {
    const imgInput = document.querySelector(`#img-input-${lang}-${index}`)
    console.log(imgInput);
    if (!imgInput) return

    imgInput.click()
}

</script>

<template>
    <div class="page-content-edit">
        <div class="page-content-edit-language" :class="lang">
            <div class="alert alert-primary py-1" role="alert">
                {{ $t('page_language') }}: {{ lang }}
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">{{ $t('title') }}</label>
                <input type="email" class="form-control" id="title">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">{{ $t('content') }}</label>
                <textarea class="form-control" id="content" rows="6"></textarea>
            </div>
            <div class="mb-3 ">
                <input v-show="false" name="image" @change="onFileChange" class="form-control" type="file"
                    :id="`img-input-${lang}-${index}`" accept="image/png, image/jpeg" />
                <nuxt-img v-if="image" :src="image" class="card-img-top img-fluid" style="max-width: 20rem;" />
                <button @click="upload()" type="button" class="btn btn-light float-end">{{ $t('upload_image')
                }}</button>
            </div>
            <div class="mb-3">
                <button type="button" @click="save" class="btn btn-primary">{{ $t('save') }}</button>
            </div>
        </div>
        <hr class="hr" />
    </div>
</template>

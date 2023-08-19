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
const imageBase64 = ref("")
const imageData = ref({
    name: null,
    data: null
})
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
        imageBase64.value = ""
        imageData.value.name = null
        imageData.value.data = null
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
    console.log("files", files);
    if (!files.length) return;
    imageBase64.value = null
    imageBase64.value = await $helper.fileToBase64(files[0])
    imageData.value.name = files[0].name
    imageData.value.data = imageBase64.value
}

async function save() {
    console.log(form.value.title);
    console.log(form.value.content);
    console.log(imageBase64.value);
    console.log(lang);
    if (!form.value.title || !form.value.content || !imageBase64.value) {
        snackbar.add({
            type: "error",
            text: "Formu Eksiksiz Doldurun",s
        });
        return
    }

    const body = {
        locale: lang,
        title: form.value.title,
        content: form.value.content
    }

    const { data, pending, error, refresh } = await useFetch("/api/pageAbout", {
        method: "post",
        body: body,
    }).catch((error) => {
        console.error(error);
    });
    if (data.value.status) {
        console.log(data.value.data.id);
        const imageBody = {
            path: "about-us/",
            ownerName: "pageaboutId",
            ownerId: "pageaboutId",
            images: [{
                name: imageData.value.name,
                image: imageData.value.data
            }]
        }

        const response = await useFetch("/api/image", {
            method: "post",
            body: imageBody,
        }).catch((error) => {
            console.error(error);
        });

        console.log("response", response);

        if (response.data.value.status) {
            console.log("Görsel Yüklendi");
            snackbar.add({
                type: "success",
                text: "Görsel Yüklendi",
            });
            await formClear()
        } else {
            console.log("Görsel Kaydedilemedi");
            snackbar.add({
                type: "error",
                text: "Görsel Kaydedilemedi",
            });
        }
    } else {
        if (data.value.error === "There is a product with the same name") {
            snackbar.add({
                type: "error",
                text: "Aynı İsimle Ürün bulunuyor",
            });

            await addValidation.value.reset()
            return true
        }
        console.log("Ürün Kaydedilemedi");
        snackbar.add({
            type: "error",
            text: "Ürün Kaydedilemedi",
        });
    }
    await addValidation.value.reset()
    return true
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
                <input v-model="form.title" class="form-control" id="title">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">{{ $t('content') }}</label>
                <textarea v-model="form.content" class="form-control" id="content" rows="6"></textarea>
            </div>
            <div class="mb-3 ">
                <input v-show="false" name="image" @change="onFileChange" class="form-control" type="file"
                    :id="`img-input-${lang}-${index}`" accept="image/png, image/jpeg" />
                <nuxt-img v-if="imageBase64" :src="imageBase64" class="card-img-top img-fluid" style="max-width: 20rem;" />
                <button @click="upload" type="button" class="btn btn-light float-end">{{ $t('upload_image')
                }}</button>
            </div>
            <div class="mb-3">
                <button type="button" @click="save" class="btn btn-primary">{{ $t('save') }}</button>
            </div>
        </div>
        <hr class="hr" />
    </div>
</template>

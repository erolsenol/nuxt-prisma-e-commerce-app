<script>
export default {
    name: "PageContentEdit",
};
</script>

<script setup>
import { ref, reactive } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { object, string } from 'yup';

const schema = object().shape({
    title: string().required(),
    content: string().required(),
});

const { lang, pageName, imagePath, index } = defineProps({
    lang: String,
    pageName: String,
    imagePath: String,
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

    if (!imgInput) return

    imgInput.click()
}

async function onFileChange(e) {
    console.log("onFileChange", pageName);
    let files = e.target.files || e.dataTransfer.files;
    console.log("files", files);
    if (!files.length) return;
    imageBase64.value = null
    imageBase64.value = await $helper.fileToBase64(files[0])
    imageData.value.name = files[0].name
    imageData.value.data = imageBase64.value
}

async function save() {
    if (!form.value.title || !form.value.content || !imageBase64.value) {
        snackbar.add({
            type: "error",
            text: "Formu Eksiksiz Doldurun",
        });
        return
    }

    const body = {
        locale: lang,
        pageName: pageName,
        title: form.value.title,
        content: form.value.content
    }

    const { data, pending, error, refresh } = await useFetch("/api/pageContent", {
        method: "post",
        body: body,
    }).catch((error) => {
        console.error(error);
    });
    if (data.value.status) {
        console.log(data.value.data.id);
        const imageBody = {
            path: imagePath,
            ownerName: "pageContentId",
            ownerId: data.value.data.id,
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
        if (data.value.error === "same_name") {
            snackbar.add({
                type: "error",
                text: "Aynı İsimle Ürün bulunuyor",
            });


        }
        console.log("Ürün Kaydedilemedi");
        snackbar.add({
            type: "error",
            text: "Ürün Kaydedilemedi",
        });
    }
}

</script>

<template>
    <div class="page-content-edit">
        <Form @submit="save" :validation-schema="schema">
            <div class="page-content-edit-language" :class="lang">
                <div class="alert alert-primary py-1" role="alert">
                    {{ $t('page_language') }}: {{ lang }}
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">{{ $t('title') }}</label>
                    <Field v-model="form.title" name="title" class="form-control" id="title" />
                    <ErrorMessage class="invalid text-capitalize" name="title" />
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">{{ $t('content') }}</label>
                    <Field v-model="form.content" as="textarea" name="content" class="form-control" id="content" rows="6" />
                    <ErrorMessage class="invalid text-capitalize" name="content" />
                </div>
                <div class="mb-3 d-flex flex-row justify-content-between">
                    <div>
                        <button type="submit" class="btn btn-primary">{{ $t('save') }}</button>
                    </div>
                    <input v-show="false" name="image" @change="onFileChange" class="form-control" type="file"
                        :id="`img-input-${lang}-${index}`" accept="image/png, image/jpeg" />
                    {{ pageName }}

                    <nuxt-img v-if="imageBase64" :src="imageBase64" class="card-img-top img-fluid"
                        style="max-width: 20rem;" />
                    <div>
                        <button @click="upload" type="button" class="btn btn-light float-end">{{ $t('upload_image')
                        }}</button>
                    </div>
                </div>
            </div>
        </Form>
        <hr class="hr" />
    </div>
</template>

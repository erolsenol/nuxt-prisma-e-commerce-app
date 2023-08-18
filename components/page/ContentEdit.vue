<script>
export default {
    name: "PageContentEdit",
};
</script>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const { locale, locales } = useI18n()

const schema = yup.object({
    name: yup.string().required(),
    name_en: yup.string().required(),
    description: yup.string(),
    categoryId: yup.number().required(),
});

const snackbar = useSnackbar();
const form = ref({
    title: null,
    content: null,
})

async function formClear() {
    return new Promise((resolve, reject) => {
        form.value.title = null
        form.value.content = null
        resolve(true)
    })
}

const pageImage = ref("pageImage")
const image = ref("")

console.log("pageImage",pageImage);

function upload(locale){
    console.log("locale",locale);

    console.log("this",this);

    const el = this[`pageImage${locale}`]

   console.log("el",el);
}

function onFileChange(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    createImage(files);
}
function createImage(files) {
    image.value = null
    var reader = new FileReader();
    reader.onload = (event) => {
        image.value = event.target.result;
    };
    reader.readAsDataURL(files[0]);
}

function save() {
    console.log("image", image.value);
    console.log("form", form.value);

    console.log("locales", locales.value);
}

</script>

<template>
    <div class="page-content-edit">
        <template v-for=" (locale, index) in locales" :key="`lang-${index}`">
            <div class="page-content-edit-language" :class="locale">
                <div class="alert alert-primary" role="alert">
                    {{ $t('page_language') }}: {{ locale }}
                    <!-- {{ $t('page_valid_for_language', [locale]) }} -->
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
                        :ref="`pageImage${locale}`" accept="image/png, image/jpeg" />
                    <nuxt-img v-if="image" :src="image" class="card-img-top img-fluid" style="max-width: 20rem;" />
                    <button @click="upload(locale)" type="button" class="btn btn-light float-end">{{ $t('upload_image')
                    }}</button>
                </div>
                <div class="mb-3">
                    <button type="button" @click="save" class="btn btn-primary">{{ $t('save') }}</button>
                </div>
            </div>
        </template>
    </div>
</template>

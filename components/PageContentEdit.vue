<script>
export default {
    name: "PageContentEdit",
};
</script>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required(),
    name_en: yup.string().required(),
    description: yup.string(),
    categoryId: yup.number().required(),
});

const snackbar = useSnackbar();

const initialSubCategory = () => ({
    name: null,
    name_en: null,
    description: null,
    categoryId: null
});

const subCategory = ref(initialSubCategory());

async function formClear() {
    return new Promise((resolve, reject) => {
        subCategory.value.name = null
        subCategory.value.name_en = null
        subCategory.value.description = null
        resolve(true)
    })
}

function imageWindowOpen(){
    console.log("pageImage",pageImage);

    pageImage.value.click()
}

const pageImage = ref("pageImage")
const image = ref("")
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
</script>

<template>
    <div class="page-content-edit">
        <div class="mb-3">
            <label for="title" class="form-label">{{ $t('title') }}</label>
            <input type="email" class="form-control" id="title">
        </div>
        <div class="mb-3">
            <label for="content" class="form-label">{{ $t('content') }}</label>
            <textarea class="form-control" id="content" rows="6"></textarea>
        </div>
        <div class="mb-3 ">
            <input v-show="false" name="image" @change="onFileChange" class="form-control" type="file" ref="pageImage"
                accept="image/png, image/jpeg" />
                <nuxt-img v-if="image"  :src="image" class="card-img-top img-fluid" style="max-width: 20rem;" />
            <button @click="imageWindowOpen" type="button" class="btn btn-light float-end">{{ $t('upload_image') }}</button>
        </div>
      
        <div class="mb-3">
            <button type="button" class="btn btn-primary">{{ $t('save') }}</button>
        </div>
  
    </div>
</template>

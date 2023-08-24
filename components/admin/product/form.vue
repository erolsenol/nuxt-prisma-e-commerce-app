<script>
export default {
    name: "ProductForm",
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
    title: string().required(),
    content: string().required(),
    image: array().min(0),
});

const props = defineProps({
    type: String,
    formId: Number,
})
let formData = ref({})

watch(() => props.formId, async (newVal) => {
    if (newVal > -1) {
        console.log("watch formId:", newVal);
        await get(newVal)
    }
})

const imageNames = ref([])
const images = ref([])

async function formClear() {
    return new Promise((resolve, reject) => {
        imageNames.value = []
        images.value = []
        product.value.name = null
        product.value.title = null
        product.value.content = null
        resolve(true)
    })

}

async function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve({ name: file.name, image: reader.result });
        reader.onerror = error => reject(error);
    })
}

async function onFileChange(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;

    let id = null
    if (props.type == 'update') {
        id = formData.value.id
    }

    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const imageData = await fileToBase64(file)
        const { data } = await useFetch("/api/image", {
            method: "post",
            body: {
                ownerName: "productId",
                ownerId: id,
                images: [imageData]
            },
        }).catch((error) => {
            console.error(error);
        });
    }

    if (props.type == 'update') {
        get(id)
    }

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
    const { data, pending, error, refresh } = await useFetch("/api/product", {
        method: "put",
        body: bodyData,
    }).catch((error) => {
        console.error(error);
    });
    if (!data.value.status) {
        console.log("Ürün Kaydedilemedi");
        snackbar.add({
            type: "error",
            text: "Ürün Kaydedilemedi",
        });
        return
    }
    formData.value = data.value.data
}

async function get(id) {
    const { data } = await useFetch("/api/product/" + id);
    if (!data.value) return

    if (data.value.status) {
        formData.value = data.value.data
    }
}

async function removeImage(id) {
    const config = {
        params: {
            id
        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data, pending, error, refresh } = await useFetch("/api/image", {
        ...config,
        method: "delete",
    }).catch((error) => {
        console.error(error);
    });

    if (!data.value.status) {
        console.log("Görsel Silinemedi");
        snackbar.add({
            type: "error",
            text: "Görsel Silinemedi",
        });
        return
    }

    if (props.type == 'update') {
        get(formData.value.id)
    }


    console.log("Görsel Silindi");
    snackbar.add({
        type: "success",
        text: "Görsel Silindi",
    });
}
</script>

<template>
    <div class="product-form">
        <Form @submit="save" :validation-schema="schema">
            <div class="mb-3">
                <label for="product-form-name" class="form-label">Ürün Adı</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="name" v-model="formData.name" type="text" class="form-control" id="product-form-name"
                        rules="required" />
                </div>
                <ErrorMessage class="invalid" name="name" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="name-en" v-model="formData.name_en" type="text" class="form-control"
                        id="product-form-name-en" rules="" />
                </div>
            </div>
            <div class="mb-3">
                <label for="product-form-title" class="form-label">Ürün Başlığı</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="title" rules="required" v-model="formData.title" type="text" class="form-control"
                        id="product-form-title" />
                </div>
                <ErrorMessage class="invalid" name="title" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="title-en" v-model="formData.title_en" type="text" class="form-control"
                        id="product-form-title-en" rules="" />
                </div>
            </div>
            <div class="mb-3">
                <label for="product-content" class="form-label">Ürün Açıklaması</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="content" rules="required" v-model="formData.content" type="text" class="form-control"
                        id="product-content" />
                </div>
                <ErrorMessage class="invalid" name="content" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="content-en" v-model="formData.content_en" type="text" class="form-control"
                        id="product-form-content-en" rules="" />
                </div>
            </div>
            <div class="product-form-slide mb-3">
                <span class="">Görsel Sayısı {{ formData.images?.length }}</span>
                <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
                    :effect="'creative'" :autoplay="{ delay: 5000, disableOnInteraction: true, }" :creative-effect="{
                        prev: { shadow: false, translate: ['-20%', 0, -1], },
                        next: { translate: ['100%', 0, 0], },
                    }">
                    <SwiperSlide v-for="(image, index) in formData.images" :key="`img-${index}`">
                        <div class="card" style="width: 28rem">
                            <div class="card-header">
                                <button type="button" @click="removeImage(image.id)"
                                    class="btn btn-danger float-end px-3 d-flex align-items-center justify-content-center">
                                    <Icon name="material-symbols:delete-outline" color="white" size="22" class="me-2" />
                                    Sil
                                </button>
                            </div>
                            <nuxt-img :src="`/images/${image.name}`" class="card-img-top img-fluid" style="width: 20rem" />

                            <div class="card-body">
                                <h5 class="card-title">
                                    {{ $t('image_name') }}: {{ image.name }}
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div class="mb-3">
                <label for="product-image" class="form-label">Görsel Yükle</label>
                <Field name="image" rules="" @change="onFileChange" class="form-control" type="file" id="product-image"
                    accept="image/png, image/jpeg" multiple />
                <ErrorMessage class="invalid" name="image" />
            </div>
            <hr class="hr" />
            <div class="product-form-footer d-flex justify-content-between">
                <button type="submit" class="btn btn-primary">Kaydet</button>
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#productFormModal">Kapat</button>
            </div>

        </Form>
    </div>
</template>

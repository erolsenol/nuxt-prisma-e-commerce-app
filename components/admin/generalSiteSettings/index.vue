<script>
export default {
    name: "generalSiteSettings",
};
</script>

<script setup>
import { ref, computed, toRefs, watch } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { array, string, object } from 'yup';
const emit = defineEmits(['update', 'get'])

const { t } = useI18n();
const snackbar = useSnackbar();
const { $qs } = useNuxtApp()

const schema = object().shape({
    headerLogo: string().nullable(true),
    footerLogo: string().nullable(true),
    mail: string().nullable(true),
    phone: string().nullable(true),
    address: string().nullable(true),
    footerText: string().nullable(true),
});

let formData = ref({})
let file = ref({})
let image = ref({})




async function formClear() {
    return new Promise((resolve, reject) => {

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

async function onFileChange(e, type) {

    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;

    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const imageData = await fileToBase64(file)
        image.value[type] = imageData
        const body = {
            path: "app/",
            images: [{
                name: `${type}.${imageData.name.split(".")[1]}`,
                ownerName: type,
                image: imageData.image
            }]
        }
        const { data } = await useFetch("/api/image", {
            method: "put",
            body: body
        }).catch((error) => {
            console.error(error);
        });

        if (data.value.status) {
            snackbar.add({
                type: "success",
                text: t('success.image_saved'),
            });
        }
    }

}

async function save(e, { resetForm }) {
    console.log("save");

    const bodyData = { ...formData.value }

    const keys = Object.keys(bodyData)
    keys.forEach(key => {
        if (typeof bodyData[key] === "object" || bodyData[key] === -1) {
            delete bodyData[key]
        }
    })

    const { data, pending, error, refresh } = await useFetch("/api/product", {
        method: "put",
        body: bodyData,
    }).catch((error) => {
        console.error(error);
        snackbar.add({
            type: "error",
            text: t(`api.error.same_error`, [t('product')]),
        });
    });
    console.log("data.value.status", data.value.status);
    if (!data.value.status) {

        snackbar.add({
            type: "error",
            text: t(`api.error.${data.value.error}`, [t('page_general_setting')]),
        });
        return
    } else {
        resetForm()
        formData.value.categoryId = -1
        formData.value.subCategoryId = -1
        if (props.type !== "create") {

            snackbar.add({
                type: "success",
                text: t('api.success', [t('page_general_setting')]),
            });
            return
        }

        snackbar.add({
            type: "success",
            text: t('api.created', [t('page_general_setting')]),
        });
    }
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
            <div>
                {{ image }}
            </div>
            <div class="row d-flex flex-row align-items-start justify-content-start" style="min-height: 10rem;">
                <div class="col-6">
                    <template v-if="image?.headerLogo?.name">
                        <nuxt-img :src="`/images/app/${image.headerLogo.name}`" class="card-img-top img-fluid"
                            style="width: 20rem" />
                    </template>
                </div>
                <div class="col-6">
                    <label for="header-logo" class="form-label">{{ $t('header_logo') }}</label>
                    <Field name="image" rules="" v-model="file.headerLogo" @change="onFileChange($event, 'headerLogo')"
                        class="form-control" type="file" id="header-logo" accept="image/png, image/jpeg" />
                </div>
            </div>
            <div class="row d-flex flex-row align-items-start justify-content-start mt-4" style="min-height: 10rem;">
                <div class="col-6">
                    <template v-if="image?.footerLogo?.name">
                        <nuxt-img :src="`/images/app/${image.footerLogo.name}`" class="card-img-top img-fluid"
                            style="width: 20rem" />
                    </template>
                </div>
                <div class="col-6">
                    <label for="footer-logo" class="form-label">{{ $t('footer_logo') }}</label>
                    <Field name="image" rules="" v-model="file.footerLogo" @change="onFileChange($event, 'footerLogo')"
                        class="form-control" type="file" id="footer-logo" accept="image/png, image/jpeg" />
                </div>
            </div>


            qwe
            <div class="product-form-slide mb-3">

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
                <button class="btn btn-secondary" data-bs-toggle="modal" id="close-modal"
                    data-bs-target="#productFormModal">{{ $t('close') }}</button>
            </div>

        </Form>
    </div>
</template>

<script>
export default {
    name: "ProductForm",
};
</script>

<script setup>
import { ref, computed, toRefs, watch } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { array, string, object } from 'yup';
import { useI18n } from "vue-i18n"

const emit = defineEmits(['update', 'get'])

const imageStorageTypeCalc = useImageStorageTypeCalc()

const { t } = useI18n();
const snackbar = useSnackbar();
const { $qs } = useNuxtApp()

const schema = object().shape({
    name: string().required(),
    title: string().required(),
    content: string().required(),
    image: array().min(0),
});

let imageInput = ref([])

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

const disabled = computed(() => {
    return ['delete', 'show'].includes(props.type)
})

const imageNames = ref([])
const images = ref([])

const computedImage = computed(() => {
    if (formData.images && images) {
        return [...formData.images, images]
    } else if (formData.images) {
        return formData.images
    }
    else if (images) {
        return images
    }
    return []
})

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
    images.value = []

    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const imageData = await fileToBase64(file)
        images.value.push(imageData)
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

    const method = props.type == "create" ? "post" : props.type == "update" ? 'put' : props.type == "delete" ? 'delete' : ''

    const { data, pending, error, refresh } = await useFetch("/api/product", {
        method: method,
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
            text: t(`api.error.${data.value.error}`, [t('product')]),
        });
        return
    } else {
        const { imageData = data } = await useFetch("/api/image", {
            method: "post",
            body: {
                ownerName: "productId",
                ownerId: data.value.data.id,
                images: images.value,
                storageType: imageStorageTypeCalc
            },
        }).catch((error) => {
            console.error(error);
        });

        if (imageData.value.status) {
            if (props.type == 'update') {
                get(id)
            }

            resetForm()
            imageInput.value = []
            formData.value.categoryId = -1
            formData.value.subCategoryId = -1
            if (props.type !== "create") {
                const closeModal = document.querySelector('#close-modal-product-form')
                closeModal?.click()
                emit('getAll')
                emit('formId:reset', -1)

                snackbar.add({
                    type: "success",
                    text: t('api.success', [t('product')]),
                });
                return
            }

            snackbar.add({
                type: "success",
                text: t('api.created', [t('product')]),
            });
        } else {
            snackbar.add({
                type: "error",
                text: t('api.error.same_error', [t('image')]),
            });
        }
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
            <SelectCategory :value="formData.categoryId" @value:update="(e) => formData.categoryId = e" />
            <SelectSubCategory :categoryId="formData.categoryId" :value="formData.subCategoryId"
                @value:update="(e) => formData.subCategoryId = e" />
            <div class="mb-3">
                <label for="product-form-name" class="form-label">{{ $t('product_name') }}</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="name" v-model="formData.name" type="text" class="form-control" id="product-form-name"
                        rules="required" />
                    <span class="input-group-text">
                        <Tooltip :text="$t('turkish_characters_no')">
                            <template #content>
                                <BootstrapIconInfoCircle class="position-relative" width="40" />
                            </template>
                        </Tooltip>
                    </span>
                </div>
                <ErrorMessage class="invalid" name="name" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="name-en" v-model="formData.name_en" type="text" class="form-control"
                        id="product-form-name-en" rules="" />
                    <span class="input-group-text">
                        <Tooltip :text="$t('turkish_characters_no')">
                            <template #content>
                                <BootstrapIconInfoCircle class="position-relative" width="40" />
                            </template>
                        </Tooltip>
                    </span>
                </div>
            </div>
            <div class="mb-3">
                <label for="product-form-title" class="form-label">{{ $t('product_title') }}</label>
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
                <label for="product-content" class="form-label">{{ $t('product_description') }}</label>
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
                <template v-if="computedImage?.length > 0">
                    <span class="">{{ $t('image_count') }} {{ computedImage?.length }}</span>

                    <ImageSwiper :images="computedImage?.map(e => e.image)" :imageNames="computedImage?.map(e => e.name)" />
                    <!-- <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
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
                                    {{ $t('delete') }}
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

                </Swiper> -->
                </template>
            </div>
            <div class="mb-3">
                <label for="product-image" class="form-label">{{ $t('upload_image') }}</label>

                <Field name="image" rules="" v-model="imageInput" @change="onFileChange" class="form-control" type="file"
                    id="product-image" accept="image/png, image/jpeg" multiple />
                <ErrorMessage class="invalid" name="image" />
            </div>
            <hr class="hr" />
            <div class="product-form-footer d-flex justify-content-between">
                <button type="submit" class="btn btn-primary">{{ $t('save') }}</button>
                <button class="btn btn-secondary" data-bs-toggle="modal" id="close-modal-product-form">{{ $t('close') }}</button>
            </div>

        </Form>
    </div>
</template>

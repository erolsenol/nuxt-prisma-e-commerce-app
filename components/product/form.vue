<script>
export default {
    name: "ProductForm",
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

const initialProduct = () => ({
    name: null,
    title: null,
    content: null,
});

const product = ref(initialProduct());
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

function onFileChange(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    createImage(files);
}
function createImage(files) {
    images.value = []
    imageNames.value = []
    for (var index = 0; index < files.length; index++) {
        var reader = new FileReader();
        imageNames.value.push(files[index].name);
        reader.onload = (event) => {
            images.value.push(event.target.result);
        };
        reader.readAsDataURL(files[index]);
    }
}

async function save(event) {
    console.log("save");
    return
    const imageData = []

    images.value.forEach((img, index) => {
        imageData.push({ name: imageNames.value[index], image: img })
    });

    console.log("send producttt 12312");
    const { data, pending, error, refresh } = await useFetch("/api/product", {
        method: "post",
        body: product,
    }).catch((error) => {
        console.error(error);
    });
    if (data.value.status) {
        console.log(data.value.data.id);
        const response = await useFetch("/api/image", {
            method: "post",
            body: {
                productId: data.value.data.id,
                images: imageData
            },
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
        console.log("Ürün Kaydedilemedi");
        snackbar.add({
            type: "error",
            text: "Ürün Kaydedilemedi",
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

    console.log("Görsel Silindi");
    snackbar.add({
        type: "success",
        text: "Görsel Silindi",
    });
}
</script>

<template>
    <div class="product-form">
        <div>
            {{ type }} - {{ form }}
        </div>
        <div>
            innerForm - {{ innerForm }}
        </div>

        <Form @submit="save">
            <div class="mb-3">
                <label for="product-name" class="form-label">Ürün Adı</label>
                <Field name="name" v-model="form.name" type="text" class="form-control" id="product-name"
                    rules="required" />
                <ErrorMessage class="invalid" name="name" />
            </div>
            <div class="mb-3">
                <label for="product-name" class="form-label">Ürün Başlığı</label>
                <Field name="title" rules="required" v-model="form.title" type="text" class="form-control"
                    id="product-name" />
                <ErrorMessage class="invalid" name="title" />
            </div>
            <div class="mb-3">
                <label for="product-content" class="form-label">Ürün Açıklaması</label>
                <Field name="content" rules="required" v-model="form.content" type="text" class="form-control"
                    id="product-content" />
                <ErrorMessage class="invalid" name="content" />
            </div>
            <div class="product-form-slide mb-3">

                <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
                    :effect="'creative'" :autoplay="{ delay: 8000, disableOnInteraction: true, }" :creative-effect="{
                        prev: { shadow: false, translate: ['-20%', 0, -1], },
                        next: { translate: ['100%', 0, 0], },
                    }">
                    <SwiperSlide v-for="(image, index) in form.images" :key="`img-${index}`">
                        <div class="card" style="width: 28rem">
                            <div class="card-header">
                                <button type="button" @click="remove(image.id)"
                                    class="btn btn-danger float-end px-3 d-flex align-items-center justify-content-center">
                                    <Icon name="material-symbols:delete-outline" color="white" size="22" class="me-2" />
                                    Sil
                                </button>
                            </div>
                            <nuxt-img :src="`/images/${image.name}`" class="card-img-top img-fluid" style="width: 100%" />

                            <div class="card-body">
                                <h5 class="card-title">
                                    Görsel Adı: {{ image.name }}
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div class="mb-3">
                <label for="product-image" class="form-label">Ürün Görselli</label>
                <Field name="image" rules="required" v-model="form.images" @change="onFileChange" class="form-control"
                    type="file" id="product-image" accept="image/png, image/jpeg" multiple />
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

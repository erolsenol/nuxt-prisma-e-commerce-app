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
    mail: string().required(),
    mail_en: string().nullable(true),
    phone: string().required(),
    phone_en: string().nullable(true),
    address: string().required(),
    address_en: string().nullable(true),
});

let formData = ref({})
let file = ref({})
let image = ref({})


async function getLogos() {
    const logos = ["headerLogo", "footerLogo"]
    for (let index = 0; index < logos.length; index++) {
        const logo = logos[index];
        const config = {
            method: "get",
            params: {
                ownerName: logo
            },
            paramsSerializer: (params) => qs.stringify(params, { encode: false })
        };
        const { data } = await useFetch("/api/image", config)
        if (data.value.status) {
            image.value[logo] = data.value.data
        }
    }
}

onMounted(() => {
    setTimeout(async () => {
        getLogos()
    }, 100);
});

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
        // image.value[type] = imageData
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
            image.value[type] = data.value.data[0]

            snackbar.add({
                type: "success",
                text: t('success.image_saved'),
            });
            return
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

</script>

<template>
    <div class="product-form">
        <Form @submit="save" :validation-schema="schema">
            <div class="row d-flex flex-row align-items-start justify-content-start" style="min-height: 10rem;">
                <div class="col-6">
                    <template v-if="image?.headerLogo?.name">
                        <nuxt-img :src="`/images/app/${image.headerLogo.name}`" class="card-img-top img-fluid"
                            style="width: 20rem" />
                    </template>
                </div>
                <div class="col-6">
                    <label for="header-logo" class="form-label fs-5">{{ $t('header_logo') }}</label>
                    <Field name="image" v-model="file.headerLogo" @change="onFileChange($event, 'headerLogo')"
                        class="form-control" type="file" id="header-logo" accept="image/png, image/jpeg" />
                </div>
            </div>
            <hr />
            <div class="row d-flex flex-row align-items-start justify-content-start mt-4" style="min-height: 10rem;">
                <div class="col-6">
                    <template v-if="image?.footerLogo?.name">
                        <nuxt-img :src="`/images/app/${image.footerLogo.name}`" class="card-img-top img-fluid"
                            style="width: 20rem" />
                    </template>
                </div>
                <div class="col-6">
                    <label for="footer-logo" class="form-label fs-5">{{ $t('footer_logo') }}</label>
                    <Field name="image" v-model="file.footerLogo" @change="onFileChange($event, 'footerLogo')"
                        class="form-control" type="file" id="footer-logo" accept="image/png, image/jpeg" />
                </div>
            </div>
            <hr class="hr" />
            <div class="mb-3">
                <label for="site-mail" class="form-label">{{ $t('site_phone') }}</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="site-mail" rules="required" v-model="formData.mail" type="text" class="form-control"
                        id="site-mail" />
                </div>
                <ErrorMessage class="invalid" name="site-mail" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="site-mail-en" v-model="formData.mail_en" type="text" class="form-control"
                        id="site-mail-en" />
                </div>
            </div>
            <hr class="hr" />
            <div class="mb-3">
                <label for="site-phone" class="form-label">{{ $t('site_phone') }}</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="site-phone" rules="required" v-model="formData.phone" type="text" class="form-control"
                        id="site-phone" />
                </div>
                <ErrorMessage class="invalid" name="site-phone" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="site-phone-en" v-model="formData.phone_en" type="text" class="form-control"
                        id="site-phone-en" />
                </div>
            </div>
            <hr class="hr" />
            <div class="mb-3">
                <label for="site-address" class="form-label">{{ $t('site_phone') }}</label>
                <div class="input-group">
                    <span class="input-group-text">TR *</span>
                    <Field name="site-address" rules="required" v-model="formData.address" type="text" class="form-control"
                        id="site-address" />
                </div>
                <ErrorMessage class="invalid" name="site-address" />
                <div class="input-group mt-2">
                    <span class="input-group-text px-3">EN</span>
                    <Field name="site-address-en" v-model="formData.address_en" type="text" class="form-control"
                        id="site-address-en" rules="" />
                </div>
            </div>


            <div class="product-form-footer d-flex justify-content-between">
                <button type="submit" class="btn btn-primary">Kaydet</button>

            </div>

        </Form>
    </div>
</template>

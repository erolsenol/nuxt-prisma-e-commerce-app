<script>
export default {
    name: "ContactUsItem",
};
</script>

<script setup>
import { ref, toRef, computed } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { array, number, string, object } from 'yup';

const { t } = useI18n();
const { $qs } = useNuxtApp()

const { form } = defineProps({
    form: {
        type: String, default() {
            return {}
        }
    },
})

const loginModal = ref("loginModal")

const snackbar = useSnackbar();

async function submit() {
    console.log("type", type.value);
    if (type.value == 'login') {
        if (!form.value.email) {
            snackbar.add({
                type: "error",
                text: t('errors.email_required'),
            });
            return
        } else if (!form.value.password0) {
            snackbar.add({
                type: "error",
                text: t('errors.password_required'),
            });
            return
        }

        const config = {
            params: {
                email: form.value.email,
                password: form.value.password0,
            },
            paramsSerializer: (params) => $qs.stringify(params, { encode: false })
        };
        const { data, pending, error, refresh } = await useFetch("/api/user", {
            ...config,
        }).catch((error) => {
            console.error(error);
        });

        if (data.value.status) {
            snackbar.add({
                type: "success",
                text: t('success.user_created'),
            });
            storeUser.login(data.value.data)
            console.log("loginModal", loginModal);
            loginModal.value.click()
            formClear()
            return
        } else {
            if (data.value.error === "your password is wrong") {
                snackbar.add({
                    type: "error",
                    text: t('your_password_wrong'),
                });
                return
            }
            console.log("giriş yapılamnadı");
            snackbar.add({
                type: "error",
                text: t('login_failed'),
            });
        }

    } else if (type.value == 'sing_up') {
        if (form.value.password0 !== form.value.password1) {
            snackbar.add({
                type: "error",
                text: t('errors.password_not_match'),
            });
            return
        } else if (form.value.password0.length < 8) {
            snackbar.add({
                type: "error",
                text: t('errors.password_min_length_8'),
            });
            return
        } else if (!form.value.email) {
            snackbar.add({
                type: "error",
                text: t('errors.email_required'),
            });
            return
        } else if (!form.value.username) {
            snackbar.add({
                type: "error",
                text: t('errors.username_required'),
            });
            return
        }

        form.value.password = form.value.password0
        const body = {
            firstname: form.value.firstname,
            lastname: form.value.lastname,
            username: form.value.username,
            age: form.value.age,
            email: form.value.email,
            password: form.value.password,
        }
        const { data, pending, error, refresh } = await useFetch("/api/user", {
            method: "post",
            body: body,
        }).catch((error) => {
            console.error(error);
        });

        if (data.value.status) {
            snackbar.add({
                type: "success",
                text: t('success.user_created'),
            });
            storeUser.login(data.value.data)
            console.log("loginModal", loginModal);
            loginModal.value.click()
            formClear()
            return
        } else {
            if (data.value.error === "email address is already registered") {
                snackbar.add({
                    type: "error",
                    text: t('email_already_existing'),
                });
                return
            }
            console.log("Ürün Kaydedilemedi");
            snackbar.add({
                type: "error",
                text: t('register_failed'),
            });
        }
    }
}
</script>

<template>
    <div class="contact-us-item card">
        
        <div class="card-body">
            <div class="position-absolute w-100 text-end">
                <BootstrapIconEnvelope v-if="true" class="position-relative me-4" width="40" height="40" fill="#c96161" />
                <BootstrapIconEnvelopeOpenFill v-else class="position-relative me-4" width="40" height="40" fill="#6a98f6" />
            </div>
            <p>
                <span><font-awesome-icon size="30" icon="fa-solid fa-envelope" /></span>
                <strong class="fs-5">{{ $t('name') }}:</strong> <span class="fs-5 me-5">{{ form.name }} </span>
                <strong class="fs-5">{{ $t('surname') }}:</strong> <span class="fs-5 me-5">{{ form.surname }}</span>
                <strong class="fs-5">{{ $t('phone') }}:</strong> <span class="fs-5 me-5">{{ form.phone }}</span>
            </p>
            <strong class="fs-5">{{ $t('email') }}:</strong> <span class="fs-5 me-5">{{ form.email }}</span>

            <p class="fs-5 mt-3">{{ form.title }}</p>
            <p class="fs-5">{{ form.content }} </p>

        </div>
    </div>
</template>

<script>
export default {
    name: "LoginForm",
};
</script>

<script setup>
import { ref, toRef, computed } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
import { useI18n } from "vue-i18n"

const { t } = useI18n();
const { $qs } = useNuxtApp()

const storage = useStorage()

const schema = Yup.object().shape({
    firstname: Yup.string(),
    lastname: Yup.string(),
    username: Yup.string(),
    age: Yup.number(),
    email: Yup.string(),
    password0: Yup.string().min(8).required(),
    password1: Yup.string()
        .oneOf([Yup.ref('password0'), null], t('validation.passwords_must_match'))
});

const storeUser = useUser()

const props = defineProps({
    type: { type: String, required: true },
})
const type = toRef(props, 'type')
const loginModal = ref("loginModal")


const form = ref({
    firstname: null,
    lastname: null,
    username: null,
    age: null,
    email: null,
    password0: null,
    password1: null,
})
const snackbar = useSnackbar();

async function submit(e, { resetForm }) {

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
        const { data, pending, error, refresh } = await useFetch("/api/user/login", {
            ...config,
        }).catch((error) => {
            console.error(error);
        });

        if (data.value.status) {
            snackbar.add({
                type: "success",
                text: t('success.user_login'),
            });
            storeUser.login(data.value.data)

            storage.set("user", data.value.data.user)
            storage.set("access_token", data.value.data.access_token)
            storage.set("has_login", true)

            loginModal.value.click()
            resetForm()
            return
        } else {
            if (data.value.error == "user_not_created") {
                snackbar.add({
                    type: "error",
                    text: t('api.error.user_not_created'),
                });
                return
            }
            snackbar.add({
                type: "error",
                text: t('api.error.login_failed'),
            });
            return
        }

    } else if (type.value == 'sing_up') {
        // if (form.value.password0 !== form.value.password1) {
        //     snackbar.add({
        //         type: "error",
        //         text: t('errors.password_not_match'),
        //     });
        //     return
        // } else if (form.value.password0.length < 8) {
        //     snackbar.add({
        //         type: "error",
        //         text: t('errors.password_min_length_8'),
        //     });
        //     return
        // } else if (!form.value.email) {
        //     snackbar.add({
        //         type: "error",
        //         text: t('errors.email_required'),
        //     });
        //     return
        // } else if (!form.value.username) {
        //     snackbar.add({
        //         type: "error",
        //         text: t('errors.username_required'),
        //     });
        //     return
        // }

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
            storage.set("user", data.value.data.user)
            storage.set("access_token", data.value.data.access_token)
            storage.set("has_login", true)

            console.log("loginModal", loginModal);
            loginModal.value.click()
            resetForm()
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
    <div class="login-form">
        <Form @submit="submit" :validation-schema="schema">
            <div class="mb-3 d-flex flex-row justify-content-between" v-if="type != 'login'">
                <div>
                    <label for="form-name" class="form-label">{{ $t('name') }}</label>
                    <Field v-model="form.firstname" name="firstname" type="text" class="form-control" id="form-name" />
                    <ErrorMessage class="invalid text-capitalize" name="firstname" />
                </div>
                <div>
                    <label for="form-lastname" class="form-label">{{ $t('lastname') }}</label>
                    <Field v-model="form.lastname" name="lastname" type="text" class="form-control" id="form-lastname" />
                    <ErrorMessage class="invalid text-capitalize" name="lastname" />
                </div>
            </div>
            <!-- <div class="mb-3">
            <label for="form-lastname" class="form-label">Email address</label>
            <input type="email" class="form-control" id="form-lastname" >
        </div> -->
            <div class="mb-3 d-flex flex-row justify-content-between" v-if="type != 'login'">
                <div class="w-75">
                    <label for="form-username" class="form-label">{{ $t('username') }} *</label>
                    <Field v-model="form.username" name="username" type="email" class="form-control" id="form-username" />
                    <ErrorMessage class="invalid text-capitalize" name="username" />
                </div>
                <div class="ms-2 w-25">
                    <label for="form-age" class="form-label">{{ $t('age') }}</label>
                    <Field v-model="form.age" name="age" type="number" class="form-control" id="form-age" />
                    <ErrorMessage class="invalid text-capitalize" name="age" />
                </div>
            </div>
            <div class="mb-3">
                <label for="form-email" class="form-label">{{ $t('email') }} *</label>
                <Field v-model="form.email" name="email" type="email" class="form-control" id="form-email" />
                <ErrorMessage class="invalid text-capitalize" name="email" />
            </div>
            <div class="mb-3">
                <label for="form-password0" class="form-label">{{ $t('password') }} *</label>
                <Field v-model="form.password0" name="password0" type="password" class="form-control" id="form-password0" />
                <ErrorMessage class="invalid text-capitalize" name="password0" />
            </div>
            <div class="mb-3" v-if="type != 'login'">
                <label for="form-password1" class="form-label">{{ $t('password_again') }} *</label>
                <Field v-model="form.password1" name="password1" type="password" id="form-password1" class="form-control"
                    aria-describedby="passwordHelpBlock" />
                <ErrorMessage class="invalid text-capitalize" name="password1" />
                <div id="passwordHelpBlock" class="form-text">
                    {{ $t('password_hint') }}
                </div>
            </div>
            <div class="border-1 border-bottom mb-3"></div>
            <div class="text-end">
                <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal" ref="loginModal">{{ $t('close')
                }}</button>
                <button type="submit" class="btn btn-primary">{{ type ==
                    'login' ?
                    $t('login') :
                    $t('sing_up') }}</button>
            </div>
        </Form>
    </div>
</template>

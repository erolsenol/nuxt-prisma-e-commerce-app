<script>
export default {
    name: "LoginForm",
};
</script>

<script setup>
import { ref, toRef, computed } from "vue";
const { t } = useI18n();
const props = defineProps({
    type: { type: String, required: true },
})
const type = toRef(props, 'type')


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

function formClear() {
    form.value.firstname = null
    form.value.lastname = null
    form.value.username = null
    form.value.age = null
    form.value.email = null
    form.value.password0 = null
    form.value.password1 = null
}

async function submit() {
    console.log("type", type.value);
    if (type.value == 'login') {

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
    <div class="login-form">
        <div class="mb-3 d-flex flex-row justify-content-between" v-if="type != 'login'">
            <div>
                <label for="form-name" class="form-label">{{ $t('name') }}</label>
                <input v-model="form.firstname" type="text" class="form-control" id="form-name">
            </div>
            <div>
                <label for="form-lastname" class="form-label">{{ $t('lastname') }}</label>
                <input v-model="form.lastname" type="text" class="form-control" id="form-lastname">
            </div>
        </div>
        <!-- <div class="mb-3">
            <label for="form-lastname" class="form-label">Email address</label>
            <input type="email" class="form-control" id="form-lastname" >
        </div> -->
        <div class="mb-3 d-flex flex-row justify-content-between" v-if="type != 'login'">
            <div class="w-75">
                <label for="form-username" class="form-label">{{ $t('username') }} *</label>
                <input v-model="form.username" type="email" class="form-control" id="form-username">
            </div>
            <div class="ms-2 w-25">
                <label for="form-age" class="form-label">{{ $t('age') }}</label>
                <input v-model="form.age" type="number" class="form-control" id="form-age">
            </div>
        </div>
        <div class="mb-3">
            <label for="form-email" class="form-label">{{ $t('email') }} *</label>
            <input v-model="form.email" type="email" class="form-control" id="form-email">
        </div>
        <div class="mb-3">
            <label for="form-password0" class="form-label">{{ $t('password') }} *</label>
            <input v-model="form.password0" type="password" class="form-control" id="form-password0">
        </div>
        <div class="mb-3" v-if="type != 'login'">
            <label for="form-password1" class="form-label">{{ $t('password_again') }} *</label>
            <input v-model="form.password1" type="password" id="form-password1" class="form-control"
                aria-describedby="passwordHelpBlock">
            <div id="passwordHelpBlock" class="form-text">
                {{ $t('password_hint') }}
            </div>
        </div>
        <div class="border-1 border-bottom mb-3"></div>
        <div class="text-end">
            <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="submit">{{ type ==
                'login' ?
                $t('login') :
                $t('sing_up') }}</button>
        </div>
    </div>
</template>

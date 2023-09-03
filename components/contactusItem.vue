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

async function read() {

    const { data } = await useFetch("/api/contactus", { method: "put", body: { id: form.id, readed: !form.readed } })

    if (data.value.status) {
        snackbar.add({
            type: "success",
            text: t(`${!form.readed ? '' : 'un'}read`),
        });
    } else {
        snackbar.add({
            type: "error",
            text: t('api.error.same_error', [t('read')]),
        });
    }
}

</script>

<template>
    <div class="contact-us-item card mt-3 border-1 border-primary">
        <div class="card-body position-relative">
            <div class="position-absolute text-end" @click="read" style="max-width: 4rem; right: 0px; top: 10px;">
                <BootstrapIconEnvelope v-if="!form.readed" class="mail-icon position-relative me-4" width="40" height="40"
                    fill="#c96161" />
                <BootstrapIconEnvelopeOpenFill v-else class="mail-icon position-relative me-4" width="40" height="40"
                    fill="#6a98f6" />
            </div>
            <p>
                <span><font-awesome-icon size="30" icon="fa-solid fa-envelope" /></span>

                <strong class="fs-6">{{ $t('name') }}:</strong> <span class="fs-6 me-5">{{ form.name }} </span>
                <strong class="fs-6">{{ $t('lastname') }}:</strong> <span class="fs-6 me-5">{{ form.surname }}</span>
                <strong class="fs-6">{{ $t('phone') }}:</strong> <span class="fs-6 me-5">{{ form.phone }}</span>
            </p>
            <hr class="my-1" />
            <strong class="fs-6">{{ $t('email') }}:</strong> <span class="fs-6 me-5">{{ form.email }}</span>
            <hr class="my-1" />
            <p class="fs-6 mt-3">{{ form.title }}</p>
            <p class="fs-6">{{ form.content }} </p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.contact-us-item {
    .mail-icon {
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
            transform: scale(1.2) translate(0, -5px);
        }
    }
}
</style>
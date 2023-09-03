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
const emit = defineEmits(['getAll', 'update'])

const props = defineProps({
    form: {
        type: String, default() {
            return {}
        }
    },
})

const snackbar = useSnackbar();

async function updateItem(update) {
    const body = update
    const { data } = await useFetch("/api/contactus", { method: "put", body: body })

    if (data.value.status) {
        snackbar.add({
            type: "success",
            text: t(`${!props.form.readed ? '' : 'un'}read`),
        });
        get(props.form.id)
    } else {
        snackbar.add({
            type: "error",
            text: t('api.error.same_error', [t('read')]),
        });
    }
}

async function get(id) {
    const { data } = await useFetch("/api/contactus/" + id)

    if (data.value.status) {
        emit('update', data.value.data)
    }
}
</script>

<template>
    <div class="contact-us-item card mt-3 border-1 border-primary">
        <div class="card-body position-relative">
            <div class="position-absolute text-end d-flex flex-row" style="max-width: 4rem; right: 4rem; top: 15px;">
                <div @click="updateItem({ id: props.form.id, readed: !props.form.readed })">
                    <BootstrapIconEnvelope v-if="!props.form.readed" class="mail-icon position-relative me-4" width="40"
                        height="40" fill="#c96161" />
                    <BootstrapIconEnvelopeOpenFill v-else class="mail-icon position-relative me-4" width="40" height="40"
                        fill="#6a98f6" />
                </div>
                <div @click="updateItem({ id: props.form.id, deleted: !props.form.deleted })">
                    <BootstrapIconTrash v-if="!props.form.deleted" class="mail-icon position-relative me-4" width="40"
                        height="40" fill="#c96161" />
                    <BootstrapIconArrow90degLeft v-else class="mail-icon position-relative me-4" width="40" height="40"
                        fill="#6a98f6" />
                </div>
            </div>
            <p>
                <Icon name="majesticons:chat-2" class="me-2" size="30" />
                <span><font-awesome-icon size="30" icon="fa-solid fa-envelope" /></span>
                <strong class="fs-6">{{ $t('name') }}:</strong> <span class="fs-6 me-5">{{ props.form.name }} </span>
                <strong class="fs-6">{{ $t('lastname') }}:</strong> <span class="fs-6 me-5">{{ props.form.surname }}</span>
                <strong class="fs-6">{{ $t('phone') }}:</strong> <span class="fs-6 me-5">{{ props.form.phone }}</span>
            </p>
            <hr class="my-1" />
            <Icon name="majesticons:mail" class="me-2" size="30" /> <strong class="fs-6">{{ $t('email') }}:</strong> <span
                class="fs-6 me-5">{{ props.form.email }}</span>
            <hr class="my-1" />

            <p class="fs-6 mt-3">
                <Icon name="majesticons:note-text" class="me-2" size="30" /> {{ props.form.title }}
            </p>

            <p class="fs-6">
                {{ props.form.content }}
            </p>
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
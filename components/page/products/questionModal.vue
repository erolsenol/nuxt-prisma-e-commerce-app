<script>
export default {
    name: "ProductQuestionModal",
};

</script>
<script setup>
import { ref, onMounted } from 'vue'
import { object, string } from 'yup';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { useI18n } from "vue-i18n"

const { t } = useI18n();
const snackbar = useSnackbar();
const storeUser = useUser()
const props = defineProps({
    productId: Number,
})
const data = ref({})

const schema = object().shape({
    title: string().required(),
    content: string().required(),
});

async function send(value) {
    console.log("value", value);
    const config = {
        method: "post",
        body: {
            productId: props.productId,
            ...value
        }
    }
    const user = storeUser.getUser
    console.log("user", user);
    if (user) {
        config.body.userId = user.id
    }

    const { data } = await useFetch("/api/question/", config);

    console.log("data.value",data.value);
    if (data.value.status) {
        const closeBtn = document.querySelector('#product-question-close-btn')
        closeBtn.click()

        snackbar.add({
                type: "success",
                text: t('question_send'),
            });
            return
    }
    snackbar.add({
            type: "error",
            text: t('api.error.same_error', [t('ask_question')]),
        });
}

</script>

<template>
    <div class="product-item-question modal fade" id="productQuestion" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="productQuestionLabel" aria-hidden="true">
        <div class="modal-dialog">
            <Form @submit="send" :validation-schema="schema">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="productQuestionLabel">{{ $t('ask_question') }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="question-title" class="form-label">{{ $t('title') }}</label>
                            <Field name="title" id="question-title" v-model="data.title" type="text" class="form-control" />
                        </div>
                        <ErrorMessage class="invalid" name="title" />
                        <div class="mb-3">
                            <label for="question-content" class="form-label">{{ $t('content') }}</label>
                            <Field name="content" id="question-content" v-model="data.content" as="textarea" rows="4"
                                class="form-control" />
                        </div>
                        <ErrorMessage class="invalid" name="content" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" id="product-question-close-btn"
                            data-bs-dismiss="modal">{{ $t('close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ $t('send') }}</button>
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product-item {
    a {
        text-decoration: none;
    }

    .card-body {
        max-height: 12rem;

        * {
            line-height: 1.6rem;
        }
    }

    .product-item-star {
        // color: v-bind('starColor') !important;
    }
}
</style>
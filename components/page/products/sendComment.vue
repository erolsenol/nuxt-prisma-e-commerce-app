<script>
export default {
    name: "ProductSendComment",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate';
import { string, object } from 'yup';
const { t } = useI18n();
const { $qs, $helper } = useNuxtApp()
const { event } = useEventBus()
const snackbar = useSnackbar();

const schema = object().shape({
    username: string().required(),
    title: string().required(),
    content: string().required(),
});

const props = defineProps({
    productId: { type: Number, required: false },
})

let loading = ref(false)
const comment = ref({})
const images = ref([])
const imageNames = ref([])
const commentImage = ref('commentImage')

function formClear() {
    comment.value.title = null
    comment.value.content = null
    images.value = []
    imageNames.value = []
}

function onFileChange(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    createImage(files);
}
async function createImage(files) {
    images.value = []
    imageNames.value = []
    for (var index = 0; index < files.length; index++) {
        images.value.push(await $helper.imageToObj(files[index]))
    }
}

function uploadImage() {
    commentImage.value.click()
}

async function send(e, { resetForm }) {
    const body = { ...comment.value, productId: props.productId }

    loading.value = true
    const { data } = await useFetch("/api/comment", { method: "post", body: body }).finally(() => {
        if (images.value.length < 1) {
            loading.value = false
            resetForm()
        }
    });

    if (!data.value.status) {
        snackbar.add({
            type: "error",
            text: t('api.error.same_error', [t('comment')]),
        });
        return
    }

    if (images.value.length > 0) {
        const { imgData = data } = await useFetch("/api/image", {
            method: "post",
            body: {
                ownerName: "commentId",
                ownerId: data.value.data.id,
                path: "comment/",
                images: [...images.value]
            },
        }).catch((error) => {
            console.error(error);
        }).finally(() => loading.value = false);

        if (!imgData.value.status) {
            snackbar.add({
                type: "error",
                text: t('api.error.same_error', [t('image')]),
            });
            return
        }
    }

    snackbar.add({
        type: "success",
        text: t('api.comment_send'),
    });
    resetForm()
    images.value = []
    event('qweasd', { id: props.productId })
    console.log("event onnnn");
}
</script>

<template>
    <div class="container product-detail-comment">
        <div class="row mt-3">
            <div class="col-12">

                <div class="card">
                    <h5 class="card-header"> {{ $t('write_commet') }}</h5>
                    <div class="card-body">

                        <div class="row">

                            <div class="col-12 col-sm-6" style="min-height: 20rem;">
                                <Form @submit="send" :validation-schema="schema">
                                    <div class="mt-2">
                                        <label for="comment-username" class="form-label">{{ $t('username') }}</label>
                                        <Field name="username" v-model="comment.username" type="text" class="form-control"
                                            id="comment-username" />
                                    </div>
                                    <ErrorMessage class="invalid" name="username" />
                                    <div class="mt-2">
                                        <label for="comment-title" class="form-label">{{ $t('title') }}</label>
                                        <Field name="title" v-model="comment.title" type="text" class="form-control"
                                            id="comment-title" />
                                    </div>
                                    <ErrorMessage class="invalid" name="title" />
                                    <div class="mt-2">
                                        <label for="comment-content" class="form-label">{{ $t('content') }}</label>
                                        <Field as="textarea" rows="5" name="content" v-model="comment.content"
                                            class="form-control" id="comment-content" />
                                    </div>
                                    <ErrorMessage class="invalid" name="content" />
                                    <div class="mt-4">
                                        <button
                                            class="btn btn-primary d-inline-flex justify-content-center align-items-center">
                                            <div class="spinner-border spinner-border-sm float-start me-3" role="status"
                                                v-if="loading">
                                            </div>
                                            {{ $t('send') }}
                                        </button>
                                    </div>
                                </Form>
                            </div>

                            <hr class="d-sm-none mt-sm-0 mt-5" />
                            <div class="col-12 col-sm-6" style="min-height: 20rem;">
                                <div class="product-detail-comment-image" style="min-height: 19rem;">
                                    <label class="form-label mt-3">{{ $t('image') }}</label>
                                    <template v-if="images?.length > 0">
                                        <ImageSwiper class="mt-0" :loading="loading" :images="images.map(i => i.image)"
                                            :imageNames="images.map(i => i.name)" />
                                    </template>
                                </div>
                                <input name="image" v-show="false" @change="onFileChange" class="form-control" type="file"
                                    ref="commentImage" accept="image/png, image/jpeg" multiple />
                                <div class="mt-3">
                                    <button class="btn btn-outline-secondary" @click="uploadImage">
                                        {{ $t('upload') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
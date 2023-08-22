<script>
export default {
    name: "ProductSendComment",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
const { t } = useI18n();
const snackbar = useSnackbar();

const { productId } = defineProps({
    productId: { type: Number, required: false },
})

let loading = ref(false)
const comment = ref({
    title: null,
    content: null,
})
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

function uploadImage() {
    commentImage.value.click()
}

async function send() {
    if (!comment.value.title || !comment.value.content) {
        snackbar.add({
            type: "error",
            text: t('fill_form_completely'),
        });
        return
    }

    console.log("productId", productId);

    const body = { ...comment.value, productId: productId }

    loading.value = true
    const { data } = await useFetch("/api/comment", { method: "post", body: body }).finally(() => loading.value = false);
    console.log("data.value.data", data.value.data);
    if (!data || !data.value || !data.value.data) return


    if (data.value.status) {
        console.log("if true");
        let body = []
        for (let index = 0; index < images.value.length; index++) {
            body.push({ name: imageNames[index], image: images[index] })
        }
        console.log("body", body);
        if (body.length > 0) {
            const response = await useFetch("/api/image", {
                method: "post",
                body: {
                    ownerName: "commentId",
                    ownerId: data.value.data.id,
                    images: imageData
                },
            }).catch((error) => {
                console.error(error);
            }).finally(() => loading.value = false);
        } else {
            loading.value = false
        }

        formClear()
    }

}

</script>

<template>
    <div class="container product-detail-comment">
        <div class="row mt-3">
            <div class="col-12">
                {{ productId }}
                <div class="card">
                    <h5 class="card-header"> {{ $t('write_commet') }}</h5>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-sm-6" style="height: 20rem;">
                                <div class="mt-3">
                                    <label for="comment-title" class="form-label">{{ $t('title') }}</label>
                                    <input v-model="comment.title" type="text" class="form-control" id="comment-title">
                                </div>
                                <div class="mt-5">
                                    <label for="comment-content" class="form-label">{{ $t('content') }}</label>
                                    <textarea v-model="comment.content" class="form-control" id="comment-content"
                                        rows="3"></textarea>
                                </div>
                                <div class="mt-4">
                                    <a @click="send"
                                        class="btn btn-primary d-inline-flex justify-content-center align-items-center">
                                        <div class="spinner-border spinner-border-sm float-start me-3" role="status"
                                            v-if="loading">
                                        </div>
                                        {{ $t('send') }}
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <label class="form-label mt-3">Görsel</label>

                                <div class="product-detail-comment-image" style="min-height: 13rem;">
                                    <ImageSwiper class="mt-0" :loading="loading" :images="images"
                                        :imageNames="imageNames" />
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
<script>
export default {
    name: "ProductSendComment",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
const { t } = useI18n();
const snackbar = useSnackbar();

const comment = ref({
    title: null,
    content: null,
})
const images = ref([])
const imageNames = ref([])
const commentImage = ref('commentImage')

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

    const config = {
        params: {
            name: route.params.name
        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data } = await useFetch("/api/product", config).finally(() => loading.value = false);
    console.log("data", data.value);
    if (!data || !data.value || !data.value.data) return

    item.value = data.value.data
    console.log("item.value", item.value);
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
                                    <a @click="send" class="btn btn-primary">{{ $t('send') }}</a>
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
                                    <button class="btn btn-outline-secondary" @click="uploadImage">{{ $t('upload')
                                    }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
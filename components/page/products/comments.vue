<script>
export default {
    name: "ProductComments",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate';
import { string, object } from 'yup';
const { t } = useI18n();
const { $qs, $helper } = useNuxtApp()
const snackbar = useSnackbar();
const { listen } = useEventBus()

const schema = object().shape({
    username: string().required(),
    title: string().required(),
    content: string().required(),
});

const props = defineProps({
    productId: { type: Number, required: true },
})

let loading = ref(false)
const comments = ref({})

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

async function get(id) {
    const config = {
        params: {
            productId: id
        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data } = await useFetch("/api/comment", config)

    if (data.value.status) {
        comments.value = data.value.data
    }
}

onMounted(() => {
    setTimeout(() => {
        get(props.productId)

        // console.log("listen onnnn");
        // listen('qweasd', function (product) {
        //     console.log("listen trigggeerrrr", product);
        //     get(product.id)
        // })
    }, 100);
});
</script>

<template>
    <div class="container product-detail-comments">
        <div class="row mt-3">
            <template v-for="(comment, index) in comments" :key="index">
                <div class="col-12 my-2">
                    <div class="card">
                        <h5 class="card-header" v-if="comment.username"><span class="fs-6">{{ $t('username') }}:</span>  @{{ comment.username }}</h5>
                        <div class="card-body">
                            <div class="row">
                                <p class="mb-3 fs-6"><span style="font-size: 0.9rem;">{{ $t('title') }}:</span> {{ comment.title }}</p>
                                <hr />
                                <p class="mb-0"><span style="font-size: 0.9rem;">{{ $t('content') }}:</span> {{ comment.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-0">
                    <template v-if="comment.images?.length > 0">
                        <ImageSwiper class="mt-0" :loading="loading" :images="comment.images.map(i => i.image)"
                            :imageNames="comment.images.map(i => i.name)" />
                    </template>

                </div>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product-detail-comments {
    span {
        color: var(--bs-secondary-color);
    }
}
</style>
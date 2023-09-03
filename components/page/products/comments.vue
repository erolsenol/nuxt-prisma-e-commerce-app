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

const props = defineProps({
    productId: { type: Number, required: true },
})

let paginate = reactive({
    skip: 0,
    take: 10,
    currentPage: 1,
    totalCount: 0,
    totalPage: 0,
})

let loading = ref(true)
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

async function get(page = 1) {
    if (Number.isInteger(page)) {
        paginate.skip = paginate.take * (page - 1)
    }

    const config = {
        params: {
            productId: props.productId,
            paginate: { ...paginate },
        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data } = await useFetch("/api/comment", config).finally(() => loading.value = false)

    console.log("data", data);
    if (data.value.status) {
        comments.value = data.value.data
        paginate = data.value.paginate
        console.log("comments.value", comments.value);
    }
}

onMounted(() => {
    setTimeout(() => {
        get()

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
                <div class="card px-0 my-2 border-1 border-secondary-subtle">
                    <h5 class="card-header" v-if="comment.username">
                        <!-- <span class="fs-6">{{ $t('username') }}:</span> -->
                        <Icon name="ep:user-filled" color="gray" size="32" />
                        @{{ comment.username }}
                    </h5>
                    <div class="card-body">
                        <div class="row">
                            <div class="my-2 " :class="`${comment.images?.length > 0 ? 'col-8' : 'col-12'}`">
                                <p class="mb-3 fs-6"><span style="font-size: 0.9rem;">{{ $t('title') }}:</span> {{
                                    comment.title }}</p>
                                <hr />
                                <p class="mb-0"><span style="font-size: 0.9rem;">{{ $t('content') }}:</span> {{
                                    comment.content }}</p>
                            </div>
                            <div class="text-end" :class="`${comment.images?.length > 0 ? 'col-4' : 'col-0'}`">
                                <template v-if="comment.images?.length > 0">
                                    <PageProductsCommentImage class="mt-0" :images="comment.images" />
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            
            <PaginationPage v-if="paginate.totalPage > 1" :paginate="paginate" @page="get" />
            <template v-if="loading">
                <div class="text-center my-3">
                    <Spinner color="secondary" />
                </div>

            </template>
            <template v-if="comments.length == 0 && !loading">
                <p class="fs-5 my-2">
                    {{ $t('product_no_comment') }}
                </p>
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
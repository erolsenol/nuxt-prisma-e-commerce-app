<script>
export default {
    name: "PaginationPage",
};
</script>

<script setup>
import { ref, reactive, onMounted } from "vue";
const { $qs, $helper } = useNuxtApp()

const emit = defineEmits(['page'])

let { paginate, } = defineProps({
    paginate: {
        type: Object,
        required: true
    },
})
let selectPage = ref(1)

function goPage(num) {
    console.log("12312", paginate);
    console.log("paginate", paginate.totalPage);
    console.log("num", num);
    if (num < 1 || num > paginate.totalPage) { return }

    console.log("emitttt");

    emit('page', num)
    selectPage = num
}
</script>

<template>
    <nav class="pagination-page d-flex flex-row align-items-center justify-content-center my-md-5 my-3">
        <ul class="pagination mb-0">
            <li class="page-item">
                <a v-if="false" class="page-link" aria-label="Previous" @click="goPage(paginate.currentPage - 1)">
                    <span aria-hidden="true">{{ $t('first') }}</span>
                </a>
                <a v-else class="icon-link icon-link-hover" @click="goPage(paginate.currentPage - 1)"
                    style="--bs-icon-link-transform: translate3d(-.3rem, 0, 0);">
                    <BootstrapIconArrowLeftShort style="width: 2.8rem; height: 2.8rem;" />
                </a>
            </li>

            <div class="d-flex justify-content-center pagination-page-area">
                <template v-for="(page, index) in paginate.totalPage">
                    <li class="page-item" :class="paginate.currentPage == page ? 'active' : ''" @click="goPage(page)"
                        v-if="$helper.paginationCondition(page, paginate.currentPage, paginate.totalPage)"><a
                            class="page-link rounded-circle fs-5">{{ page
                            }}</a></li>
                </template>
            </div>


            <li class="page-item">
                <a v-if="false" class="page-link" aria-label="Next" @click="goPage(paginate.currentPage + 1)">
                    <span aria-hidden="true">{{ $t('last') }}</span>
                </a>
                <a v-else class="icon-link icon-link-hover" @click="goPage(paginate.currentPage + 1)"
                    style="--bs-icon-link-transform: translate3d(.3rem, 0, 0);">
                    <BootstrapIconArrowRightShort style="width: 2.8rem; height: 2.8rem;" />
                </a>

            </li>
        </ul>

        <!-- <template v-if="false">
            <span class="fs-6 me-2">{{ $t('page') }}: {{ paginate.totalPage }} /</span>
            <div class="d-flex flex-row align-items-center input-group me-3" style="width: 8rem;">
                <input type="text" class="form-control" v-model="selectPage">
                <span class="input-group-text btn" style="cursor: pointer;" @click="goPage(parseInt(selectPage))">
                    <Icon name="el:search" size="24" color="gray" />
                </span>
            </div>
        </template> -->
    </nav>
</template>
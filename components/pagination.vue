<script>
export default {
    name: "Pagination",
};
</script>

<script setup>
import { ref, reactive, onMounted } from "vue";
const { $qs, $helper } = useNuxtApp()

const emit = defineEmits(['page'])

let { paginate, } = defineProps({
    paginate: {
        type: Object,
        default: () => ({ currentPage: 0, totalCount: 0, totalPage: 0 })
    },
})
let selectPage = ref(1)

function goPage(num) {
    emit('page', num)
    selectPage = num
}
</script>

<template>
    <nav class="d-flex flex-row align-items-center justify-content-end">
        <ul class="pagination mb-0 me-5">
            <li class="page-item">
                <a class="page-link" aria-label="Previous" @click="goPage(1)">
                    <span aria-hidden="true">{{ $t('first') }}</span>
                </a>
            </li>

            <template v-for="(page, index) in paginate.totalPage">
                <li class="page-item" :class="paginate.currentPage == page ? 'active' : ''" @click="goPage(page)"
                    v-if="$helper.paginationCondition(page, paginate.currentPage, paginate.totalPage)"><a
                        class="page-link">{{ page
                        }}</a></li>
            </template>
            <li class="page-item">
                <a class="page-link" aria-label="Next" @click="goPage(paginate.totalPage)">
                    <span aria-hidden="true">{{ $t('last') }}</span>
                </a>
            </li>
        </ul>

        <span class="fs-6 me-2">{{ $t('page') }}: {{ paginate.totalPage }} /</span>
        <div class="d-flex flex-row align-items-center input-group me-3" style="width: 8rem;">
            <input type="text" class="form-control" v-model="selectPage">
            <span class="input-group-text btn" style="cursor: pointer;" @click="goPage(parseInt(selectPage))">
                <Icon name="el:search" size="24" color="gray" />
            </span>
        </div>
    </nav>
</template>
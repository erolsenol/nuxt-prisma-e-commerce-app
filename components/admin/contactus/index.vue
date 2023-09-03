<script>
export default {
    name: "AdminContactUs",
};
</script>

<script setup>
import { ref, toRef, computed } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { array, number, string, object } from 'yup';

const { t } = useI18n();
const { $qs } = useNuxtApp()

const snackbar = useSnackbar();

let paginate = reactive({
    skip: 0,
    take: 3,
    currentPage: 1,
    totalCount: 0,
    totalPage: 0,
})
let filter = reactive({
    readed: false
})

const rows = ref([])

onMounted(() => {
    getAll()
});

async function getAll(page) {
    if (Number.isInteger(page)) {
        paginate.skip = paginate.take * (page - 1)
    }

    const config = {
        params: {
            paginate,
            filter: { ...filter }
        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data } = await useFetch('api/contactus', config)

    if (data.value.status) {
        console.log("12312312 getAllll");
        rows.value = data.value.data
        paginate = data.value.paginate
    } else {
        rows.value = []
    }
}

</script>

<template>
    <div class="contact-us-admin">
        <div class="contact-us-list-filter alert alert-primary border border-2 border-secondary border-opacity-50 rounded p-2"
            role="alert">
            <div class="d-flex justify-content-between mb-3">
                <span class="fs-5">{{ $t('filters') }}</span>
                <div class="d-flex justify-content-end">
                    <div class="filter-item form-switch mx-3">
                        <input class="form-check-input me-2" role="switch" type="checkbox" v-model="filter.readed"
                            id="filter-deleted">
                        <label class="form-check-label" for="filter-deleted">
                            {{ $t('show_read') }}
                        </label>
                    </div>

                    <div class="filter-item form-switch mx-3">
                        <input class="form-check-input me-2" role="switch" type="checkbox" v-model="filter.deleted"
                            id="filter-deleted">
                        <label class="form-check-label" for="filter-deleted">
                            {{ $t('show_deleted') }}
                        </label>
                    </div>
                </div>
            </div>

            <div class="contact-us-list-filter-container d-flex flex-row collapse">
                <div class="filter-item">
                    <label for="filter-name" class="form-label">{{ $t('name') }}</label>
                    <input type="text" v-model="filter.name" class="form-control" id="filter-name">
                </div>
                <div class="filter-item">
                    <label for="filter-name-en" class="form-label">{{ $t('lastname') }}</label>
                    <input type="text" v-model="filter.surname" class="form-control" id="filter-name-en">
                </div>
                <div class="filter-item">
                    <label for="filter-description" class="form-label">{{ $t('email') }}</label>
                    <input type="text" v-model="filter.email" class="form-control" id="filter-description">
                </div>
                <div class="filter-item">
                    <label for="filter-description-en" class="form-label">{{ $t('phone') }}</label>
                    <input type="text" v-model="filter.phone" class="form-control" id="filter-description-en">
                </div>
            </div>
        </div>

        <div class="filter-item mb-3 text-end d-flex flex-row justify-content-between">
            <h5 class="ps-1">{{ $t('incoming_messages') }} {{ $t('list') }}</h5>
            <button @click="getAll" class="btn btn-primary">
                {{ $t('incoming_messages') }} {{ $t('get') }}
            </button>
        </div>

        <template v-for="(item, index) in rows" :key="index">
            <AdminContactusItem :form="item" @getAll="getAll" @update="(e) => (rows[index] = e)" />
        </template>

        <div class="d-flex flex-row justify-content-end mt-4">
            <Pagination v-if="paginate.totalPage > 1" :paginate="paginate" @page="getAll" />
        </div>
    </div>
</template>

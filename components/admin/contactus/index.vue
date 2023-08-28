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


const loginModal = ref("loginModal")

const snackbar = useSnackbar();

onMounted(() => {
    getAll()
});

async function getAll() {
    const config = {
        params: {

        },
        paramsSerializer: (params) => $qs.stringify(params, { encode: false })
    };

    const { data } = await useFetch('api/contactus', config)

    if(data.value.status) {
        console.log("qweqweqw")
    }
}

</script>

<template>
    <div class="contact-us-admin ">

        <ContactusItem />
    </div>
</template>

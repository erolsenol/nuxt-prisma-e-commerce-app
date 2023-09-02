<script>
export default {
    name: "AdminComments",
};
</script>

<script setup>
import { ref, reactive, onMounted } from "vue";
const { $qs, $helper } = useNuxtApp()

let productId = ref(-1)

</script>

<template>
    <div class="admin-comment-list card p-2">

        <SelectProduct :value="productId" @value:update="(e) => productId = e" />

        <AdminCommentsList :productId="productId" />
    </div>
</template>

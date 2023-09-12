<script>
export default {
    name: "PageError",
};
</script>
<script setup>
const router = useRouter()

definePageMeta({
    layout: "404",
});

function goBack() {
    router.push("/")
}

</script>

<template>
    <NuxtLayout :name="404">
        <div class="container">
            <div class="page-null d-flex flex-column align-items-center justify-content-center">
                <p class="text-center fs-5">{{ $t('page_was_not_found') }}</p>
                <NuxtImg  sizes="sm:100vw md:50vw lg:400px" src="default/404.jpg" />
                <div>
                    <button class="btn btn-primary" style="min-width: 10rem;" @click="goBack">{{ $t('back') }}</button>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

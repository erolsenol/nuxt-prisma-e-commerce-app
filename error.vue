<script>
export default {
    name: "PageError",
};
</script>
<script setup>
const router = useRouter()

// const nuxtApp = useNuxtApp()
// const error = new Error()
// error.statusCode = 404
// nuxtApp.ssrContext.error = error

const nuxtApp = useNuxtApp();
const error = new Error();
error.statusCode = 404;

console.log(nuxtApp)

// nuxtApp.ssrContext.nuxt.error = error;
// nuxtApp.vueApp.nuxt.error = error;

function goBack() {
    router.push("/")
}

</script>

<template>
    <NuxtLayout :name="'404'">
        <div class="container">
            <div class="page-null d-flex flex-column align-items-center justify-content-center">
                <div>
                    <NuxtLink class="link-secondary link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-75-hover fs-5" to="/">
                        {{ $t('go_to_home_page') }}
                    </NuxtLink>
                    <!-- <button class="btn btn-primary" style="min-width: 10rem;" @click="goBack">{{ $t('back') }}</button> -->
                </div>
                <!-- <p class="text-center fs-5">{{ $t('page_was_not_found') }}</p> -->
                <NuxtImg sizes="sm:100vw md:50vw lg:400px" src="default/404.jpg" />
                
            </div>
        </div>
    </NuxtLayout>
</template>

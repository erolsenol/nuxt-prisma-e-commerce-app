<script setup>
const { locale, locales } = useI18n()
import { ref } from "vue"
import { useI18n, useLocalePath } from '#imports'
import { setLocale } from '@vee-validate/i18n';
const router = useRouter()


function pageChange(key, url) {
   selectedIndex.value = key
   if (url) {
      router.push(localeLocation(`/${url}`))
   }
}

const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
   return (locales.value).filter(i => i !== locale.value)
})

function changeLocale(val) {
   setLocale(val);
}
function formTypeChange(str) {
   loginFormType.value = str
}

const headerItems = [
   {
      text: "products",
      to: "/"
   },
   {
      text: "services",
      to: null
   },
   {
      text: "news_and_publications",
      to: null
   },
   {
      text: "about_us",
      to: "/about"
   },
   {
      text: "communication",
      to: null
   },
]

let selectedIndex = ref("0")
let loginFormType = ref("login")
</script>

<template>
   <header class="header">
      <div
         class="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">

         <div class="col-md-2 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex cool-link link-body-emphasis text-decoration-none">
               <NuxtImg class="logo ms-3" src="/img/google-logo.webp" />
            </a>
         </div>

         <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li class="" v-for="(item, index) in headerItems" :key="index">
               <NuxtLink :to="`${item.to}`" class="nav-link cool-link px-2">
                  {{ $t(item.text) }}
               </NuxtLink>

            </li>
         </ul>

         <div class="col-md-3 text-xl-end mt-xl-0 text-lg-start mt-lg-3 me-3">

            <button type="button" class="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#loginModal"
               @click="formTypeChange('login')">{{ $t('login') }}</button>
            <button type="button" class="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#loginModal"
               @click="formTypeChange('sing_up')"> {{ $t('sing_up') }}</button>
            <div class="btn-group" role="group">
               <button type="button" class="btn btn-outline-light dropdown-toggle px-3" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  {{ locale.toUpperCase() }}
               </button>
               <ul class="dropdown-menu">
                  <template v-for="item in availableLocales" :key="locale.code">
                     <li class="text-center">
                        <NuxtLink class="dropdown-item" @click="changeLocale(item)" :to="switchLocalePath(item)">
                           {{ item.toUpperCase() }}
                        </NuxtLink>
                     </li>
                  </template>
               </ul>
            </div>
            <!-- <button type="button" class="btn btn-outline-primary me-2">Login</button>
         <button type="button" class="btn btn-primary">Sign-up</button> -->
         </div>
      </div>
      <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">{{ loginFormType == 'login' ? $t('login') :
                     $t('sing_up') }}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <LoginForm :type="loginFormType" />
               </div>

            </div>
         </div>
      </div>
   </header>
</template>

<style></style>
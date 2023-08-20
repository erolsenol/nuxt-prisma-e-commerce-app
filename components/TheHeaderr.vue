<script setup>
import { ref } from "vue"
import { useI18n, useLocalePath } from '#imports'
import { setLocale } from '@vee-validate/i18n';

const { locale, locales } = useI18n()
const router = useRouter()
const storeUser = useUser()

console.log("storeUser", storeUser);

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
function logout() {
   storeUser.logout()
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

         <div class="col-lg-1 col-md-2 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex cool-link link-body-emphasis text-decoration-none">
               <NuxtImg class="logo ms-3" src="/img/google-logo.webp" />
            </a>
         </div>

         <ul class="nav col-lg-7 col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li class="" v-for="(item, index) in headerItems" :key="index">
               <NuxtLink :to="`${item.to}`" class="nav-link cool-link px-2">
                  {{ $t(item.text) }}
               </NuxtLink>

            </li>
         </ul>

         <div
            class="d-flex flex-row align-items-center justify-content-lg-end col-lg-3 col-md-5 col-sm-6 text-xl-end text-lg-start mt-xl-0 mt-lg-3 mt-md-3 me-3">
            <template v-if="storeUser.getHasLogin != true">
               <button type="button" class="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#loginModal"
                  @click="formTypeChange('login')">{{ $t('login') }}</button>
               <button type="button" class="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#loginModal"
                  @click="formTypeChange('sing_up')"> {{ $t('sing_up') }}</button>
            </template>
            <template v-else>
               <div class="dropdown text-end me-3" style="max-width: 12rem;">
                  <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                     data-bs-toggle="dropdown" aria-expanded="false">
                     <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">

                     <Icon class="ms-1" color="white" name="ri:arrow-down-s-fill" />
                  </a>
                  <ul class="dropdown-menu text-small">
                     <!-- <li><a class="dropdown-item">New project...</a></li>
                     <li><a class="dropdown-item">Settings</a></li>
                     <li><a class="dropdown-item">Profile</a></li>
                     <li>
                        <hr class="dropdown-divider">
                     </li> -->
                     <li><a class="dropdown-item" @click="logout">Sign out</a></li>
                  </ul>
               </div>
            </template>
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
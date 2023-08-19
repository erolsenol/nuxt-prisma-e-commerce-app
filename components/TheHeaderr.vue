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
</script>

<template>
   <header
      class="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
         <a href="/" class="d-inline-flex cool-link link-body-emphasis text-decoration-none">
            <NuxtImg class="logo ms-3" src="/img/google-logo.webp" />
         </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
         <li v-for="(item, index) in headerItems" :key="index">
            <NuxtLink :to="`${item.to}`" class="nav-link cool-link px-2">
               {{ $t(item.text) }}
            </NuxtLink>

         </li>
      </ul>

      <div class="col-md-3 text-end me-3">
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
   </header>
</template>

<style></style>
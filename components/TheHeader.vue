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
      to: null
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
      to: "about"
   },
   {
      text: "communication",
      to: null
   },
]

let selectedIndex = ref("0")
</script>

<template>
   <div class="header mb-3">
      <div class="">
         <ul class="nav nav-pills nav-fill shadow-lg justify-content-center flex-column flex-sm-row mb-2">
            <li class="nav-item logo">
               <a class="nav-link shadow12 fs-5 logo-container-logo py-3" :class="selectedIndex == '0' ? 'nav-link-active' : ''"
                  aria-current="page" href="#" @click="selectedIndex = '0'">
                  <span class="logo-container-mail fs-6">
                     erosnl@gmail.com
                  </span>
                  <span>LOGO</span>
               </a>
            </li>
            <li class="nav-item " v-for="(item, key) in headerItems" :key="key">
               <NuxtLink class="nav-link shadow12 fs-5 py-3" :class="selectedIndex == key + 1 ? 'nav-link-active' : ''"
                  @click="pageChange(key + 1, item.to)">{{ $t(item.text) }}</NuxtLink>
            </li>
            <li class="nav-item dropdown d-flex align-items-center lang">
               <a class="nav-link shadow12 fs-5 dropdown-toggle lang-item" data-bs-toggle="dropdown" role="button"
                  aria-expanded="false">
                  {{ locale.toUpperCase() }}
               </a>
               <ul class="dropdown-menu">
                  <template v-for="item in availableLocales" :key="locale.code">
                     <li>
                        <NuxtLink class="dropdown-item" @click="changeLocale(item)" :to="switchLocalePath(item)">
                           {{ item.toUpperCase() }}
                        </NuxtLink>
                     </li>
                  </template>
               </ul>
            </li>
         </ul>
      </div>
   </div>
</template>

<style></style>
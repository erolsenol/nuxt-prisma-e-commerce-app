<script setup>
const { locale, locales } = useI18n()
import { ref } from "vue"
import { useI18n, useLocalePath } from '#imports'
const router = useRouter()

console.log("router", router);

function pageChange(key, url) {
   console.log("key", key);
   selectedIndex.value = key
   console.log("selectedIndex", selectedIndex);
   console.log("url", url);
   if (url) {
      router.push(`/tr/${url}`)
   }
}

const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
   return (locales.value).filter(i => i !== locale.value)
})

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
   <div class="header mb-5">
      <div class="container">
         <ul class="nav nav-pills nav-fill shadow-lg justify-content-center flex-column flex-sm-row mb-4">
            <li class="nav-item me-1">
               <a class="nav-link py-3" :class="selectedIndex == '0' ? 'nav-link-active' : ''" aria-current="page" href="#"
                  @click="selectedIndex = '0'">LOGO</a>
            </li>
            <li class="nav-item me-1" v-for="(item, key) in headerItems" :key="key">
               <NuxtLink class="nav-link py-3" :class="selectedIndex == key + 1 ? 'nav-link-active' : ''"
                  @click="pageChange(key + 1, item.to)">{{ $t(item.text) }}</NuxtLink>
            </li>
            <li class="nav-item dropdown d-flex align-items-center">
               <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                  {{ locale.toUpperCase() }}
               </a>
               <ul class="dropdown-menu">
                  <template v-for="item in availableLocales" :key="locale.code">
                     <li>
                        <NuxtLink class="dropdown-item" :to="switchLocalePath(item)">
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
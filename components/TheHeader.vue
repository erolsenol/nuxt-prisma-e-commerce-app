<script setup>
const { locale, locales } = useI18n()
import { ref } from "vue"
import { useI18n, useLocalePath } from '#imports'

const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
   return (locales.value).filter(i => i !== locale.value)
})

const headerItems = [
   "products",
   "services",
   "news_and_publications",
   "institutional",
   "communication",
]

const selectedIndex = ref("0")
</script>

<template>
   <div class="header">
      <div class="container">
         <ul class="nav nav-pills nav-fill shadow-lg justify-content-center flex-column flex-sm-row mb-4">
            <li class="nav-item me-1">
               <a class="nav-link py-3" :class="selectedIndex == '0' ? 'nav-link-active' : ''" aria-current="page" href="#"
                  @click="selectedIndex = '0'">Active</a>
            </li>
            <li class="nav-item me-1" v-for="(item, key) in headerItems" :key="key">
               <a class="nav-link py-3" :class="selectedIndex == key + 1 ? 'nav-link-active' : ''" href="#"
                  @click="selectedIndex = key + 1">{{ $t(item) }}</a>
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
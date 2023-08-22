<script setup>
const { locale, locales } = useI18n()

const headerItems = [
   {
      text: "products",
      to: "index"
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
</script>

<template>
   <div class="footer mt-4">
      <div class="container pt-3">
         <div class="row">
            <div class="col-12 col-sm-6  mb-3">
               <ul class="list-group list-group-vertical">
                  <li class="list-group-item">
                     LOGO
                  </li>
                  <li class="list-group-item">
                     <Icon name="material-symbols:call-sharp" color="white" size="30" />
                     <span class="ms-2">+90 555 555 55 55</span>
                  </li>
                  <li class="list-group-item">
                     <Icon name="material-symbols:mail" color="white" size="30" />
                     <span class="ms-2">qweqw qwe qwe qwe qwe</span>

                  </li>
                  <li class="list-group-item">
                     <Icon name="material-symbols:mail" color="white" size="30" />
                     <span class="ms-2">qweqw qwe qwe qwe qwe</span>

                  </li>
               </ul>
            </div>
            <div class="col-12 col-sm-6  mb-3">
               <ul class="list-group list-group-vertical">
                  <li class="list-group-item" v-for="(item, index) in headerItems">
                     <span class="cool-link">{{ $t(item.text) }}</span>
                     </li>
                 
               </ul>
            </div>

         </div>
      </div>
      <div class="divider"></div>
      <div class="container footer-bottom d-flex align-items-center justify-content-center py-2">
         <span>Neva Advertising Agency | Copyright © 2021. All rights reserved. In case of copying, reproduction and
            distribution, our legal rights will be exercised.
         </span>
      </div>
   </div>
</template>

<style>
.cool-link {
   display: inline-block;
}
</style>
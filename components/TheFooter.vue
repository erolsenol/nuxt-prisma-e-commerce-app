<script>
export default {
   name: "TheFooter",
};
</script>
<script setup>
const { $qs } = useNuxtApp()
const { locale } = useI18n()
const router = useRouter()

let footerLogo = ref({})
const categories = ref([])

function pageChange(to) {
   router.push({ name: `${to}___${locale.value}` })
}

async function getFooterLogo() {
   const config = {
      method: "get",
      params: {
         ownerName: "footerLogo"
      },
      paramsSerializer: (params) => qs.stringify(params, { encode: false })
   };
   const { data } = await useFetch("/api/image", config)
   if (data.value.status) {
      footerLogo.value = data.value.data
   }
}
async function getCategory() {
   const config = {
      params: {
         all: "1"
      },
      paramsSerializer: (params) => $qs.stringify(params, { encode: false })
   };
   const { data, pending, error, refresh } = await useFetch("/api/category").catch((error) => {
      console.error(error);
   });

   if (data.value.status) {
      categories.value = data.value.data
   }
}

onMounted(() => {
   setTimeout(async () => {
      getCategory()
      getFooterLogo()
   }, 100);
});

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
                     <template v-if="footerLogo.name">
                        <NuxtImg class="logo" :src="`images/app/${footerLogo.name}`" />
                     </template>
                     <SpinnerGrow v-else color="secondary" size="1" />
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
                     <span class="cool-link" @click="pageChange(item.to)">{{ $t(item.text) }}</span>
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
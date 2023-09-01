<script>
export default {
  name: "PageProductDetail",
};
</script>
<script setup>
import { ref, onMounted } from 'vue'
const route = useRoute()
const { t } = useI18n();
const { $qs } = useNuxtApp()
const storeUser = useUser()
const snackbar = useSnackbar();

const item = ref({})
let loading = ref(true)
let likeStatus = ref(false)

onMounted(() => {
  console.log("product onMounted");
  //fix
  setTimeout(() => {
    get()
  }, 100);

})

// async function sendComment() {
//   const body = {}
//   const config = {
//     methos: "post",
//     body
//   };

//   const { data } = await useFetch("/api/comment",config)

//   if (data.value.status) {

//     snackbar.add({
//       type: "success",
//       text: t('api.comment_send'),
//     });
//     return
//   } else {
//     snackbar.add({
//       type: "error",
//       text: t('api.error.comment_post'),
//     });
//     return
//   }
// }

async function get() {
  let productName = route.params.name
  console.log("productName",productName);
  if (!productName) {
    setTimeout(() => {
      const pathname = window.location.pathname
      const index = pathname.indexOf('ct-')
      if (index > -1) {
        productName = pathname.substring(index + 3, pathname.length - index + 3)
      }
      console.log(window.location);
      if (!productName) {
        get()
      }
    }, 200);
    return
  }

  console.log("route.params.name", route.params.name);
  console.log("productName", productName);

  const config = {
    params: {
      name: route.params.name || productName
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  const { data } = await useFetch("/api/product", config).finally(() => loading.value = false);
  console.log("data", data.value);
  if (!data || !data.value || !data.value.data) return

  item.value = data.value.data
  console.log("item.value", item.value);
}

async function sendStar() {
  if (!storeUser.getUser) {
    snackbar.add({
      type: "error",
      text: t('please_login'),
    });
    return
  }

  const body = {
    productId: item.value.id,
    userId: storeUser.getUser.id
  }
  const { data, pending, error, refresh } = await useFetch("/api/star", {
    method: "post",
    body: body,
  }).catch((error) => {
    console.error(error);
  });

  if (!data.value.status) {
    snackbar.add({
      type: "error",
      text: t('like_not_save'),
    });
  } else {
    if (data.value.data === "star remove") {
      likeStatus.value = false
      return
    }
    likeStatus.value = true
  }
}

async function getStar() {

  const config = {
    params: {
      productId: item.id
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };
  const { data, pending, error, refresh } = await useFetch("/api/star", {
    method: "post",
    body: body,
  }).catch((error) => {
    console.error(error);
  });
}

</script>

<template>
  <div class="container product-detail" style="min-height: 40vw;">
    <div class="row" v-if="!loading">
      <div
        class="col-12 col-md-7 col-lg-6 product-detail-image border border-end-0 border-start-0 p-2 py-3 d-flex aling-items-center justify-content-start"
        style=" min-height: 20rem;">
        <template v-if="item.images && item.images.length > 0">
          <NuxtImg class="rounded-2" placeholder="./images/no-image.jpeg" :src="'images/' + item.images[0].name" />
        </template>
        <NuxtImg class="" v-else :src="'images/no-image.jpeg'" />
      </div>
      <div class="col-12 col-md-5 col-lg-6 product-detail-content border border-end-0 border-start-0 p-2 py-3">
        <div class="product-detail-content-title">
          <span class="fs-3"> {{ item.title }}</span>
        </div>
        <div class="product-detail-content-name">
          <p class="fs-6"> {{ item.name }}</p>
        </div>

        <div class="product-detail-content-price d-flex flex-row justify-content-between">
          <div class="w-50 text-start">
            <span class="fs-3">3.852.00 <span class="fs-5">TL</span></span>
          </div>
          <div class="w-50 d-flex flex-row justify-content-end align-items-center">
            <span class="fs-4 me-3"> 4.4</span>
            <Icon name="fontisto:star" color="black" class="me-1" style="cursor: pointer;" v-for="num in 5" />
          </div>
        </div>

        <div class="product-detail-content-question d-flex justify-content-between mt-3" style="cursor: pointer;">
          <div class="position-relative">
            <Icon class="product-detail-content-question-like" name="icon-park-outline:like"
              :color="likeStatus ? 'red' : 'black'" size="36" style="cursor: pointer;" @click="sendStar">
            </Icon>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </div>

          <span class="badge bg-secondary text-wrap py-3 px-3 fs-6">{{ $t('ask_question') }}</span>
        </div>
        <!-- <div class="product-detail-content-start text-start mt-2" style="cursor: pointer;">
          <Icon name="icon-park-outline:like" color="black" size="30" style="cursor: pointer;" />
        </div> -->
      </div>
      <PageProductsSendComment :productId="item.id" />
    </div>
    <Loading v-else />

  </div>
</template>

<style lang="scss" scoped>
.product-detail-image {
  img {
    display: block;
    // max-width: 40rem;
    // max-height: 30rem;
    width: 100%;
    height: auto;
  }
}
</style>
<script>
export default {
  name: "PageContact",
};
</script>
<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { string, object } from 'yup';
import { onMounted, watch, reactive } from "vue"
import { useI18n } from "vue-i18n"

const { locale, t } = useI18n()
const snackbar = useSnackbar();
const { $qs } = useNuxtApp()

const schema = object({
  name: string().required(),
  surname: string().required(),
  email: string().email().required(),
  title: string().required(),
  content: string().required(),
});



let form = reactive({})

const items = ref([])
const loading = ref(true)

watch(() => locale.value, async () => {
  getAll()
})

async function getAll() {
  console.log("getall locale:", locale);
  const config = {
    params: {
      pageName: "contact",
      locale
    },
    paramsSerializer: (params) => $qs.stringify(params, { encode: false })
  };

  loading.value = true
  const { data } = await useFetch("/api/pageContent", config).finally(() => loading.value = false);
  if (!data.value) return

  console.log("response data", data.value);

  if (data?.value?.status) {
    items.value = data.value.data

  } else {
    console.log("Görseller çekilirken bir sorun oluştu");
    snackbar.add({
      type: "error",
      text: "Görseller çekilirken bir sorun oluştu",
    });
  }
}

async function send(values, { resetForm }) {

  const body = { ...form }
  const { data } = await useFetch('/api/contactus', { method: "post", body })

  if (data.value.status) {
    resetForm()

    snackbar.add({
      type: "success",
      text: t('contact_message_send'),
    });
  }
}

onMounted(() => {
  setTimeout(() => {
    getAll()
  }, 300);
})

const center = ref({ lat: 40.689247, lng: -74.044502 });
const markerOptions = ref({ position: center, label: "L", title: "LADY LIBERTY" });


</script>

<template>
  <div class="contact-us-content">
    <div class="container">
      <HomeSwiper />

      <div class="row my-5">
        <div class="col-12 col-md-6 text-center">
          <NuxtImg class="contact-us-content-image" src="/img/contact-us.jpeg" />

        </div>
        <div class="col-12 col-md-6 alert alert-secondary">
          <p class="fs-4 text-center">{{ $t('contact_us') }}</p>
          <Form @submit="send" :validation-schema="schema">
            <div class="mb-2">
              <label for="contact-name" class="form-label">{{ $t('name') }}</label>
              <Field name="name" type="text" as="input" v-model="form.name" class="form-control" id="contact-name" />
              <ErrorMessage class="invalid" name="name" />
            </div>

            <div class="mb-2">
              <label for="contact-surname" class="form-label">{{ $t('lastname') }}</label>
              <Field name="surname" type="text" as="input" v-model="form.surname" class="form-control"
                id="contact-surname" />
              <ErrorMessage class="invalid" name="surname" />
            </div>

            <div class="mb-2">
              <label for="contact-email" class="form-label">{{ $t('email') }}</label>
              <Field name="email" type="email" as="input" v-model="form.email" class="form-control" id="contact-email" />
              <ErrorMessage class="invalid" name="email" />
            </div>

            <div class="mb-2">
              <label for="contact-phone" class="form-label">{{ $t('phone') }}</label>
              <Field name="phone" type="text" as="input" v-model="form.phone" class="form-control" id="contact-phone" />
              <ErrorMessage class="invalid" name="phone" />
            </div>

            <div class="mb-2">
              <label for="contact-title" class="form-label">{{ $t('title') }}</label>
              <Field name="title" type="text" as="input" v-model="form.title" class="form-control" id="contact-title" />
              <ErrorMessage class="invalid" name="title" />
            </div>

            <div class="mb-2">
              <label for="contact-content" class="form-label">{{ $t('content') }}</label>
              <Field name="content" type="text" as="textarea" rows="3" v-model="form.content" class="form-control"
                id="contact-content" />
              <ErrorMessage class="invalid" name="content" />
            </div>

            <button type="submit" class="btn btn-secondary mt-3 px-4">{{ $t('send') }}</button>
          </Form>
        </div>
      </div>

      <template v-for="(item, index) in items" :key="index">
        <PageDesing :index="index" :hasImage="item.images && item.images.length > 0"
          :hasContent="typeof item.content == 'string'" :hasTitle="typeof item.title == 'string'">
          <template v-slot:content>
            <p class="fs-4 text-capitalize fw-bold">{{ item.title }}</p>
            <p class="fs-6 ">{{ item.content }}</p>
          </template>
          <template v-slot:image>
            <template v-if="item.images && item.images.length > 0">
              <NuxtImg style="width: 26rem;" :src="`images/about-us/${item.images[0].name}`" />
            </template>
          </template>
        </PageDesing>
        <hr v-if="index < items.length - 1" />
      </template>


    </div>
  </div>
</template>


<style lang="scss" scoped>
.contact-us-content-image {
  position: relative;
  top: 30%;
  width: 90%;
}
</style>
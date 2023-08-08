<script setup>
const { locale } = useI18n()
const { isMobile } = useDevice();
const { $anime } = useNuxtApp()
const snackbar = useSnackbar();
const runtimeConfig = useRuntimeConfig()

import { useForm,Field, Form } from 'vee-validate';

// Validation, or use `yup` or `zod`
function required(value) {
  return value ? true : 'This field is required';
}


// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    field: required,
  },
});

// Define fields
const field = defineInputBinds('field');

// Submit handler
const onSubmit = handleSubmit(values => {
  // Submit to API
  console.log(values);
});

onMounted(() => {
    $anime({ targets: '.title', translateX: 250, duration: 800 })
    snackbar.add({
    type: 'success',
    text: 'This is a snackbar message'
})
  })
//lodash
var other = _difference([7,8,9], 2, [3], [[4]]);
</script>


<template>
  <div class="my-class">
    <Form v-slot="{ errors }" @submit="onSubmit">
    <Field name="field" :rules="required" />

    <span>{{ errors.field }}</span>

    <button>Submit</button>
  </Form>
  <LazyElButton type="warning">lazy button</LazyElButton>
    <h1 class="title">Nuxt Anime</h1>
    <div>nasilsin iyi misin ben iyiym</div>
    <NuxtWelcome />
    <NuxtSnackbar />
    <SeoKit />
  </div>
</template>


<style>
.my-class {
  background-color: var(--v-primaryy);
}
</style>
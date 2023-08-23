<script>
export default {
  name: "CategoryAdd",
};
</script>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import { string, object } from 'yup';

const schema = object({
  name: string().required(),
  name_en: string().required(),
  description: string(),
});

const snackbar = useSnackbar();

const initialCategory = () => ({
  name: null,
  name_en: null,
  description: null,
  description_en: null,
});

const addValidation = ref('addValidation');
const category = ref(initialCategory());

async function formClear() {
  return new Promise((resolve, reject) => {
    category.value.name = null
    category.value.name_en = null
    category.value.description = null
    resolve(true)
  })

}


async function save() {
  const { valid } = await addValidation.value.validate()
  if (!valid) {
    snackbar.add({
      type: "error",
      text: "Formu Eksiksiz Doldurun",
    });
    return
  }

  console.log("send category 12312");
  const categoryData = { ...category.value }
  const { data, pending, error, refresh } = await useFetch("/api/category", {
    method: "post",
    body: categoryData,
  }).catch((error) => {
    console.error(error);
  });
  if (data.value.status) {
    console.log("Kategori Yüklendi");
    snackbar.add({
      type: "success",
      text: "Kategori Yüklendi",
    });
    await formClear()
  } else {
    if (data.value.error === "There is a category with the same name") {
      snackbar.add({
        type: "error",
        text: "Aynı İsimle category bulunuyor",
      });

      await addValidation.value.reset()
      return true
    }
    console.log("Kategori Kaydedilemedi");
    snackbar.add({
      type: "error",
      text: "Kategori Kaydedilemedi",
    });
  }
  await addValidation.value.reset()
  return true
}
</script>

<template>
  <div class="category-add">
    <Form as="v-form" ref="addValidation" :validation-schema="schema">
      <div class="mb-3">
        <label for="category-name" class="form-label">Kategori Adı</label>
        <div class="input-group">
          <span class="input-group-text">TR *</span>
          <Field name="name" v-model="category.name" as="input" type="text" v-slot="{ field }" class="form-control"
            id="category-name">
            <input v-bind="field" @change="handleChange">
          </Field>
        </div>
        <ErrorMessage class="invalid" name="name" />
        <div class="input-group mt-2">
          <span class="input-group-text px-3">EN</span>
          <Field name="name_en" v-model="category.name_en" as="input" type="text" v-slot="{ field }" class="form-control"
            id="category-name-en">
            <input v-bind="field">
          </Field>
        </div>
      </div>
      <div class="mb-3">
        <label for="category-description" class="form-label">Kategori Açıklaması</label>
        <div class="input-group">
          <span class="input-group-text">TR *</span>
          <Field name="description" v-model="category.description" as="input" type="text" class="form-control"
            id="category-description" />
        </div>
        <ErrorMessage class="invalid" name="description" />
        <div class="input-group mt-2">
          <span class="input-group-text px-3">EN</span>
          <Field name="description_en" v-model="category.description_en" as="input" type="text" class="form-control"
            id="category-description-en" />
        </div>

      </div>
      <button @click="save()" class="btn btn-primary">Kaydet</button>
    </Form>
  </div>
</template>

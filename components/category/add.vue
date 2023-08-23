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
  const {valid} = await addValidation.value.validate()
  if(!valid) {
    snackbar.add({
        type: "error",
        text: "Formu Eksiksiz Doldurun",
      });
    return 
  }

  console.log("send category 12312");
  const categoryData = category.value
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
    if(data.value.error === "There is a category with the same name") {
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
        <Field name="name" v-model="category.name" as="input" type="text" v-slot="{ field, handleChange }" class="form-control" id="category-name">
          <input v-bind="field" @change="handleChange">
        </Field>
        <ErrorMessage class="invalid" name="name" />
      </div>
      <div class="mb-3">
        <label for="category-name_en" class="form-label">Kategori Başlığı</label>
        <Field name="name_en"  v-model="category.name_en" as="input" type="text" class="form-control" id="category-name_en" />
        <ErrorMessage class="invalid" name="name_en" />
      </div>
      <div class="mb-3">
        <label for="category-description" class="form-label">Kategori Açıklaması</label>
        <Field name="description"  v-model="category.description" as="input" type="text" class="form-control"
          id="category-description" />
        <ErrorMessage class="invalid" name="description" />
      </div>
      <button @click="save()" class="btn btn-primary">Kaydet</button>
    </Form>
  </div>
</template>

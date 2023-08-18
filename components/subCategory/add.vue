<script>
export default {
  name: "SubCategoryAdd",
};
</script>

<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  name_en: yup.string().required(),
  description: yup.string(),
  categoryId: yup.number().required(),
});

const snackbar = useSnackbar();

const initialSubCategory = () => ({
  name: null,
  name_en: null,
  description: null,
  categoryId: null
});

const addValidation = ref('addValidation');
const subCategory = ref(initialSubCategory());

async function formClear() {
  return new Promise((resolve, reject) => {
    subCategory.value.name = null
    subCategory.value.name_en = null
    subCategory.value.description = null
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

  console.log("send subCategory 12312");
  const categoryData = subCategory.value
  const { data, pending, error, refresh } = await useFetch("/api/subCategory", {
    method: "post",
    body: categoryData,
  }).catch((error) => {
    console.error(error);
  });
  if (data.value.status) {
    console.log("Alt kategori Yüklendi");
    snackbar.add({
      type: "success",
      text: "Alt kategori Yüklendi",
    });
    await formClear()
  } else {
    if (data.value.error === "There is a subCategory with the same name") {
      snackbar.add({
        type: "error",
        text: "Aynı İsimle subCategory bulunuyor",
      });

      await addValidation.value.reset()
      return true
    }
    console.log("Alt kategori Kaydedilemedi");
    snackbar.add({
      type: "error",
      text: "Alt kategori Kaydedilemedi",
    });
  }
  await addValidation.value.reset()
  return true
}
</script>

<template>
  <div class="sub-category-add">
    <Form as="v-form" ref="addValidation" :validation-schema="schema">
      <div class="mb-3">
        <label for="subCategory-name" class="form-label">Alt kategori Adı</label>
        <Field name="name" v-model="subCategory.name" as="input" type="text" v-slot="{ field, handleChange }"
          class="form-control" id="subCategory-name">
          <input v-bind="field" @change="handleChange">
        </Field>
        <ErrorMessage class="invalid" name="name" />
      </div>
      <div class="mb-3">
        <label for="subCategory-name_en" class="form-label">Alt kategori Başlığı</label>
        <Field name="name_en" v-model="subCategory.name_en" as="input" type="text" class="form-control"
          id="subCategory-name_en" />
        <ErrorMessage class="invalid" name="name_en" />
      </div>
      <div class="mb-3">
        <label for="subCategory-description" class="form-label">Alt kategori Açıklaması</label>
        <Field name="description" v-model="subCategory.description" as="input" type="text" class="form-control"
          id="subCategory-description" />
        <ErrorMessage class="invalid" name="description" />
      </div>
      <div class="mb-3">
        <label for="subCategory-categoryId" class="form-label">Üst kategori</label>
        <Field name="categoryId" v-model="subCategory.categoryId" as="select" class="form-control"
          id="subCategory-categoryId" v-slot="{ field }">
          <select class="form-select" v-bind="field">
            <option selected :value="null">Seçiniz</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </Field>
        <ErrorMessage class="invalid" name="categoryId" />
      </div>
      <button @click="save()" class="btn btn-primary">Kaydet</button>
    </Form>
  </div>
</template>

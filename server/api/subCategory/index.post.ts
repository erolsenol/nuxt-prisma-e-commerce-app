import { postSubCategory, getSubCategoryByName } from "../../data/subCategories";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false,
  };
  const body = await readBody(event);

  if (!body.name || !body.name_en || !body.categoryId) {
    response.error = "cannot be empty";
    return response;
  }

  const nameCategory = await getSubCategoryByName(body.name);
  if (nameCategory.length > 0) {
    response.error = "There is a category with the same name";
    return response;
  }

  const subCategory = await postSubCategory({
    name: body.name,
    name_en: body.name_en,
    categoryId: body.categoryId,
    description: body.description,
  });

  if (subCategory?.id) {
    response.data = subCategory;
    response.status = true;
    return response;
  }
  return response;
});

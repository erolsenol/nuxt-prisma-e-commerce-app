import { postCategory, getCategoryByName } from "../../data/categories";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false,
  };
  const body = await readBody(event);

  if (!body.name || !body.name_en) {
    response.error = "cannot be empty";
    return response;
  }

  const nameCategory = await getCategoryByName(body.name);
  if (nameCategory.length > 0) {
    response.error = "There is a category with the same name";
    return response;
  }

  const category = await postCategory({
    name: body.name,
    name_en: body.name_en,
    description: body.description,
  });

  if (category?.id) {
    response.data = category;
    response.status = true;
    return response;
  }
  return response;
});

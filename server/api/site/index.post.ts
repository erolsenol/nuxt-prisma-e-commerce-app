import sites from "../../data/sites";

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

  const nameCategory = await sites.getByName(body.name);
  if (nameCategory.length > 0) {
    response.error = "same_name";
    return response;
  }

  console.log("category create body:",body);
  const category = await sites.create(body);

  if (category?.id) {
    response.data = category;
    response.status = true;
  }
  return response;
});

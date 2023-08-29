import subCategories from "../../data/subCategories";

interface response {
  data?: Object;
  error?: String;
  status: Boolean;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    status: false,
  };

  const body = await readBody(event);

  if (!body.id || !body.name) {
    response.error = "cannot be empty";
    return response;
  }

  const data = body;
  const res = await subCategories.update(data.id, data);

  if (res.id) {
    response.data = res;
    response.status = true;
  }

  return response;
});

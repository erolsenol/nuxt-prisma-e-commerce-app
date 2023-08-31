import sites from "../../data/sites";

export default defineEventHandler(async (event) => {
  let response: response = {
    data: [],
    status: false,
  };

  const body = await readBody(event)

  if (!body.id) {
    response.error = "id cannot be empty";
    return response;
  }

  const res = await sites.remove(body.id, !body.deleted);

  if (res) {
    response.data = res;
    response.status = true;
  }

  return response;
});

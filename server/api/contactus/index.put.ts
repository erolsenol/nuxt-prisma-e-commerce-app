import contactus from "../../data/contactus";;

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false,
  };
  const body = await readBody(event);

  if (!body.id) {
    response.error = "cannot be empty";
    return response;
  }

  const item = await contactus.update(body.id, body)

  if (item.id) {
    response.data = item;
    response.status = true;
  }
  return response;
});

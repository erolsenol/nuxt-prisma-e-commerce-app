import contactus from "../../data/contactus";

export default defineEventHandler(async (event) => {
  let response = {
    status: false,
  };
  const id: Number = parseInt(event.context.params.id) as number;

  if (!id) {
    response.error = "id cannot be empty";
    return response;
  }

  const item = await contactus.get(id);

  if (item?.id) {
    response.data = item;
    response.status = true;
  }

  return response;
});

import categories from "../../data/categories";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const id: Number = Number(query.id) as number;

  let response: response = {
    data: [],
    status: false,
  };

  console.log("id", id);

  if (!id) {
    response.error = "id cannot be empty";
    return response;
  }

  const body = await readBody(event)

  const res = await categories.remove(id);
  console.log("delete file:", res);
  if (res) {
    response.data = res;
    response.status = true;
  }

  return response;
});

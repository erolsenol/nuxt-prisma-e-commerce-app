import pageAbout from "../../data/pageContents";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const id: Number = Number(query.id) as number;

  let response = {
    status: false,
  };

  if (!id) {
    response.error = "id cannot be empty";
    return response;
  }

  const data = await pageAbout.remove(id);

  if (!data.id) {
    response.error = "about page "+ id + " not found";
  }else {
    response.data = data
    response.status = true
  }

  return response;
});

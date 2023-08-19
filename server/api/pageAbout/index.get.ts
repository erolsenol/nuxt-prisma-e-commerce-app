import pageAbout from "../../data/pageAbout";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }

  const items = await pageAbout.geAll()


  if (items && items.length > 0) {
    response.data = items
    response.status = true
  }

  return response
});

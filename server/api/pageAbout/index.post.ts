import pageAbout from "../../data/pageAbout";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false
  }
  const { locale, title, content, image } = await readBody(event)

  // locale
  // title
  // content
  // image

  if (!body.locale || !body.title || !body.content) {
    response.error = "cannot be empty"
    return response
  }

  const data = {
    locale,
    title,
    content
  }
  const res = await pageAbout.post(data)

  if (res.id) {
    response.data = res
    response.status = true
  }
  
  return response
});

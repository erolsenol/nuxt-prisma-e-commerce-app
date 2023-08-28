
import stars from "../../data/stars";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const body = await readBody(event)

  if (!body.id) {
    response.error = "cannot be empty"
    return response
  }

  const question = stars.remove(body.id)
  if (question) {
    response.data = question
    response.status = true
    return response
  }

  response.error = "Failed to delete like"
  return response
});

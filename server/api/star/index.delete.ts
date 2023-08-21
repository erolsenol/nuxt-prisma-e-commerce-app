
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

  const star = stars.remove(body.id)
  if (star) {
    response.data = star
    response.status = true
    return response
  }

  response.error = "Failed to delete like"
  return response
});

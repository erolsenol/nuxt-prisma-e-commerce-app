
import stars from "../../data/stars";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const body = await readBody(event)

  if (!body.userId || !body.productId) {
    response.error = "cannot be empty"
    return response
  }

  const oldStar = await stars.getWhere(body)
  console.log("oldStar", oldStar);

  if (oldStar) {
    stars.remove(oldStar.id)
    response.data = "star remove"
    response.status = true
    return response
  }

  const star = await stars.post(body)

  if (star.id) {
    response.data = star
    response.status = true
  } else {
    response.error = "failed to save likes"
  }

  return response
});

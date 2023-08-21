import stars from "../../data/stars";

export default defineEventHandler(async (event) => {

  let response = {
    status: false
  }
  const query = getQuery(event);

  const productId: Number = Number(query.productId || 0) as number;

  if (!productId) {
    response.error = "cannot be empty"
    return response
  }

  const star = await stars.count({ productId })

  if (star) {
    response.data = star
    response.status = true
  }

  return response
});

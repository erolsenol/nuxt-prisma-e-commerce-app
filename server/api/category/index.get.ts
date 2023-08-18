import { getCategories } from "../../data/categories";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const skip = getRouterParam(event, 'skip') || 0
  const take = getRouterParam(event, 'take') || 20

  const categories = await getCategories({ skip: Number(skip), take: Number(take) })

  if (categories) {
    response.data = categories
    response.status = true
    return response
  }
  return response
});

import { getCategories } from "../../data/categories";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  
  const skip = getRouterParam(event, 'skip') || 0
  const take = getRouterParam(event, 'take') || 20
  const all = getRouterParam(event, 'all') == "1" || false

  const paginate = {}
  if(!all) {
    paginate.skip = Number(skip)
    paginate.take = Number(take)
  }

  const categories = await getCategories(paginate)

  if (categories) {
    response.data = categories
    response.status = true
    return response
  }
  return response
});

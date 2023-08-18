import { getSubCategories } from "../../data/subCategories";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const skip = getRouterParam(event, 'skip') || 0
  const take = getRouterParam(event, 'take') || 20

  const subCategories = await getSubCategories({ skip: Number(skip), take: Number(take) })

  if (categories) {
    response.data = subCategories
    response.status = true
    return response
  }
  return response
});

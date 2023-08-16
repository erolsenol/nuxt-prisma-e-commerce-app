import { getProducts } from "../../data/products";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false
  }
  const skip = getRouterParam(event, 'skip') || 0
  const take = getRouterParam(event, 'take') || 20

  console.log("skip", skip)
  console.log("take", take)

  const products = await getProducts({ skip: Number(skip), take: Number(take) })

  console.log("products", products);

  if (products) {
    response.data = products
    response.status = true
    return response
  }
  return response
});

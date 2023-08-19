import { getProducts, countProduct } from "../../data/products";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const skip = getRouterParam(event, 'skip') || 0
  const take = getRouterParam(event, 'take') || 20

  console.log("skip", skip)
  console.log("take", take)

  const products = await getProducts({ skip: Number(skip), take: Number(take) })
  const total = await countProduct({})

  console.log("products", products);

  if (products ) {
    response.data = products
    response.paginate = {
      total: total
    }
    response.status = true
    return response
  }
  return response
});

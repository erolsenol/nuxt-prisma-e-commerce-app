import { getProducts, countProduct, getProductByName } from "../../data/products";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const query = getQuery(event);
  console.log("query",query);

  const skip: Number = Number(query.skip || 0) as number;
  const take: Number = Number(query.take || 20) as number;
  const name: String = query.name || "" as string;

  let products, total: Number

  if (!name) {
    products = await getProducts({ skip: Number(skip), take: Number(take) })
    total = await countProduct({})
  } else {
    products = await getProductByName(name)
    total = 1
  }

  if (products) {
    response.data = products
    response.paginate = {
      totalPage: Math.ceil(total / take),
      totalCount: total
    }
    response.status = true
    return response
  }
  return response
});

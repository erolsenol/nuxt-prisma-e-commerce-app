import { getProducts, countProduct, getProductByName } from "../../data/products";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const query = getQuery(event);
  console.log("query", query);

  const name: String = query.name || "" as string;

  const { paginate = "", all = "0", filter = "" } = getQuery(event)

  let allItems = all == "1"

  let filterObj = {}, paginateObj = {}

  if (filter) {
    filterObj = JSON.parse(filter)
  }
  if (paginate) {
    paginateObj = JSON.parse(paginate)
  }
  if (allItems) {
    paginateObj.take = 9999
  }

  const where: any = {}
  const keys = Object.keys(filterObj)
  keys.forEach(key => {
    if (filterObj[key]) {
      where[key] = filterObj[key]
    }
  })

  let products, total: Number

  if (!name) {
    products = await getProducts(paginateObj, where)
    total = await countProduct(where)
  } else {
    products = await getProductByName(name)
    total = 1
  }

  const currentPage = (paginateObj.skip / paginateObj.take) + 1

  if (products) {
    response.data = products
    response.paginate = {
      totalPage: Math.ceil(total / paginateObj.take),
      currentPage: currentPage,
      totalCount: total,
      take: paginateObj.take,
      skip: paginateObj.skip
    }
    response.status = true
    return response
  }
  return response
});

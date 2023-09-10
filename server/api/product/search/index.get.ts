import { getProducts, countProduct, getProductByName } from "../../../data/products";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const query = getQuery(event);
  console.log("query", query);

  const { paginate = "", general = "" } = getQuery(event)

  console.log("searchhhhh general", general);
  let paginateObj = {}

  if (paginate) {
    paginateObj = JSON.parse(paginate)
  }

  const where: any = {}
  const keys = ['name', 'name_en', 'title', 'title_en', 'content', 'content_en']
  keys.forEach(key => {
    if (key !== 'deleted') {
      where[key] = { contains: general }
    }
  })

  let products, total: Number

    products = await getProducts(paginateObj, where)
    total = await countProduct(where)

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

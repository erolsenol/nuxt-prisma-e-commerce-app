import subCategories from "../../data/subCategories";

interface response {
  data: Object[],
  paginate: Object,
  status: Boolean
}
interface paginate {
  take: Number,
  skip: Number
}

export default defineEventHandler(async (event) => {
  let response: response = {
    status: false
  }

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

  const items = await subCategories.getAll(paginateObj, where)

  let total = await subCategories.count(where)
  const currentPage = (paginateObj.skip / paginateObj.take) + 1

  if (items) {
    response.data = items
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

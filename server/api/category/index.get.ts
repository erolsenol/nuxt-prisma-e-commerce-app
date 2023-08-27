import categories from "../../data/categories";

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

  const { paginate, all = false, filter } = getQuery(event)

  const filterObj = JSON.parse(filter)
  const paginateObj = JSON.parse(paginate)

  const where: any = {}
  const keys = Object.keys(filterObj)
  keys.forEach(key => {
    if (filterObj[key]) {
      where[key] = filterObj[key]
    }
  })

  const items = await categories.getAll(paginateObj, where)

  let total = await categories.count(where)
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

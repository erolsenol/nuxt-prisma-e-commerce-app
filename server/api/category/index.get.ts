import categories from "../../data/categories";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }

  const { paginate, all = false, filter } = getQuery(event)

  const where = JSON.parse(filter)
  const paginateObj = JSON.parse(paginate)

  const items = await categories.getAll(paginateObj, where)

  let count = await categories.count(where)

  if (items) {
    response.data = items
    response.count = count
    response.status = true
    return response
  }
  return response
});

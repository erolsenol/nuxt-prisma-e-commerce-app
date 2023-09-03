import comments from "../../data/comments";

interface response {
  data?: Object;
  status: Boolean;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    status: false,
  };

  const { paginate = "", filter = "", productId = "", userId = "" } = getQuery(event)

  let paginateObj = {}, filterObj = {}

  if (paginate) {
    paginateObj = JSON.parse(paginate)
  }
  if (filter) {
    filterObj = JSON.parse(filter)
  }

  let where = {}
  const fields = ["username", "title", "content"]

  if (filterObj.deleted) {
    where.deleted = filterObj.deleted
  }
  if (filterObj.general) {
    // where["title"] = { search: filterObj.general }
    const or = []
    fields.forEach(field => {
      const obj = {}
      obj[field] = { contains: filterObj.general }
      or.push(obj)
    })
    where["OR"] = or
  }

  const currentPage = (paginateObj.skip / paginateObj.take) + 1
  let total = 0

  if (productId) {
    let items = await comments.getAll(paginateObj, { productId: Number(productId), ...where })
    total = await comments.count({ productId: Number(productId), ...where })

    response.data = items;
    response.status = true;
  } else if (userId) {
    let items = await comments.getAll(paginateObj, { userId: Number(userId) })
    total = await comments.count({ userId: Number(userId) })

    response.data = items;
    response.status = true;
  }

  if (response.status) {
    response.paginate = {
      totalPage: Math.ceil(total / paginateObj.take),
      currentPage: currentPage,
      totalCount: total,
      take: paginateObj.take,
      skip: paginateObj.skip
    }
  }

  if (!productId && !userId) {
    response.error = "not_found_comment";
    response.status = false;
  }

  return response;
});

import comments from "../../data/comments";

interface response {
  data?: Object;
  status: Boolean;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    status: false,
  };

  const { paginate = "", productId = "", userId = "" } = getQuery(event)

  let paginateObj = {}

  if (paginate) {
    paginateObj = JSON.parse(paginate)
  }

  if (productId) {
    let items = await comments.getAll(paginateObj, { productId: Number(productId) })
    let total = await comments.count({ productId: Number(productId) })
    const currentPage = (paginateObj.skip / paginateObj.take) + 1

    response.data = items;
    response.paginate = {
      totalPage: Math.ceil(total / paginateObj.take),
      currentPage: currentPage,
      totalCount: total,
      take: paginateObj.take,
      skip: paginateObj.skip
    }
    response.status = true;
  } else if (userId) {
    let items = await comments.getAll(paginateObj, { userId: Number(userId) })
    let total = await comments.count({ userId: Number(userId) })
    const currentPage = (paginateObj.skip / paginateObj.take) + 1

    response.data = items;
    response.paginate = {
      totalPage: Math.ceil(total / paginateObj.take),
      currentPage: currentPage,
      totalCount: total,
      take: paginateObj.take,
      skip: paginateObj.skip
    }
    response.status = true;
  }

  if (!productId && !userId) {
    response.error = "not_found_comment";
    response.status = false;
  }

  return response;
});

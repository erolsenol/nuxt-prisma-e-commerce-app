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
    response.data = items;
    response.status = true;
  } else if (userId) {
    let items = await comments.getAll(paginateObj, { userId: Number(userId) })
    response.data = items;
    response.status = true;
  }

  if (!productId && !userId) {
    response.error = "not_found_comment";
    response.status = false;
  }

  return response;
});

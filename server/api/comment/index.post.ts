import comment from "../../data/comments";

interface response {
  data?: Object;
  error?: String;
  status: Boolean;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    status: false,
  };

  const body = await readBody(event);

  if (!body.title || !body.content || !body.productId || !body.username) {
    response.error = "cannot be empty";
    return response;
  }

  const res = await comment.post(body);

  if (res.id) {
    response.data = res;
    response.status = true;
  }

  return response;
});

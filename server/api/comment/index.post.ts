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

  const { title, content, productId } = await readBody(event);

  // locale
  // title
  // content
  // image

  console.log("title",title);
  console.log("content",content);

  if (!title || !content || !productId) {
    response.error = "cannot be empty";
    return response;
  }

  const data = {
    title: title,
    content: content,
    productId: productId,
  };
  const res = await comment.post(data);

  if (res.id) {
    response.data = res;
    response.status = true;
  }

  return response;
});

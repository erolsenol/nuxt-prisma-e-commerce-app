import { postUser, getProductByName } from "../../data/users";
import { postImage } from "../../data/images";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false
  }
  const body = await readBody(event)

  if (!body.username || !body.password || !body.email) {
    response.error = "cannot be empty"
    return response
  }


  const nameProduct = await getProductByName(body.name)
  if (nameProduct && nameProduct.id) {
    response.error = "There is a product with the same name"
    return response
  }

  const user = await postUser(body)

  if (user.id) {
    response.data = user
    response.status = true
  }

  return response
});

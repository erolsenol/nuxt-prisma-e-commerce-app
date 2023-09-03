import { deleteProduct, getProduct } from "../../data/products";

export default defineEventHandler(async (event) => {
  let response: response = {
    data: [],
    status: false,
  };

  const body = await readBody(event)

  if (!body.id) {
    response.error = "id cannot be empty";
    return response;
  }

  const oldProduct = await getProduct(body.id)
  if (oldProduct?.id) {
    const res = await deleteProduct(body.id, !oldProduct.deleted);

    if (res) {
      response.data = res;
      response.status = true;
    }
  }



  return response;
});

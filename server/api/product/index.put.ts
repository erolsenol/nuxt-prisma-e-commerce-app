import { updateProduct, getProduct } from "../../data/products";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false,
  };
  const body = await readBody(event);

  if (!body.name || !body.title || !body.content || !body.id) {
    response.error = "cannot be empty";
    return response;
  }

  console.log("product put body", body.id);

  const nameProduct = await getProduct(body.id);
  console.log("nameProduct", nameProduct);
  console.log("nameProduct id", nameProduct.id);
  if (nameProduct?.id > -1 && false) {
    console.log("errrrrrr");
    response.error = "There is a product with the same id";
    return response;
  }

  const product = await updateProduct(body.id, { ...body });

  if (product.id) {
    response.data = product;
    response.status = true;
  }
  return response;
});

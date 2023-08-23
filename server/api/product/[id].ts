import { getProduct } from "../../data/products";
import { getImageWithProductId } from "../../data/images";

export default defineEventHandler(async (event) => {
  let response = {
    status: false,
  };
  const id: Number = parseInt(event.context.params.id) as number;

  if (!id) {
    response.error = "id cannot be empty";
    return response;
  }

  console.log("prodcut [id]");
  const product = await getProduct(id);
  console.log("product", product);
  if (product && product.id) {

    response.data = product;
    response.status = true;
    return response;
  }
  return response;
});

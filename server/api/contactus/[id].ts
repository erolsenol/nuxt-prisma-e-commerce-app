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

  
  const product = await getProduct(id);
  
  if (product && product.id) {

    response.data = product;
    response.status = true;
    return response;
  }
  return response;
});

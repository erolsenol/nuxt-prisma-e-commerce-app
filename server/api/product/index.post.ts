import { postProduct, getProductByName } from "../../data/products";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false,
  };
  const body = await readBody(event);

  if (!body.name || !body.title || !body.content) {
    response.error = "cannot be empty";
    return response;
  }

  console.log("product post body", body);

  const nameProduct = await getProductByName(body.name);
  if (nameProduct && nameProduct.id) {
    response.error = "same_name";
    return response;
  }

  const product = await postProduct({ ...body });

  if (product.id) {
    product.images = [];
    // for (let index = 0; index < body.images.length; index++) {
    //   const file = body.images[index];
    //   console.log("1111111 file",file);
    //   const imageName = body.imageNames[index];
    //   const data = {
    //     name: imageName, image: file, productId: product.id
    //   }
    //   const resImage = await postImage(data)
    //   console.log("resImage", resImage);
    //   if (resImage.id) {
    //     product.images.push(resImage)
    //   }
    // }
    response.data = product;
    response.status = true;
    return response;
  }
  return response;
});

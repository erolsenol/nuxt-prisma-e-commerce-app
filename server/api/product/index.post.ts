import { postProduct } from "../../data/products";
import { postImage } from "../../data/images";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false
  }
  const body = await readBody(event)
  const product = await postProduct({ name: body.name, title: body.title, content: body.content })

  if (product.id) {
    product.images = []
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
    response.data = product
    response.status = true
    return response
  }
  return response
});

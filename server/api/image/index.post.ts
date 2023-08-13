
import { postImage } from "../../data/images";

export default defineEventHandler(async (event) => {
  let response = {
    data: null,
    status: false
  }
  const body = await readBody(event)


  const buffer = Buffer.from(body, "utf-8")
  console.log("buffer",buffer);
  const data = {
    image: buffer
  }

  const resImage = await postImage(data)
  console.log("resImage", resImage);
  if (resImage.id) {
    response.data = resImage
    response.status = true
    return response
  }

  return response
});

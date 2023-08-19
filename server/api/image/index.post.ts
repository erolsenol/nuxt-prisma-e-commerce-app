
import { postImage } from "../../data/images";
import { deleteProduct } from "../../data/products";
import fs from "fs"
import path from "path"

const base64Replace = (str: String) => str.replace(/^data:image\/\w+;base64,/, "");

interface fileRes {
  success: Boolean;
  error?: String;
}
interface errorData {
  name: String;
  error?: String;
}

interface response {
  data: errorData[],
  status: Boolean
}

async function saveFile(filePath: String, data: String) {
  return new Promise<fileRes>((resolve, reject) => {
    fs.access(filePath, fs.constants.F_OK, (err: String) => {
      if (err) {
        fs.writeFile(filePath, data, 'base64', function (err: String) {
          if (err) {
            console.log(err);
            return resolve({ success: false, error: "There is a problem" })
          }

          console.log("The file was saved!");
          return resolve({ success: true })
        });
      } else {
        console.log('Dosya mevcut.');
        return resolve({ success: false, error: "File exists" })
      }
    });
  })
}

export default defineEventHandler(async (event) => {
  let response: response = {
    data: [],
    status: false
  }
  const body = await readBody(event)
  // console.log("body",body);

  const writePath = body.path || false

  for (let index = 0; index < body.images.length; index++) {
    const image = body.images[index];
    const data = base64Replace(image.image)

    const dir = process.cwd();

    let filePath = null
    if(writePath) {
      filePath = `${dir}/public/images/${writePath}${image.name}`
    }else {
      filePath = `${dir}/public/images/${image.name}`
    }

    const res = await saveFile(filePath, data)
    if (res.success) {
      const imageData = {
        path: filePath,
        name: image.name,
        productId: body.productId
      }
      const imgRes = await postImage(imageData)
      if (imgRes.id) {
        response.data.push(imgRes)
      }else {
        const errData: errorData = { name: image.name, error: "failed to write to image database" }
        response.data.push(errData)
      }
    } else {
      const errData: errorData = { name: image.name, error: "could not write to image files" }
      response.data.push(errData)
    }
  }
  if (response.data.length > 0) {
    response.status = true
    return response
  }
  await deleteProduct(body.productId)
  return response
});

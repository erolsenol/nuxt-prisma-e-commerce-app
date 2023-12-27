import { postImage, getImageWhere } from "../../data/images";
import { deleteProduct } from "../../data/products";
import fs from "fs";
import path from "path";

import { createFolder, fileExists, writeFile } from "../../utils/utils";

const base64Replace = (str: String) =>
  str.replace(/^data:image\/\w+;base64,/, "");

interface errorData {
  name: String;
  error?: String;
}

interface response {
  data: errorData[];
  status: Boolean;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    data: [],
    status: false,
  };
  let innerStatus = true;
  const body = await readBody(event);

  if (!body.images || body.images.length < 1) {
    response.error = "cannot be empty";
    return response;
  }

  const writePath = body.path || false;

  for (let index = 0; index < body.images.length; index++) {
    const image = body.images[index];
    const data = base64Replace(image.image);

    const dir = process.cwd().replaceAll("\\", "/");

    console.log("image.name1", image.name);

    if (await getImageWhere({ name: image.name })) {
      const dotIndex = image.name.indexOf(".");
      if (dotIndex > -1) {
        image.name = image.name.replace(".", `${Date.now()}.`);
      } else {
        image.name = `${image.name}${Date.now()}`;
      }
    }
    console.log("new image name", image.name);

    // let filePath = null;
    // if (writePath) {
    //   filePath = `${dir}/public/images/${writePath}${image.name}`;
    // } else {
    //   filePath = `${dir}/public/images/${image.name}`;
    // }

    // let prefix = "";

    // while (await fileExists(filePath.replace(".", prefix + "."))) {
    //   prefix += "0";
    // }

    // await createFolder(filePath);

    const res = await writeFile(encodeURIComponent(image.name), data);

    console.log("aws s3 response:", res);
    if (res) {
      const imageData = {
        url: encodeURIComponent(image.name),
        name: image.name,
      };
      if (body.ownerName) {
        if (body.ownerId) {
          imageData[body.ownerName] = body.ownerId;
        } else {
          imageData.ownerName = body.ownerName;
        }
      }

      console.log("postImage", imageData);
      const imgRes = await postImage(imageData);
      console.log("imgRes", imgRes);
      if (imgRes.id) {
        response.data.push(imgRes);
      } else {
        const errData: errorData = {
          name: image.name,
          error: "failed to write to image database",
        };
        response.data.push(errData);
      }
    } else {
      innerStatus = false;
      const errData: errorData = {
        name: image.name,
        error: "could not write to image files",
      };
      response.data.push(errData);
    }
  }
  if (response.data.length > 0) {
    response.status = innerStatus;
    return response;
  }
  await deleteProduct(body.productId);
  return response;
});

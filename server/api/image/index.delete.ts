import { deleteImage, getImage } from "../../data/images";
import { deleteProduct } from "../../data/products";
import fs from "fs";
import path from "path";

const base64Replace = (str: String) =>
  str.replace(/^data:image\/\w+;base64,/, "");

interface fileRes {
  success: Boolean;
  error?: String;
}
interface errorData {
  name: String;
  error?: String;
}

interface response {
  data: errorData[];
  status: Boolean;
}

async function deleteFile(filePath: String) {
  return new Promise<fileRes>((resolve, reject) => {
    fs.access(filePath, fs.constants.F_OK, async (err: String) => {
      if (err) {
        console.log("Dosya bulunamadı.");
        return resolve({ success: false, error: "File not found" });
      } else {
        await fs.unlinkSync(filePath);
        return resolve({ success: true });
      }
    });
  });
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const id: Number = Number(query.id) as number;

  let response: response = {
    data: [],
    status: false,
  };

  if (!id) {
    response.error = "id cannot be empty";
    return response;
  }

  console.log(id,typeof id);
  const image = await getImage(id);

  if (!image.id) {
    response.error = "image not found";
    return response;
  }

  const dir = process.cwd();

  const filePath = `${dir}/public/images/${image.name}`;

  const res = await deleteFile(filePath);
  console.log("delete file:", res);
  if (res.success) {
    const imgRes = await deleteImage(id);
    console.log("delete response:", imgRes);
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
    const errData: errorData = {
      name: image.name,
      error: "image could not be deleted",
    };
    response.data.push(errData);
  }

  if (response.data.length > 0) {
    response.status = true;
    return response;
  }

  return response;
});

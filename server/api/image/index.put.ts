import { postImage, getImageWhere, updateImage, getImageOwnerName } from "../../data/images";
import fs from "fs";
import path from "path";

const base64Replace = (str: String) =>
  str.replace(/^data:image\/\w+;base64,/, "");

interface fileRes {
  success: Boolean;
  path?: String;
  name?: String;
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

function fileExists(path: String) {
  return new Promise<Boolean>((resolve, reject) => {
    fs.access(path, fs.constants.F_OK, async (err: String) => {
      if (err) {
        return resolve(false);
      } else {
        return resolve(true);
      }
    });
  });
}

async function createFolder(path: string) {
  return new Promise<boolean>((resolve, reject) => {

    console.log("object", path);

    const pathArr = path.split("/")

    console.log("pathArr", pathArr);

    let strPath = ``
    for (let index = 1; index < pathArr.length - 1; index++) {
      const pathStr = pathArr[index];

      strPath += `/${pathStr}`

      console.log("strPath", strPath);

      if (!fs.existsSync(strPath)) {
        fs.mkdirSync(strPath);
      }
    }

    resolve(true)
  })
}

function writeFile(
  filePath: String,
  name: String,
  data: String,
  dataType = "base64"
) {
  return new Promise<fileRes>((resolve, reject) => {
    fs.writeFile(filePath, data, dataType, function (err: String) {
      if (err) {
        console.log(err);
        return resolve({ success: false, error: "There is a problem" });
      }

      console.log("The file was saved!");
      return resolve({ success: true, path: filePath, name: name });
    });
  });
}

export default defineEventHandler(async (event) => {
  let response: response = {
    data: [],
    status: false,
  };
  const body = await readBody(event);

  if (!body.images || body.images.length < 1) {
    response.error = "cannot be empty";
    return response;
  }

  const writePath = body.path || false;

  for (let index = 0; index < body.images.length; index++) {
    const image = body.images[index];
    const data = base64Replace(image.image);

    const dir = process.cwd();

    console.log("image.name1", image.name);

    let filePath = null;
    if (writePath) {
      filePath = `${dir}/public/images/${writePath}${image.name}`;
    } else {
      filePath = `${dir}/public/images/${image.name}`;
    }

    let prefix = "";

    while (await fileExists(filePath.replace(".", prefix + "."))) {
      prefix += "0";
    }

    await createFolder(filePath)

    const res = await writeFile(
      filePath.replace(".", prefix + "."),
      image.name.replace(".", prefix + "."),
      data
    );

    if (res.success) {
      const imageData = {
        path: res.path,
        ownerName: image.ownerName,
        name: res.name,
      };
      if (body.ownerName) {
        imageData[body.ownerName] = body.ownerId;
      }

      const oldImage = await getImageOwnerName(image.ownerName)
      if (oldImage && oldImage.length > 0) {

        const update = await updateImage(oldImage[0].id, { ...imageData })
        if (update) {
          response.data.push(update);
        } else {
          const errData: errorData = {
            name: image.name,
            error: "failed to write to image database",
          };
          response.data.push(errData);
        }
      } else {
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
      }


    } else {
      const errData: errorData = {
        name: image.name,
        error: "could not write to image files",
      };
      response.data.push(errData);
    }
  }
  if (response.data.length > 0) {
    response.status = true;
    return response;
  }

  return response;
});

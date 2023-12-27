import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs";
import nodemailer from "nodemailer";

import { AwsS3Client } from "./aws";

const S3Client = new AwsS3Client();

export async function bcryptPassword(pass: string) {
  return await bcrypt.hash(pass, 10);
}

export function createJwt(data: object) {
  console.log("process.env.TOKEN_KEY", process.env.TOKEN_KEY);
  const token = jwt.sign(data, process.env.TOKEN_KEY, { expiresIn: "2h" });

  return token;
}

interface paginate {
  take: number;
  skip: number;
}

export function definePaginate(paginate: paginate, total: number) {
  return {
    totalPage: Math.ceil(total / paginate.take),
    currentPage: paginate.skip / paginate.take + 1,
    totalCount: total,
    take: paginate.take,
    skip: paginate.skip,
  };
}

interface fileRes {
  success: Boolean;
  path?: String;
  name?: String;
  error?: String;
}

export async function createFolder(path: string) {
  return new Promise<boolean>((resolve, reject) => {
    console.log("createFolder", path);
    const pathArr = path.replaceAll("\\", "/").split("/");

    console.log("createFolder pathArr", pathArr);
    let strPath = ``;
    for (let index = 1; index < pathArr.length - 1; index++) {
      const pathStr = pathArr[index];

      strPath += `/${pathStr}`;

      if (!fs.existsSync(strPath)) {
        fs.mkdirSync(strPath);
      }
    }

    resolve(true);
  });
}

export function fileExists(path: string) {
  return new Promise<Boolean>((resolve, reject) => {
    fs.access(path, fs.constants.F_OK, (err) => {
      if (err) {
        return resolve(false);
      }
      return resolve(true);
    });
  });
}

function base64ToArrayBuffer(base64) {
  var binaryString = atob(base64);
  var bytes = new Uint8Array(binaryString.length);
  for (var i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

const baseMail = process.env.MAIL_USER;
const baseMailPassword = process.env.MAIL_PASSWORD;

export function writeFile(name: string, data: string) {
  return new Promise<boolean>(async (resolve, reject) => {
    console.log("name", name);

    const response = await S3Client.uploadImage({
      body: base64ToArrayBuffer(data),
      key: name,
    });

    if (response.$metadata.httpStatusCode === 200) {
      return resolve(true);
    }
    return resolve(false);

    // fs.writeFile(filePath, data, dataType, function (err) {
    //   if (err) {
    //     console.log(err);
    //     return resolve({ success: false, error: "There is a problem" });
    //   }

    //   console.log("The file was saved!");
    //   return resolve({ success: true, path: filePath, name: name });
    // });
  });
}

export async function sendMail({ subject = null, text = null, toMail = null }) {
  return new Promise<Boolean>((resolve, reject) => {
    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: baseMail,
          pass: baseMailPassword,
        },
      });

      let mailOptions = {
        from: baseMail,
        to: toMail,
        subject: subject,
        text: text,
        // attachments: [{ filename: "pic-1.jpeg", path: "./attachments/pic-1.jpeg" }],
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          return resolve(false);
        } else {
          console.log("Email sent: " + info.response);
          return resolve(true);
        }
      });
    } catch (error) {
      reject(false);
    }
  });
}

//   export async function saveFile(filePath: string, name: string, data: string) {
//     return new Promise<fileRes>(async (resolve, reject) => {
//       fs.access(filePath, fs.constants.F_OK, async (err: string) => {
//         if (err) {
//           return resolve(await writeFile(filePath, data, name));
//         } else {
//           return resolve(
//             await writeFile(
//               filePath.replace(".", "0."),
//               data,
//               name.replace(".", "0.")
//             )
//           );

//           // console.log('Dosya mevcut.');
//           // return resolve({ success: false, error: "File exists" })
//         }
//       });
//     });
//   }

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs";
import nodemailer from "nodemailer";

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
    const pathArr = path.split("/");

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
    fs.access(path, fs.constants.F_OK, function (err: string) {
      if (err) {
        return resolve(false);
      } else {
        return resolve(true);
      }
    });
  });
}

const baseMail = process.env.MAIL_USER
const baseMailPassword = process.env.MAIL_PASSWORD

export function writeFile(
  filePath: string,
  name: string,
  data: string,
  dataType: string = "base64"
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

export async function sendMail({ subject = null, text = null, toMail = null }) {
  return new Promise<Boolean>((resolve, reject) => {
    try {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: baseMail,
          pass: baseMailPassword
        }
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
          return resolve(false)
        } else {
          console.log('Email sent: ' + info.response);
          return resolve(true)
        }
      });
    } catch (error) {
      reject(false)
    }

  })
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

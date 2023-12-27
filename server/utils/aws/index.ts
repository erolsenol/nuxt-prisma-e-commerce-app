import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandOutput,
} from "@aws-sdk/client-s3";

const accessKeyId = process.env.AWS_ACCESS || "";
const secretAccessKey = process.env.AWS_SECRET || "";
const region = process.env.AWS_REGION_KEY || "";
const bucketName = process.env.AWS_BUCKET_NAME || "";

const params = {
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
};

export class AwsS3Client {
  instance: S3Client;
  constructor() {
    const client = new S3Client(params);
    this.instance = client;
  }
  async uploadImage({ body, key }: UploadImageData) {
    return new Promise<PutObjectCommandOutput>(async (resolve, reject) => {
      const putObjectCommand = new PutObjectCommand({
        Bucket: bucketName,
        Body: body,
        Key: `images/${key}`,
      });

      try {
        const response = await this.instance.send(putObjectCommand);
        return resolve(response);
      } catch (error) {
        return reject();
      }
    });
  }
}

interface UploadImageData {
  body: any;
  key: string;
}

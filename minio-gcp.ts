import * as Minio from "minio";
import "dotenv/config";

const minioClient = new Minio.Client({
  endPoint: "storage.googleapis.com",
  port: 443,
  useSSL: true,
  accessKey: `${process.env.S3_ACCESS_KEY}`,
  secretKey: `${process.env.S3_SECRET_KEY}`,
});

//console.log(minioClient);
const bucket = "selfhosted-bucket-vfx57";
const exists = await minioClient.bucketExists(bucket);
console.log(exists);

// Set the object metadata
var metaData = {
  "Content-Type": "text/plain",
  "X-Amz-Meta-Testing": 1234,
  example: 5678,
};

// Upload the file with fPutObject
// If an object with the same name exists,
// it is updated with new data
await minioClient.fPutObject(bucket, "testfile", "./tesfile", metaData);

const files = await minioClient.listObjects(bucket);
console.log(files);

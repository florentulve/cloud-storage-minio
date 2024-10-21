// Imports the Google Cloud client library
import "dotenv/config";

// https://googleapis.dev/nodejs/storage/latest/

import { Storage } from "@google-cloud/storage";

const bucketName = "vfx57";

const storage = new Storage({
  apiEndpoint: "http://localhost:8080",
  projectId: "vfx57",
});

async function createBucket() {
  // Creates the new bucket
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}

createBucket().catch(console.error);

async function uploadFile() {
  const options = {
    destination: "tesfile",
  };

  await storage.bucket(bucketName).upload("./tesfile", options);
  //console.log(`${filePath} uploaded to ${bucketName}`);
}

uploadFile().catch(console.error);

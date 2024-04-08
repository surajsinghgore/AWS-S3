var express = require("express");
var router = express.Router();

const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3");

//1.2 configure s3 client
const s3Client = new S3Client({
  region: "us-east-1", //region of bucket
  credentials: {
    //create user using iam in aws with permission of s3full
    accessKeyId: process.env.AWS_ACCESSKEYID,
    secretAccessKey: process.env.AWS_SECRETACCESSKEY,
  },
});

// getting all objects from aws to client
async function listAllObjects() {
  const command = new ListObjectsV2Command({
    Bucket: process.env.AWS_BUCKETNAME,
    Key: "/", //Which location wanted to search
  });
  // sending request to aws s3 to get all objects
  const result = await s3Client.send(command);
  return result;
}

router.get("/", async function (req, res) {
  // calling function to get all files
  let allrecords = await listAllObjects();

  return res.status(200).send(allrecords);
});

module.exports = router;

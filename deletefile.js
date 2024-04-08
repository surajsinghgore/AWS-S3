var express = require("express");
var router = express.Router();

const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3");

//1.2 configure s3 client
const s3Client = new S3Client({
  region: "us-east-1", //region of bucket
  credentials: {
    //create user using iam in aws with permission of s3full
    accessKeyId: process.env.AWS_ACCESSKEYID,
    secretAccessKey: process.env.AWS_SECRETACCESSKEY,
  },
});

// delete objects from aws to client
async function deleteObjectCommand(fileToDelete) {
  const command = new DeleteObjectCommand({
    Bucket: process.env.AWS_BUCKETNAME,
    Key: fileToDelete, //name file which wanted to delete
  });
  // sending request to aws s3 to get all objects
  const result = await s3Client.send(command);
  return result;
}

router.get("/", async function (req, res) {
  // calling function to get delete files
  let fileToDelete="Profile/c1ce89b663e0b9d3e761a3779af754f6IMG20230911155828.jpg";
  let allrecords = await deleteObjectCommand(fileToDelete);

  return res.status(200).send(allrecords);
});

module.exports = router;

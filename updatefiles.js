var express = require("express");
var router = express.Router();
const multer = require("multer");
const crypto = require("crypto");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

//1.2 configure s3 client
const s3Client = new S3Client({
  region: "us-east-1", //region of bucket
  credentials: {
    //create user using iam in aws with permission of s3full
    accessKeyId: process.env.AWS_ACCESSKEYID,
    secretAccessKey: process.env.AWS_SECRETACCESSKEY,
  },
});

// multer gets files
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG , PNG , JPEG Images are Allowed To Upload"));
  }
};
//   file size error
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});



// sending objects function
async function putObjectToCloud(oldFileName,ImageGetFromClient,fileType) {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKETNAME,
    Key: oldFileName,
    Body: ImageGetFromClient,
    ContentType: fileType,
  });
  // sending request to aws s3 to get all objects
  const result = await s3Client.send(command);
 
  return result;
}
router.post("/", upload.single("Profile"), async function (req, res) {
  // get file buffer
  let ImageGetFromClient = req.file.buffer;
  // old file name to update
  let oldFileName ="Profile/20ac4e2c078407bf1323619cfa76f6dcIMG20230911162858.jpg";

  // get content type of file
  let fileType = req.file.mimetype;

  // sending to aws bucket
 await putObjectToCloud(oldFileName,ImageGetFromClient,fileType);
  return res.status(200).send("successfully file uploaded");
});

module.exports = router;

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

router.post("/", upload.single("Profile"), async function (req, res) {
  // get file buffer
  let ImageGetFromClient = req.file.buffer;
  // generate random name of object
  let randomImageNameGen =
    crypto.randomBytes(16).toString("hex") + req.file.originalname;
  // get content type of file
  let fileType = req.file.mimetype;
  // confirm bucket details
  const params = {
    Bucket: process.env.AWS_BUCKETNAME,
    Key: `Profile/${randomImageNameGen}`,
    Body: ImageGetFromClient,
    ContentType: fileType,
  };

  // sending to aws bucket
  await s3Client.send(new PutObjectCommand(params));
  return res.status(200).send("successfully file uploaded");
});

module.exports = router;

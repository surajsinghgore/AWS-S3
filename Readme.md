
# AWS S3

Amazon Simple Storage Service (Amazon S3) is a scalable object storage service offered by Amazon Web Services (AWS). It allows users to store and retrieve any amount of data from anywhere on the web.

![Logo](https://tse3.mm.bing.net/th?id=OIP.wpfti_sRSXAyNs0ivZGtqQHaCj&pid=Api&P=0&h=180)


## How to create s3 Bucket

1.Search S3 in Aws console Account

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712634804/aws/s3/igdenowqeoyp4bdtefv3.png)

2.click on create bucket option

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712634910/aws/s3/etlpgv4xf0jewfsdchbn.png)


3.Give globally unique name of your bucket

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635034/aws/s3/y1mz2wuxtdl4cpai5n3q.png)


4.click on create Bucket Button

5.You Have Successfully created you bucket on AWS S3

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635172/aws/s3/norrjsvvpc16tsvkiqom.png)



#
# Create a user to grant access to a private S3 bucket

1.Search for IAM in Aws console Account

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635630/aws/s3/ciw17qhvyxhkzrp6tb5u.png)

2.click on Users in IAM dashboard

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635718/aws/s3/k2xlbqniul9fzejvf7k5.png)


3.click on create user

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635798/aws/s3/t7pmg4hfrj0wwsu4gej4.png)


4.enter user name and click on next

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712635884/aws/s3/cilbdp1ortsrsqiizwzq.png)



5.Now create user to set permission

5.1 Select add user to group option

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636126/aws/s3/zbkxcn3cwgengbdm1806.png)

5.2 Click on create group

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636189/aws/s3/tk0wpj86um3ixqw4igqm.png)

5.3 Name the group and search for "AmazonS3FullAccess," then select it and click on Create user group

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636308/aws/s3/jhlnitj0xiqapi0xkeaz.png)


5.4 Now select User groups to s3fullaccess and click next

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636509/aws/s3/eeu0bttdtyuhxvbhisnv.png)

5.5 Now click on create user

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636591/aws/s3/gystogpufi1w2msdzmz2.png)

5.6 Now  User Successfully created with s3 permission

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712636591/aws/s3/gystogpufi1w2msdzmz2.png)


#
6.Now generate AWS ID AND KEY of user to access AWS

6.1 Double click to user to generate secret key

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712637105/aws/s3/msggj6jcgr6z3ybteuct.png)

6.2 select security credentials option 

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712637216/aws/s3/jpfpqlrfat1qsjicbcsk.png)

6.3 click on create access key button

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712637308/aws/s3/rbxoauyxjmdfpkrqqxwx.png)


6.4 Now, select the Command Line Interface (CLI), choose the Confirmation box option, and then click 'Next'.

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712637376/aws/s3/sthkytu8bj6cvzwluy7q.png)

6.5 Now you can leave description option and click on create create access key

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712637539/aws/s3/tfuzdhusleb8asifwjcl.png)

6.6 Now  User Successfully created AWS Access key and Secret access key

![IMAGE](https://res.cloudinary.com/dnxv21hr0/image/upload/v1712637680/aws/s3/epttoagh7uyihawcooiq.png)

6.7 Copy and paste credentials in .env file 


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `AWS_ACCESSKEYID` | `string` | **Required**. Your AWS Access key |
| `AWS_SECRETACCESSKEY` | `string` | **Required**. Your AWS Secret access key |

## Install NPM packages

1.Install s3 client package

npm
```bash
 npm install @aws-sdk/client-s3
```
yarn
```bash
 yarn add @aws-sdk/client-s3
```
pnpm

```bash
pnpm install @aws-sdk/client-s3
```


2.Install s3 presigner

npm
```bash
 npm install @aws-sdk/s3-request-presigner
```
yarn
```bash
yarn add @aws-sdk/s3-request-presigner
```
pnpm

```bash
 pnpm install @aws-sdk/s3-request-presigner
```


## Packages 


```bash
npm i @aws-sdk/client-s3

npm i @aws-sdk/s3-request-presigner

npm i dotenv

npm i express

npm i multer


```

## ENV Variables

.env
```bash
AWS_ACCESSKEYID=***

AWS_SECRETACCESSKEY=***

AWS_BUCKETNAME=***

```

## Basic Express App Setup
```bash

const express = require('express')
const app = express()
const port = 3000
const dotenv=require('dotenv');
//dotenv setup
dotenv.config({});


// aws 
app.get('/', (req, res) => {

    res.send('Hello World!')
})


// getting particular filename from s3 bucket in private access
// api path=> http://localhost:3000/getparticularobject
app.use('/getparticularobject', require('./getparticularobject.js'));

// post files to s3 bucket in private access
// POST api path=> http://localhost:3000/posttobucket
app.use('/posttobucket', require('./posttobucket.js'));

// get all files from s3 bucket in private access
// get api path=> http://localhost:3000/posttobucket
app.use('/getallfiles', require('./getallfiles.js'));

// delete files
app.use('/deletefile', require('./deletefile.js'));


// update files
app.use('/updatefiles', require('./updatefiles.js'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

## GET PARTICULAR OBJECT FROM S3 BUCKET 
./getparticularobject.js FILE
```bash
var express = require('express')
var router = express.Router()
// 1.1 install the below packages
const {S3Client,GetObjectCommand}=require('@aws-sdk/client-s3');
const {getSignedUrl}=require('@aws-sdk/s3-request-presigner');



//1.2 configure s3 client 
const s3Client=new S3Client({
  region:'us-east-1',  //region of bucket
  credentials:{ //create user using iam in aws with permission of s3full 
      accessKeyId:process.env.AWS_ACCESSKEYID,
      secretAccessKey:process.env.AWS_SECRETACCESSKEY,
  }
})

// getting url from aws to client
async function getObjectURL(objectNameToGet){
  const command=new GetObjectCommand({
  Bucket:process.env.AWS_BUCKETNAME,
  Key:objectNameToGet
  });
// sending request to aws s3 to get url
  const url=await getSignedUrl(s3Client,command);
  return url;
}

router.get('/', async function(req, res){
// calling getObjectURL function with filename which wanted to view 
let filename="IMG20230910203409.jpg";
  let url=await getObjectURL(filename);
  console.log(url);
  return res.status(200).send(url);
});


module.exports = router;

```


## GET ALL OBJECTS FROM AWS S3 BUCKET
./getallfiles.js FILE

```bash

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

```


## POST OBJECTS TO AWS S3 BUCKET
./posttobucket.js FILE

```bash
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
async function putObjectToCloud(filename,ImageGetFromClient,fileType) {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKETNAME,
    Key: filename,
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
  // generate random name of object
  let randomImageNameGen =
    crypto.randomBytes(16).toString("hex") + req.file.originalname;
  // get content type of file
  let fileType = req.file.mimetype;

  // sending to aws bucket
 await putObjectToCloud(`Profile/${randomImageNameGen}`,ImageGetFromClient,fileType);
  return res.status(200).send("successfully file uploaded");
});

module.exports = router;


```


## DELETE OBJECTS FROM AWS S3 BUCKET
./deletefile.js FILE


```bash 
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


```



## UPDATE OBJECTS TO AWS S3 BUCKET
./updatefiles.js FILE

```bash
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


```
## Authors

- [@surajsingh](https://surajsingh.online)


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

const express = require('express')
const app = express()
const port = 3000
const dotenv=require('dotenv');

dotenv.config({});

app.get('/', (req, res) => {
  console.log(process.env.AWS_ACCESSKEYID);
    res.send('Hello World!')
})

// getting particular filename from s3 bucket in private acces

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
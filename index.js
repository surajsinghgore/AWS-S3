
const express = require('express')
const app = express()
const port = 3000
const dotenv=require('dotenv');





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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
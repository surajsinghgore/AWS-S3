
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('this is test router')
})



app.listen(process.env.PORT || 5000, function () {
  return console.log(`Server is running on ${process.env.PORT || 5000}`)
})


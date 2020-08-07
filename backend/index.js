const express = require('express')
const bodyParser = require('body-parser')
const axiosRoute = require('./routes/axiosRoute')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/avios-db',{
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true
})
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())
app.use(express.json())

const port = process.env.PORT || 3000
app.use(axiosRoute)

app.listen(port,()=>{
    console.log(`Server Started on port ${port}`)
})
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'


import nguoiDungRouter from './routers/nguoiDungRouter.js'

const app = express()
const port = 3000
const databaseURL = 'mongodb+srv://nhannbt:nhanne@cluster0-hw1yh.mongodb.net/dbYoKaFo?retryWrites=true&w=majority'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

mongoose
.connect(databaseURL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Đã kết nối đến MongoDb')
})
.catch(error =>{
    console.log('Lỗi kết nối đến database\n'+error)
})

//cài đặt điều hướng
app.use('/nguoiDung/',nguoiDungRouter)


app.listen(port,(req,res)=>{
    console.log(`Đang chạy trên port ${port}`)
})

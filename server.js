<<<<<<< Updated upstream
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'


import nguoiDungRouter from './routers/nguoiDungRouter.js'

const app = express()
const port = 3000
const databaseURL = 'mongodb+srv://nhannbt:nhanne@cluster0-hw1yh.mongodb.net/dbYoKaFo?retryWrites=true&w=majority'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
=======
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import http from "http";
import {Server} from 'socket.io';
import TinNhan from './models/tinNhan.js'

const port = 3000;
const app = express();
const server = app.listen(port,()=>{
  console.log('Ok')
})

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`connect ${socket.id}`);

  // socket.on("guiThongBao", (cb) => {
  //   console.log("ping");
  socket.on("testab",(hihi)=>{
    console.log("kkkkk")
  })
  TinNhan.watch().on('change',(change)=>{
    console.log('Something has changed')
    // io.to(change.fullDocument._id).emit('changes',change.fullDocument)
    io.emit("thongBao",change.fullDocument)
})
  
   
  // });

  socket.on("disconnect", () => {
    console.log(`disconnect ${socket.id}`);
  });
});




import nguoiDungRouter from "./routers/nguoiDungRouter.js";
import matHangRouter from "./routers/matHangRouter.js";
import tinNhanRouter from "./routers/tinNhanRouter.js";
import baiVietRouter from "./routers/baiVietRouter.js";
import binhLuanRouter from "./routers/binhLuanRouter.js";



// io.on('connection', () => { /* … */ });


const databaseURL =
  "mongodb+srv://nhannbt:nhanne@cluster0-hw1yh.mongodb.net/dbYoKaFo?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//cài đặt điều hướng
app.use("/nguoiDung/", nguoiDungRouter);
app.use("/matHang", matHangRouter);
app.use("/tinNhan/", tinNhanRouter);
app.use("/baiViet/",baiVietRouter );
app.use("/binhLuan/",binhLuanRouter );
>>>>>>> Stashed changes

mongoose
<<<<<<< Updated upstream
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
=======
  .connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Đã kết nối đến MongoDb");
  })
  .catch((error) => {
    console.log("Lỗi kết nối đến database\n" + error);
  });

export default server

>>>>>>> Stashed changes

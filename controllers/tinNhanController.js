import TinNhan from '../models/tinNhan.js'
import mongoose from 'mongoose';

export async function nhanTin(req,res){
    const tinNhan = new TinNhan(req.body)
    try {
        await tinNhan.save()
        res.send(tinNhan);
        console.log('Đã tạo tin nhắn mới')
    } catch (error) {
        res.send(error.message)
        console.log('Lỗi')
    }
    
}
export async function danhSachTinNhan(req,res){
    await TinNhan.find().then((result) => {
      res.send(result)
      console.log('Danh sách tin nhắn')
    }).catch((err) => {
      res.send('Lỗi lấy danh sách tin nhắn')
    });
  }

export async function danhSachLienHe(req,res){
  const idNguoiDung = mongoose.Types.ObjectId(req.params.id)
  // const list = await TinNhan.aggregate([
  //   { $match: { $or: [ { idNguoiGui: idNguoiDung }, { idNguoiNhan: idNguoiDung } ] } },
  //   { $group: { _id: { "nguoiGui":"$idNguoiGui","nguoiNhan":"$idNguoiNhan"} } },    
  // ] )
  
  // res.send(list)
  await TinNhan.find({ $or: [ { idNguoiGui: idNguoiDung }, { idNguoiNhan: idNguoiDung } ] }).then((result) => {
    res.send(result)
    console.log('Danh sách liên hệ')
  }).catch((err) => {
    res.send('Lỗi lấy danh sách tin nhắn')
  });

  
  
}
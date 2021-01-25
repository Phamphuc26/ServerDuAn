import NguoiDung from "../models/nguoiDung.js";

export async function dangKy(req, res) {
  const nguoiDungMoi = new NguoiDung(req.body);
  try {
    if (await NguoiDung.findOne({ email: req.body.email })) {
      res.send("Email này đã được đăng ký !");
    } else {
      await nguoiDungMoi.save();
      res.send({
        thongBao: `Đăng ký thành công với email ${req.body.email}`,
      });
      console.log(nguoiDungMoi);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
}

export async function danhSachNguoiDung(req,res){

  await NguoiDung.find().then(async(nguoiDung) => {
    if(nguoiDung){
      res.send(nguoiDung)
    }else{
      res.send('Người dùng không tồn tại')
    }
   
  }).catch((err) => {
    res.send('Lỗi lấy danh sách người dùng')
  });
}

import NguoiDung from "../models/nguoiDung.js";
import BaiViet from "../models/baiViet.js";

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

export async function dangNhap(req, res) {
  const {sdt,matKhau} = req.body
  try {
    const nguoiDung = await NguoiDung.findOne({sdt : sdt})
    if (nguoiDung) {
      if(matKhau == nguoiDung.matKhau){
        res.send({
          thongBao: `Đăng nhập thành công !`,
        });
      }else if(matKhau != nguoiDung.matKhau){
        res.send({
          thongBao: `Sai mật khẩu !`,
        });
      }
    } else {
      res.send({
        thongBao: `Tài khoản không tồn tại !`,
      });
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
export async function xemTrangCaNhan(req, res) {
  try {
    const nguoiDung = await NguoiDung.findById(req.params.id);
    if(nguoiDung){
      const danhSach = await BaiViet.find({idNguoiDung: req.params.id, trangThai: true}).populate('idNguoiDung','hoTen');
      if (danhSach.length <= 0){
        res.send({thongBao: "Người dùng này chưa có bài viết nào"})
      } else {
        res.send({
          danhSachBaiViet: danhSach
        })
      }
    }else{
        res.send({thongBao : "Không tìm thấy người dùng"})
    }
  } catch (error) {
    console.log(error)
  }
}

export async function theoDoi(req, res) {
  // console.log(req.params.idNguoi1)
  // console.log(req.query.idNguoi1)
  console.log(req.body.idNguoi1)
  console.log(req.body.idNguoi2)

  try {
    const nguoiTheoDoi = await NguoiDung.findById(req.body.idNguoi1);
    const nguoiDuocTheoDoi = await NguoiDung.findById(req.body.idNguoi2);
    if(nguoiTheoDoi){
      console.log(`Người theo dõi :${nguoiTheoDoi.hoTen}`)
      if(nguoiDuocTheoDoi){
        console.log(`Người theo dõi :${nguoiDuocTheoDoi.hoTen}`)
        await NguoiDung.updateOne({_id : nguoiTheoDoi._id},{$push : {dangTheoDoi : nguoiDuocTheoDoi}});
        await NguoiDung.updateOne({_id : nguoiDuocTheoDoi._id},{$push : {duocTheoDoi : nguoiTheoDoi}});
        res.send({thongBao : `Theo dõi thành công ${nguoiDuocTheoDoi.hoTen}`})
      }
      else{
        console.log('Không tìm thấy người được theo dõi')
      }
    }else{
      console.log('Không tìm thấy người theo dõi')
    }
  } catch (error) {
    console.log(error)
  }

}

export async function huyTheoDoi(req, res) {
  // console.log(req.params.idNguoi1)
  // console.log(req.query.idNguoi1)
  console.log(req.body.idNguoi1)
  console.log(req.body.idNguoi2)

  try {
    const nguoiTheoDoi = await NguoiDung.findById(req.body.idNguoi1);
    const nguoiDuocTheoDoi = await NguoiDung.findById(req.body.idNguoi2);
    if(nguoiTheoDoi){
      console.log(`Người theo dõi :${nguoiTheoDoi.dangTheoDoi}`)
      if(nguoiDuocTheoDoi){
        console.log(`Người theo dõi :${nguoiDuocTheoDoi.hoTen}`)
        await NguoiDung.updateOne({_id : nguoiTheoDoi._id},{$pull : {dangTheoDoi : nguoiDuocTheoDoi._id}});
        await NguoiDung.updateOne({_id : nguoiDuocTheoDoi._id},{$pull : {duocTheoDoi : nguoiTheoDoi._id}});
        res.send({thongBao : `Hủy theo dõi thành công ${nguoiDuocTheoDoi.hoTen}`})
      }
      else{
        console.log('Không tìm thấy người được theo dõi')
      }
    }else{
      console.log('Không tìm thấy người theo dõi')
    }
  } catch (error) {
    console.log(error)
  }

}
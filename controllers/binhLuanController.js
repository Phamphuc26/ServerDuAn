import BinhLuan from "../models/binhLuan.js";
import BaiViet from "../models/baiViet.js";

export async function binhLuan(req, res) {
  const {idNguoiDung,idBaiViet,noiDung} = req.body
  const binhLuan = new BinhLuan({idNguoiDung : idNguoiDung,noiDung : noiDung});
  try {
    await binhLuan.save();
    await BaiViet.updateOne({_id : idBaiViet},{$push : {binhLuan : binhLuan}})
    res.send({ thongBao: "Bình luận thành công !" });
    console.log("Bình luận thành công !");
  } catch (error) {
    res.send({ thongBao: "Bình luận không thành công !" });
    console.log("Bình luận không thành công !");
  }
}

export async function danhSachBinhLuan(req, res) {
    
  await BinhLuan.find().then((result) => {
      res.send(result);
      console.log("Danh sách bình luận");
    })
    .catch((err) => {
        res.send({thongBao : 'Lỗi lấy danh sách bình luận'})
        console.log('Lỗi '+err.message)
    });
}

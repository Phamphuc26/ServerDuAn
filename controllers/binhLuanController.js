import BinhLuan from "../models/binhLuan.js";
import BaiViet from "../models/baiViet.js";

export async function binhLuan(req, res){
  const binhLuanMoi = {
    noiDung: req.body.noiDung,
    idBaiViet : req.body.idBaiViet,
    idNguoiDung: req.params.id,
  };
  try {
    const baiViet = await BaiViet.findById(req.body.idBaiViet);
    if(baiViet){
      const binhLuan = new BinhLuan(binhLuanMoi);
      await binhLuan.save();
      res.send({
        thongBao: "Bình luận thành công"
      })
    } else {
      res.send({thongBao: "Không tìm thấy bài viết"})
    }
  } catch (error) {
    console.log("Bình luận không thành công !");
    throw new Error("Bình luận không thành công !" );
  }
}

export async function binhLuanCuaBaiViet(req, res){
  try {
    const baiViet = await BaiViet.findById(req.params.id);
    if(baiViet){
      const danhSachBinhLuan = await BinhLuan.find({idBaiViet : req.params.id}).populate('idNguoiDung','hoTen')
      res.send({
        danhSachBinhLuan : danhSachBinhLuan
      })
    } else {
      res.send({thongBao: "Không tìm thấy bài viết"})
    }
  } catch (error) {
    console.log("Bình luận không thành công !");
    throw new Error("Bình luận không thành công !" );
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

import BaiViet from "../models/baiViet.js";

export async function dangBai(req, res) {
  const baiViet = new BaiViet(req.body);
  try {
    await baiViet.save();
    res.send({thongBao: "Đăng bài thành công", baiViet: baiViet});
    console.log("Đăng bài thành công ");
  } catch (error) {
    res.send({
      thongBao: "Đăng bài không thành công",
    });
    console.log(error);
  }
}
export async function danhSachBaiViet(req, res) {
  try {
    const baiViet = await BaiViet.find({trangThai: true}).populate('idNguoiDung');
    if(baiViet.length <= 0) {
      res.send({
        thongBao: "Danh sách bài viết trống"
      })
    } else {
      res.send({
        thongBao: "Danh sách bài viết",
        danhSachBaiViet: baiViet,
      });
    }
  } catch (error) {
    res.send({thongBao: 'error'});
  }
}
export async function xoaBaiViet (req, res) {
  try {
    const baiViet = await BaiViet.findById(req.params.id)
    if(baiViet){
      await BaiViet.findByIdAndDelete(req.params.id)
      res.send({
        thongBao: `Đã xóa thành công ${baiViet.noiDung}`
      })
    } else{
      res.send({
        thongBao: "Không tìm thấy bài viết"
      })
    }
  } catch (error) {
    res.send({thongBao: "Lỗi"})
    console.log(error)
  }
}
export async function anBaiViet(req, res){
  try {
    const baiViet = await BaiViet.findById(req.params.id)
    if(baiViet){
      const baiViet2 = {
        $set: {
          trangThai: false,
        }
      }
      await BaiViet.updateOne({_id: req.params.id}, baiViet2)
      res.send({
        thongBao: `Đã ẩn bài viết ${baiViet.noiDung}`
      })
    } else {
      res.send({thongBao: "Không tìm thấy bài viết"})
    }
  } catch (error) {
    res.send({
      thongBao: "Lỗi"
    })
    console.log(error)
  }
}
export async function huyAnBaiViet(req, res) {
  try {
    const baiViet = await BaiViet.findById(req.params.id);
    if (baiViet) {
      const baiViet2 = {
        $set: {
          trangThai: true,
        },
      };
      await BaiViet.updateOne({_id: req.params.id}, baiViet2);
      res.send({
        thongBao: `Đã hủy ẩn bài viết ${baiViet.noiDung}`,
      });
    } else {
      res.send({thongBao: "Không tìm thấy bài viết"});
    }
  } catch (error) {
    res.send({
      thongBao: "Lỗi",
    });
    console.log(error);
  }
}
export async function danhSachBaiVietAn(req, res) {
  try {
    const baiViet = await BaiViet.find({
      idNguoiDung: req.params.id,
      trangThai: false,
    }).populate('idNguoiDung');
    if (baiViet.length <= 0) {
      res.send({thongBao: "không có bài viết ẩn"});
    } else {
     
       res.send({
         thongBao: "Danh sách bài viết ẩn",
         danhSachBaiViet: baiViet,
       });
    }
  } catch (error) {
    res.send({thongBao: "Lỗi"})
    console.log(error)
  } 
}
export async function danhSachBaiVietCuaToi(req, res) {
  try {
    const baiViet = await BaiViet.find({idNguoiDung: req.params.id, trangThai: true}).populate('idNguoiDung');
    if (baiViet.length <= 0){
      res.send({thongBao: "Tôi chưa có bài viết nào"})
    } else {
      res.send({
        danhSach: baiViet
      })
    }
  } catch (error) {
    res.send({
      thongBao: "Lỗi"
    })
    console.log(error)
  }
}

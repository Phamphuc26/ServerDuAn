import BaiViet from "../models/baiViet.js";
import NguoiDung from "../models/nguoiDung.js";

export async function dangBai(req, res) {
  const BVM = {
    noiDung: req.body.noiDung,
    linkAnh: req.body.linkAnh,
    idNguoiDung: req.params.id,
  };
  const nguoiDung = await NguoiDung.findById(req.params.id)
  if (nguoiDung){
    try {
      const baiViet = new BaiViet(BVM);
      await baiViet.save();
      res.send({
        thongBao: "Đã đăng bài viết thành công"
      })
    } catch (error) {
      console.log(error)
    }
  } else {
    res.send({
      thongBao: "Không tìm thấy người dùng"
    });
    console.log("Không tìm thấy người dùng")
  }
}
export async function danhSachBaiViet(req, res) {
  try {
    const baiViet = await BaiViet.find({trangThai: true}).populate('idNguoiDung', 'hoTen');
    if(baiViet.length <= 0) {
      res.send({
        thongBao: "Danh sách bài viết trống"
      })
    } else {
      res.send(baiViet);
    }
  } catch (error) {
    console.log(error)
  }
}

export async function danhSachDangTheoDoi(req, res) {
  try {
    const nguoiDung = await NguoiDung.findById(req.params.id);
    if(nguoiDung){
      const dangTheoDoi = nguoiDung.dangTheoDoi;
      if(dangTheoDoi.length > 0){
        var mang = [];
        console.log(mang)
        for (let index = 0; index < dangTheoDoi.length ; index++) {
          const element = dangTheoDoi[index];
          const dsBaiViet = await BaiViet.find({idNguoiDung : element,trangThai : true}).populate('idNguoiDung','hoTen')
          // console.log(element)
          console.log(dsBaiViet.length)
          mang = mang.concat(dsBaiViet)
          
        }
        console.log(`Mảng cuối :${mang}`)
        res.send({danhSachBaiViet : mang})
        
      }
    }else{
      res.send({thongBao : "Không tìm thấy người dùng"})
      console.log("Không tìm thấy người dùng")
    }
  } catch (error) {
    console.log(error)
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
    console.log(error);
  }
}



// export async function xemTrangCaNhanCuaToi(req, res) {
//   try {
//     const nguoi = await NguoiDung.findById(req.params.id)
//     const baiViet = await BaiViet.find({idNguoiDung : req.params.id})
//     if(baiViet.length <= 0) {
//       res.send({
//         thongBao: "Danh sách bài viết trống"
//       })
//     } else {
//       res.send({
//         thongBao: "Danh sách bài viết",
//         nguoiDung : nguoi,
//         danhSachBaiViet: baiViet,
//       });
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
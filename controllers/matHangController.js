import MatHang from "../models/matHang.js";

export async function themMatHang(req, res) {
  const matHangMoi = new MatHang(req.body);
  console.log(req.body.idTest)
  console.log(req.body.idNguoiDung._id)
  console.log(matHangMoi);
  // try {
  //   await matHangMoi.save();
  //   res.send({
  //     thongBao: "Thêm mặt hàng thành công",
  //     matHang: matHangMoi,
  //   });
  // } catch (error) {
  //   res.send({
  //     thongBao: "Thêm mặt hàng không thành công"
  //   })
  //   console.log(error);
  // }
}
export async function xoaMatHang(req, res) {
  try {
    const matHangXoa = await MatHang.findById(req.params.id);
    if (matHangXoa) {
      await MatHang.findByIdAndDelete(req.params.id);
      res.send({
        thongBao: `Đã xóa thành công ${matHangXoa.noiDung}`,
      });
    } else {
      res.send({
        thongBao: 'Mặt hàng không tồn tại',
      });
    }
  } catch (error) {
    res.send(error);
  }
}
export async function chinhSuaMatHang(req, res) {
  try {
    const matHang = await MatHang.findById(req.params.id);
    if (!matHang) {
      res.send({
        thongBao: "Mặt hàng không tồn tại",
      });
    } else {
      const matHang2 = {
        // linkAnhMoi = req.body.linkAnh,
        // $push: {linkAnh: linkAnhMoi},
        $set: {
          hangMuc: req.body.hangMuc,
          noiDung: req.body.noiDung,
          giaBan: req.body.giaBan,
          tieuDe: req.body.tieuDe,
          linkAnh: req.body.linkAnh,
        },
      };
      await MatHang.updateOne({_id: req.params.id}, matHang2);
      // const linkAnh = matHang.linkAnh
      res.send({
        thongBao: "Cập nhật thành công",
      });
    }
  } catch (error) {
    res.send({
      thongBao: "Cập nhật lỗi"
    })
    console.log(error)
  }
}
export async function danhSachMatHang(req, res) {
  await MatHang.find().populate('idNguoiDung')
    .then((danhSachMatHang) => {
      if(danhSachMatHang.length <= 0){
        res.send({
          thongBao: "Danh sách mặt hàng trống"
        })
      } else {
        res.send({
          thongBao: "Danh sách mặt hàng",
          danhSachMatHang: danhSachMatHang,
        });
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
}
export async function matHangChiTiet(req, res) {
  try {
    const matHang = await MatHang.findById(req.params.id).populate('idNguoiDung');
    if (!matHang) {
      res.send({
        thongBao: "Mặt hàng không tồn tại",
      });
    } else {
      res.send({
        matHang: matHang,
      });
    }
  } catch (error) {
    res.send(error);
  }
}
export async function timKiemHangMuc(req, res) {
  try {
    const hangMuc = req.params.tuKhoa;
    await MatHang.find({hangMuc: hangMuc}).then((result) => {
      if (result.length <= 0) {
          res.send({
            thongBao: `Không tìm thấy kết quả tìm kiếm với mặt hàng ${hangMuc}`,
          });
      } else {
        res.send({
          thongBao: `Kết quả tìm kiếm của mặt hàng ${hangMuc}`,
          danhSachMatHang: result,
        });
      }
    });
  } catch (error) {
    res.send({thongBao: "Lỗi"})
    console.log(error)
  }
}
export async function danhSachToiBan(req, res) {
  try {
    const matHang = await MatHang.find({idNguoiDung: req.params.id}).populate('idNguoiDung');
    if(matHang.length <= 0) {
      res.send({
        thongBao: "Tôi chưa có mặt hàng nào"
      })
    } else {
      res.send({
          danhSach: matHang
       })
    }
  } catch (error) {
    res.send({
      thongBao: "Lỗi"
    })
    console.error(error)
  }
}
export async function timKiemTieuDe(req, res) {
  try {
    const tieuDe = req.params.tieuDe
    await MatHang.find({tieuDe: tieuDe}).then((result) =>{
      if(result.length <= 0){
        res.send({thongBao: `Không tìm thấy kết quả với từ khóa ${tieuDe}`})
      } else{
        res.send({thongBao: `Kết quả tìm kiếm với từ khóa ${tieuDe}`})
      }
    })
  } catch (error) {
    res.send({thongBao: "Lỗi"})
    console.log(error)
  }
}
import MatHang from "../models/matHang.js";

export async function themMatHang(req, res) {
  const matHangMoi = new MatHang(req.body);
  try {
    await matHangMoi.save();
    res.send({
      thongBao: "Thêm mặt hàng thành công",
      matHang: matHangMoi,
    });
  } catch (error) {
    res.send({
      thongBao: "Thêm mặt hàng không thành công"
    })
    console.log(error);
  }
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
  await MatHang.find()
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
    const matHang = await MatHang.findById(req.params.id);
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
export async function timKiemMatHang(req, res) {
  const tukhoa = req.params.tuKhoa;
  await MatHang.find({hangMuc: tukhoa}).then((result) => {
    if (result != null) {
      res.send({
        thongBao: `Kết quả tìm kiếm của mặt hàng ${tukhoa}`,
        danhSachMatHang: result,
      });
    } else {
      res.send({
        thongBao: `Không tìm thấy kết quả tìm kiếm với từ khóa ${tukhoa}`,
      });
    }
  });
}
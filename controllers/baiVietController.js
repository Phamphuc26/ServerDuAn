import BaiViet from "../models/baiViet.js";

export async function dangBai(req, res) {
  const baiViet = new BaiViet(req.body);
  try {
    await baiViet.save();
    res.send({ thongBao: "Đăng bài thành công !" });
    console.log("Đăng bài thành công !");
  } catch (error) {
    res.send({ thongBao: "Đăng bài không thành công !" });
    console.log("Đăng bài không thành công !");
  }
}

export async function danhSachBaiViet(req, res) {
    
  await BaiViet.find().populate('binhLuan').then((result) => {
      res.send(result);
      console.log("Danh sách bài viết");
    })
    .catch((err) => {
        res.send({thongBao : 'Lỗi lấy danh sách bài viết'})
        console.log('Lỗi '+err.message)
    });
}

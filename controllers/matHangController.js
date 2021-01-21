import MatHang from "../models/matHang.js";

export async function dangHang(req, res) {
  const matHangMoi = new MatHang(req.body);
  try {
    await matHangMoi.save();
    res.send({ thongbao: "mat hang da dang" });
    console.log(matHangMoi);
  } catch (error) {
    res.status(400).send(err.message);
  }
}

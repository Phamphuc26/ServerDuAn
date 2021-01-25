import express from "express";
import {
  themMatHang,
  xoaMatHang,
  chinhSuaMatHang,
  danhSachMatHang,
  matHangChiTiet,
  timKiemHangMuc,
  danhSachToiBan,
  timKiemTieuDe,
} from '../controllers/matHangController.js';

const router = express.Router();

router.post('/dangBai', themMatHang);
router.post('/xoa/:id', xoaMatHang);
router.post('/chinhSua/:id', chinhSuaMatHang);
router.post('/danhSach', danhSachMatHang);
router.post('/chiTiet/:id', matHangChiTiet);
router.post('/timKiemHangMuc/:tuKhoa', timKiemHangMuc);
router.post('/danhSachToiBan/:id', danhSachToiBan)
router.post('/timKiemTieuDe/:tieuDe', timKiemTieuDe);
export default router;

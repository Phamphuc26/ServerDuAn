import express from "express";
import {
  themMatHang,
  xoaMatHang,
  chinhSuaMatHang,
  danhSachMatHang,
  matHangChiTiet,
  timKiemMatHang,
  danhSachToiBan,
} from '../controllers/matHangController.js';

const router = express.Router();

router.post('/dangBai', themMatHang);
router.post('/xoa/:id', xoaMatHang);
router.post('/chinhSua/:id', chinhSuaMatHang);
router.post('/danhSach', danhSachMatHang);
router.post('/chiTiet/:id', matHangChiTiet);
router.post('/timKiem/:tuKhoa', timKiemMatHang);
router.post('/danhSachToiBan/:id', danhSachToiBan)
export default router;

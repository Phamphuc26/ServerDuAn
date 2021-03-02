import express from "express";
import {
  dangBai,
  danhSachBaiViet,
  xoaBaiViet,
  anBaiViet,
  // danhSachBaiVietAn,
  huyAnBaiViet,
  danhSachDangTheoDoi,
  chiTietBaiViet,
  chinhSuaBaiViet,
} from "../controllers/baiVietController.js";

const router = express.Router();

router.get("/danhSach", danhSachBaiViet);
router.get("/chiTiet/:id", chiTietBaiViet);
router.post("/dangBai/:id", dangBai);
router.post("/capNhat/:id", chinhSuaBaiViet);
router.post("/xoa/:id", xoaBaiViet);
router.post("/an/:id", anBaiViet);
router.get("/dangTheoDoi/:id",danhSachDangTheoDoi);
// router.post('/danhSachAn/:id', danhSachBaiVietAn)
router.post("/huyAn/:id", huyAnBaiViet);
// router.post('/danhSachCuaToi/:id', danhSachBaiVietCuaToi)

export default router;

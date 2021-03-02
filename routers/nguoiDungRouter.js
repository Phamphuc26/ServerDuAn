import express from "express";
import { dangKy, dangNhap, danhSachNguoiDung, huyTheoDoi, theoDoi } from "../controllers/nguoiDungController.js";

const router = express.Router();

router.post("/dangKy", dangKy);
router.post("/dangNhap", dangNhap);
router.get("/danhSach",danhSachNguoiDung);
router.get("/xemTrangCaNhan/:id");
router.post("/theoDoi", theoDoi);
router.post("/huyTheoDoi", huyTheoDoi);


export default router;

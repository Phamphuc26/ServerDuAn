import express from "express";
import { dangKy, danhSachNguoiDung, huyTheoDoi, theoDoi } from "../controllers/nguoiDungController.js";

const router = express.Router();

router.post("/dangKy", dangKy);
router.get("/danhSach",danhSachNguoiDung);
router.get("/xemTrangCaNhan/:id");
router.post("/theoDoi", theoDoi);
router.post("/huyTheoDoi", huyTheoDoi);


export default router;

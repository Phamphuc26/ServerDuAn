import express from "express";
import { dangKy, danhSachNguoiDung } from "../controllers/nguoiDungController.js";

const router = express.Router();

router.post("/dangKy", dangKy);
router.get("/danhSach",danhSachNguoiDung)

export default router;

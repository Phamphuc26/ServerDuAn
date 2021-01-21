import express from "express";
import { dangHang } from "../controllers/matHangController.js";

const router = express.Router();

router.post("/dangHang", dangHang);

export default router;

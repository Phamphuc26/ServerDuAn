import express from 'express'
import {
  dangBai,
  danhSachBaiViet,
  xoaBaiViet,
  anBaiViet,
  danhSachBaiVietAn,
  huyAnBaiViet,
} from '../controllers/baiVietController.js';

const router = express.Router();

router.post('/danhSach',danhSachBaiViet)
router.post('/dangBai',dangBai)
router.post('/xoa/:id', xoaBaiViet)
router.post('/an/:id', anBaiViet)
router.post('/danhSachAn', danhSachBaiVietAn)
router.post('/huyAn/:id', huyAnBaiViet)

export default router;
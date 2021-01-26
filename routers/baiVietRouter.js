import express from 'express'
import {
  dangBai,
  danhSachBaiViet,
  xoaBaiViet,
  anBaiViet,
  // danhSachBaiVietAn,
  huyAnBaiViet,
  // danhSachBaiVietCuaToi,
  xemTrangCaNhanCuaToi,
  danhSachBaiVietBanBe,
} from '../controllers/baiVietController.js';

const router = express.Router();

router.get('/danhSach',danhSachBaiViet)
router.get('/caNhan/:id', xemTrangCaNhanCuaToi);
router.post('/dangBai/:id',dangBai)
router.post('/xoa/:id', xoaBaiViet)
router.post('/an/:id', anBaiViet)
router.get('/baiVietBanBe/:id', danhSachBaiVietBanBe)
// router.post('/danhSachAn/:id', danhSachBaiVietAn)
router.post('/huyAn/:id', huyAnBaiViet)
// router.post('/danhSachCuaToi/:id', danhSachBaiVietCuaToi)

export default router;
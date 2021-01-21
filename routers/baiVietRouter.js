import express from 'express'
import { dangBai, danhSachBaiViet } from '../controllers/baiVietController.js'

const router = express.Router();

router.get('/danhSach',danhSachBaiViet)
router.post('/dangBai',dangBai)

export default router;
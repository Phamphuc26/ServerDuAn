import express from 'express'
import { danhSachTinNhan, nhanTin, danhSachLienHe } from '../controllers/tinNhanController.js'

const router = express.Router();

router.post('/chat',nhanTin)
router.get('/danhSachLienHe/:id',danhSachLienHe)

router.get('/danhSach',danhSachTinNhan)
export default router

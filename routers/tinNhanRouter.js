import express from 'express'
import { danhSachTinNhan, nhanTin, abc } from '../controllers/tinNhanController.js'

const router = express.Router();

router.post('/chat',nhanTin)
router.get('/test',abc)

router.get('/danhSach',danhSachTinNhan)
export default router

import express from 'express'
import { binhLuan, danhSachBinhLuan } from '../controllers/binhLuanController.js'

const router = express.Router();

router.get('/danhSach',danhSachBinhLuan)
router.post('/binhLuan',binhLuan)

export default router;
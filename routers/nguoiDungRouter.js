import express from 'express'
import {dangKy} from '../controllers/nguoiDungController.js'

const router = express.Router()

router.post('/dangKy',dangKy)

export default router
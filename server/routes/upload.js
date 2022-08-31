import express from 'express'
import checkAuth from '../helpers/checkAuth.js'
import upload from '../config/multer.js'
import { uploadImage } from '../controllers/upload.js'

const router = express.Router()

router.post('/', checkAuth, upload.single('image'), uploadImage)

export default router

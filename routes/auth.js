import express from 'express'
import { getMe, login, register } from '../controllers/user.js'
import checkAuth from '../helpers/checkAuth.js'
import { registerValidation } from '../validators/auth.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', registerValidation, register)
router.get('/me', checkAuth, getMe)

export default router

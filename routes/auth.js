import express from 'express'
import { getMe, login, register } from '../controllers/user.js'
import checkAuth from '../helpers/checkAuth.js'
import { loginValidation, registerValidation } from '../validators/auth.js'

const router = express.Router()

router.post('/login', loginValidation, login)
router.post('/register', registerValidation, register)
router.get('/me', checkAuth, getMe)

export default router

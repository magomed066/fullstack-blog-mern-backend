import express from 'express'
import { getMe, login, register } from '../controllers/user.js'
import checkAuth from '../helpers/checkAuth.js'
import { loginValidation, registerValidation } from '../validators/auth.js'
import handleValidationErrors from '../helpers/handleValidationErrors.js'

const router = express.Router()

router.post('/login', loginValidation, handleValidationErrors, login)
router.post('/register', registerValidation, handleValidationErrors, register)
router.get('/me', checkAuth, getMe)

export default router

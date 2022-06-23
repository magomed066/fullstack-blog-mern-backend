import express from 'express'
import {
	create,
	deleteById,
	getAll,
	getById,
	update,
} from '../controllers/post.js'
import checkAuth from '../helpers/checkAuth.js'
import { postCreateValidation } from '../validators/post.js'

const router = express.Router()

router.get('/all', getAll)
router.get('/:id', getById)
router.delete('/:id', checkAuth, deleteById)
router.patch('/:id', checkAuth, update)
router.post('/create', checkAuth, postCreateValidation, create)

export default router

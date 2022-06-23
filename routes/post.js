import express from 'express'
import {
	create,
	deleteById,
	getAll,
	getById,
	update,
} from '../controllers/post.js'
import checkAuth from '../helpers/checkAuth.js'
import handleValidationErrors from '../helpers/handleValidationErrors.js'
import { postCreateValidation } from '../validators/post.js'

const router = express.Router()

router.get('/all', getAll)
router.get('/:id', getById)
router.delete('/:id', checkAuth, deleteById)
router.patch(
	'/:id',
	checkAuth,
	postCreateValidation,
	handleValidationErrors,
	update,
)
router.post(
	'/create',
	checkAuth,
	postCreateValidation,
	handleValidationErrors,
	create,
)

export default router

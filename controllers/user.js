import { validationResult } from 'express-validator'
import generateToken from '../helpers/generateToken.js'
import User from '../models/User.js'

export const login = async (req, res) => {
	try {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'Пользователь не найден',
			})
		}

		const isValidPassword = user.matchPasswords(password)

		if (!isValidPassword) {
			return res.status(404).json({
				success: false,
				message: 'Неверный логин или пароль',
			})
		}

		const { passwordHash, ...userData } = user._doc

		res.json({
			success: true,
			data: {
				...userData,
				token: generateToken(user.id),
			},
		})
	} catch (error) {
		console.log(error)
		res
			.status(500)
			.json({ success: false, message: 'Не удалось авторизоваться' })
	}
}

export const register = async (req, res) => {
	try {
		const { email, fullName, password, avatarUrl } = req.body
		const errors = validationResult(req)

		if (!errors.isEmpty()) {
			return res.status(400).json(errors.array())
		}

		const doc = new User({
			email,
			fullName,
			avatarUrl,
			passwordHash: password,
		})

		const user = await doc.save()

		const { passwordHash, ...userData } = user._doc

		res.json({
			success: true,
			data: {
				...userData,
				token: generateToken(user.id),
			},
		})
	} catch (error) {
		console.log(error)
		res
			.status(500)
			.json({ success: false, message: 'Не удалось зарегистрироваться' })
	}
}

export const getMe = async (req, res) => {
	try {
		const { userId } = req

		const user = await User.findById(userId)

		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'Пользователь не найден',
			})
		}

		const { passwordHash, ...userData } = user._doc

		res.json({
			success: true,
			data: {
				...userData,
			},
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Нет доступа' })
	}
}

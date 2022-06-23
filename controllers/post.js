import Post from '../models/Post.js'

export const getAll = async (req, res) => {
	try {
		const posts = await Post.find().populate('user').exec()

		const filteredPosts = posts.map((item) => {
			const { passwordHash, ...userData } = item.user._doc

			return {
				...item._doc,
				user: {
					...userData,
				},
			}
		})

		res.json({
			success: true,
			data: filteredPosts,
		})
	} catch (error) {
		console.log(error)
		res
			.status(500)
			.json({ success: false, message: 'Не удалось получить статьи' })
	}
}

export const getById = async (req, res) => {
	try {
		const postId = req.params.id

		Post.findByIdAndUpdate(
			{
				_id: postId,
			},
			{
				$inc: {
					viewsCount: 1,
				},
			},
			{
				returnDocument: 'after',
			},
			(err, doc) => {
				if (err) {
					return res
						.status(500)
						.json({ success: false, message: 'Не удалось вернуть статью' })
				}

				if (!doc) {
					return res
						.status(404)
						.json({ success: false, message: 'Статья не найдена' })
				}

				res.json({ success: true, data: doc })
			},
		)
	} catch (error) {
		console.log(error)
		res
			.status(500)
			.json({ success: false, message: 'Не удалось получить статью' })
	}
}

export const deleteById = async (req, res) => {
	try {
		const postId = req.params.id

		Post.findOneAndDelete(
			{
				_id: postId,
			},
			(err, doc) => {
				if (err) {
					return res
						.status(500)
						.json({ success: false, message: 'Не удалось удалить статью' })
				}

				if (!doc) {
					return res
						.status(500)
						.json({ success: false, message: 'Статья не найдена' })
				}

				res.json({ success: true, message: 'Статья удалена' })
			},
		)
	} catch (error) {
		console.log(error)
		res
			.status(500)
			.json({ success: false, message: 'Не удалось получить статью' })
	}
}

export const create = async (req, res) => {
	try {
		const { title, text, imageUrl, tags } = req.body

		const doc = new Post({
			title,
			text,
			imageUrl,
			tags,
			user: req.userId,
		})

		const post = await doc.save()

		res.json({
			success: true,
			data: post,
		})
	} catch (error) {
		console.log(error)
		res
			.status(500)
			.json({ success: false, message: 'Не удалось создать статью' })
	}
}

export const update = async (req, res) => {
	try {
		const postId = req.params.id
		const { title, text, imageUrl, tags } = req.body

		await Post.findOneAndUpdate(
			{
				_id: postId,
			},
			{
				title,
				text,
				imageUrl,
				tags,
				user: req.userId,
			},
		)

		res.json({
			success: true,
			message: 'Статья обновлена',
		})
	} catch (error) {
		console.log(error)
		res
			.status(500)
			.json({ success: false, message: 'Не удалось обновить статью' })
	}
}

import jwt from 'jsonwebtoken'

export default function (id) {
	return jwt.sign({ _id: id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	})
}

import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		passwordHash: {
			type: String,
			required: true,
		},
		avatarUrl: String,
	},
	{
		timestamps: true,
	},
)

UserSchema.pre('save', async function (next) {
	if (!this.isModified('passwordHash')) {
		next()
	}

	const salt = await bcrypt.genSalt(10)
	this.passwordHash = await bcrypt.hash(this.passwordHash, salt)
})

UserSchema.methods.matchPasswords = async function (password) {
	return await bcrypt.compare(password, this.passwordHash)
}

export default mongoose.model('User', UserSchema)

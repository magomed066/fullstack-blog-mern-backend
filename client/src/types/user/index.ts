export interface User {
	_id: string
	email: string
	fullName: string
	avatarUrl: string
}

export type Login = Pick<User, 'email'> & { password: string }

export interface User {
	_id: string
	email: string
	fullName: string
	avatarUrl: string
	token: string
}

export type Login = Pick<User, 'email'> & { password: string }

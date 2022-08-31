import { User } from '../user'

export interface AuthState {
	user: User | null
	token: ''
}

export interface AuthResponse {
	success: boolean
	data: User
}

import { Post } from '../posts'
import { User } from '../user'

export interface AuthState {
	user: User | null
	token: ''
}

export interface AuthResponse {
	success: boolean
	data: User
}

export interface CreatePostResponse {
	success: boolean
	data: Post[]
}

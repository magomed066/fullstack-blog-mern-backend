import { User } from '../user'

export interface Post {
	_id: string
	title: string
	text: string
	tags: Array<string>
	viewsCount: number
	user: User
	imageUrl: string
	createdAt: string
}

export type CreatePost = Pick<Post, 'title' | 'text' | 'imageUrl' | 'tags'>

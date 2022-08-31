import { Post } from '@/types/posts'

export interface Props {
	data: Post[] | undefined
	isLoading: boolean
}

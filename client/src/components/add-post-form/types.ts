import { Post } from '@/types/posts'

export interface Props {
	handleSubmit: (data: Pick<Post, 'title' | 'text'> & { tags: string }) => void
	setText: (e: string) => void
	text: string
	loading?: boolean
}

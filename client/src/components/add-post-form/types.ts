import { Post } from '@/types/posts'
import { ChangeEvent, FormEvent } from 'react'

export interface Props {
	data: Pick<Post, 'title' | 'imageUrl'> & { tags: string }
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void
	handleSubmit: (e: FormEvent) => void
	setText: (e: string) => void
	text: string
}

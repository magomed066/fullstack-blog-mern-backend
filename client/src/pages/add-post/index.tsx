import { AddPostForm, UploadImage } from '@/components'
import { AlertContext } from '@/context/alert/context'
import { useAppSelector } from '@/store'
import { useCreatePostMutation } from '@/store/posts'
import { setPosts } from '@/store/posts/post-slice'
import { Post } from '@/types/posts'
import { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useNotify from '@/hooks/useNotify'
import styles from './index.module.scss'
import { Button, Divider } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

const AddPost = () => {
	const [createPost] = useCreatePostMutation()
	const posts = useAppSelector((store) => store.posts.posts)
	const dispatch = useDispatch()
	const { open } = useContext(AlertContext)
	const nav = useNavigate()
	const [image, setImage] = useState('')
	const [text, setText] = useState<string>('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = (
		data: Pick<Post, 'title' | 'text'> & { tags: string },
	) => {
		if (!text.length) {
			useNotify({
				type: 'error',
				message: 'Input text',
				duration: 2,
			})
			return
		}

		const transformedData = {
			...data,
			text,
			imageUrl: image,
			tags: data.tags.split(','),
		}

		setLoading(true)

		setTimeout(() => {
			createPost(transformedData)
				.unwrap()
				.then((res) => {
					dispatch(setPosts([...posts, res.data]))

					nav('/', { replace: true })
				})
				.catch((err) => {
					open('error', err.data.message)
				})
		}, 400)
	}

	return (
		<div className={styles.add}>
			<div className={styles.header}>
				<Button type="default" onClick={() => nav('/')}>
					<ArrowLeftOutlined /> Back
				</Button>
			</div>
			<Divider />

			<div className={styles.content}>
				<div className={styles['add-image']}>
					<UploadImage setImage={setImage} />
				</div>

				<AddPostForm
					handleSubmit={handleSubmit}
					text={text}
					setText={setText}
					loading={loading}
				/>
			</div>
		</div>
	)
}

export default AddPost

import { useGetPostByIdQuery } from '@/store/posts'
import { Button, Card, Image, Spin } from 'antd'
import { useNavigate, useParams } from 'react-router'
import styles from './index.module.scss'

import ReactMarkdown from 'react-markdown'

const PostDetails = () => {
	const { id } = useParams()
	const nav = useNavigate()
	const { data, isLoading } = useGetPostByIdQuery(id || '')

	const post = data?.data

	if (isLoading) {
		return (
			<div className={styles['post-loading']}>
				<Spin spinning={isLoading} />
			</div>
		)
	}

	return (
		<div className={styles.post}>
			<div className={styles.header}>
				<Button onClick={() => nav('/', { replace: true })}>Back</Button>
			</div>

			<div className={styles['content']}>
				<div className={styles.left}>
					<Image
						className={styles['post__image']}
						src={
							post?.imageUrl.startsWith('upload')
								? 'http://localhost:4444/' + post?.imageUrl
								: post?.imageUrl
						}
					/>
				</div>

				<Card className={styles.right}>
					<h3 className={styles['post__title']}>{post?.title}</h3>

					<ReactMarkdown children={post?.text || ''} />
					<p className={styles['post__tags']}>#{post?.tags.join('#')}</p>
				</Card>
			</div>
		</div>
	)
}

export default PostDetails

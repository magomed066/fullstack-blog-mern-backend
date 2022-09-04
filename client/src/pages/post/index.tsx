import { useDeletePostMutation, useGetPostByIdQuery } from '@/store/posts'
import { Button, Card, Image, Popconfirm, Spin } from 'antd'
import { useNavigate, useParams } from 'react-router'
import styles from './index.module.scss'

import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons'

const PostDetails = () => {
	const { id } = useParams()
	const nav = useNavigate()
	const { data, isLoading } = useGetPostByIdQuery(id || '')
	const [loading, setLoading] = useState(false)
	const [deletePost] = useDeletePostMutation()

	const post = data?.data

	const handleDeletePost = (id: string) => {
		setLoading(true)

		setTimeout(() => {
			deletePost(id)
				.unwrap()
				.then(() => {
					setLoading(false)
					nav('/')
				})
		}, 500)
	}

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
					<div className={styles['post-actions']}>
						<Popconfirm
							placement="bottom"
							title={'Are you sure?'}
							onConfirm={() => handleDeletePost(post?._id || '')}
							okText="Yes"
							cancelText="No"
						>
							<Button loading={loading} type="primary" danger>
								<DeleteOutlined />
							</Button>
						</Popconfirm>
					</div>

					<h3 className={styles['post__title']}>{post?.title}</h3>

					<ReactMarkdown children={post?.text || ''} />
					<p className={styles['post__tags']}>#{post?.tags.join('#')}</p>
				</Card>
			</div>
		</div>
	)
}

export default PostDetails

import { useAppSelector } from '@/store'
import { useDeletePostMutation } from '@/store/posts'
import {
	CommentOutlined,
	DeleteOutlined,
	EditOutlined,
	EyeOutlined,
	HeartOutlined,
} from '@ant-design/icons'
import { Avatar, Button, Card, Popconfirm, Skeleton, Spin } from 'antd'
import Meta from 'antd/lib/card/Meta'
import moment from 'moment'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router'
import styles from './index.module.scss'
import { Props } from './types'

const Post: FC<Props> = ({ post, isLoading }) => {
	const nav = useNavigate()
	const user = useAppSelector((store) => store.auth.user)

	const [loading, setLoading] = useState(false)

	const [deletePost] = useDeletePostMutation()

	const image = post?.imageUrl.startsWith('upload')
		? 'http://localhost:4444/' + post?.imageUrl
		: post?.imageUrl

	const handleDeletePost = (id: string) => {
		setLoading(true)

		setTimeout(() => {
			deletePost(id)
				.unwrap()
				.then(() => {
					setLoading(false)
				})
		}, 500)
	}

	const goToRead = () => nav(`/post/${post?._id}`)

	return (
		<Spin spinning={loading}>
			<Card
				className={styles.post}
				cover={
					<>
						{isLoading ? (
							<Skeleton.Image active className={styles['skeleton-image']} />
						) : (
							<img className={styles['img']} src={image} alt="react" />
						)}
					</>
				}
				actions={[
					// <SettingOutlined key="setting" />,
					<div key="views" className={styles['post-action']}>
						<span>{post?.viewsCount}</span>
						<EyeOutlined />
					</div>,
					<div key="comments" className={styles['post-action']}>
						<span>0</span>
						<CommentOutlined />
					</div>,
					<div key="like" className={styles['post-action']}>
						<span>0</span>
						<HeartOutlined />
					</div>,
				]}
			>
				<Skeleton active loading={isLoading}>
					{user && user._id === post?.user._id && (
						<div className={styles['post-actions']}>
							<Button type="primary">
								<EditOutlined />
							</Button>

							<Popconfirm
								placement="bottom"
								title={'Are you sure?'}
								onConfirm={() => handleDeletePost(post?._id || '')}
								okText="Yes"
								cancelText="No"
							>
								<Button type="primary" danger>
									<DeleteOutlined />
								</Button>
							</Popconfirm>
						</div>
					)}

					<Meta
						className={styles.meta}
						avatar={
							<Avatar
								src={
									post?.user.avatarUrl || 'https://joeschmoe.io/api/v1/random'
								}
							/>
						}
						title={post?.title}
						description={
							<>
								<div className={styles['tags']}>#{post?.tags.join('#')}</div>
							</>
						}
					/>

					<div className={styles['date']}>
						{moment(post?.createdAt).format('LL')}
					</div>

					<Button type="link" onClick={goToRead} className={styles['read']}>
						Read more...
					</Button>
				</Skeleton>
			</Card>
		</Spin>
	)
}

export default Post

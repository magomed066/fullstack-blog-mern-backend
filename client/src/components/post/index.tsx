import { Card, Icon } from '@/lib/ui'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import PostUser from '../post-user'
import styles from './index.module.scss'
import { Props } from './types'

const Post: FC<Props> = ({ post }) => {
	const { _id, imageUrl, title, text, user, createdAt } = post

	const nav = useNavigate()

	const image = imageUrl.startsWith('upload')
		? 'http://localhost:4444/' + imageUrl
		: imageUrl

	return (
		<Card className={styles.post}>
			<div className={styles['post-img']}>
				<img className={styles['post-img__item']} src={image} alt="react" />
			</div>

			<div className={styles.meta}>
				<div className={styles['meta-info']}>
					<h3 className={styles['post__title']}>{title}</h3>
					<p className={styles['post__desc']}>{text}</p>
				</div>

				<PostUser user={user} date={createdAt} />

				<Icon
					onClick={() => nav(`post:${_id}`)}
					icon="arrow-right"
					width={30}
					height={30}
					className={styles['post__icon']}
				/>
			</div>
		</Card>
	)
}

export default Post

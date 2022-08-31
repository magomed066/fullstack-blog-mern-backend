import { Skeleton } from '@/lib/ui'
import { FC, memo } from 'react'
import Post from '../post'
import styles from './index.module.scss'
import { Props } from './types'

const PostsList: FC<Props> = memo(({ data = [], isLoading }) => {
	return (
		<div className={styles.list}>
			{isLoading
				? [1, 2, 3].map((item) => <Skeleton.Card key={item} />)
				: data?.map((post) => <Post post={post} key={post._id} />)}
		</div>
	)
})

export default PostsList

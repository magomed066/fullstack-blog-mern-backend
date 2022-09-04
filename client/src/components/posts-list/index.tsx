import { Empty } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { FC, memo } from 'react'
import Post from '../post'
import styles from './index.module.scss'
import { Props } from './types'

const PostsList: FC<Props> = memo(({ data = [], isLoading }) => {
	if (!data.length && !isLoading) {
		return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
	}

	return (
		<div className={styles.list}>
			{isLoading
				? [1, 2].map((item) => <Post key={item} isLoading={true} />)
				: data?.map((post) => <Post post={post} key={post._id} />)}
		</div>
	)
})

export default PostsList

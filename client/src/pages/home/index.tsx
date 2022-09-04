import { PostsList, Tags } from '@/components'
import { Alert } from '@/lib/ui'
import { useAppSelector } from '@/store'
import { useGetPostsQuery, useGetTagsQuery } from '@/store/posts'
import { setPosts } from '@/store/posts/post-slice'
import { Post } from '@/types/posts'
import { Content } from 'antd/lib/layout/layout'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from './index.module.scss'

const Home = () => {
	const { data, isLoading } = useGetPostsQuery('')
	const { data: tags, isLoading: tagsLoading } = useGetTagsQuery('')
	const posts = useAppSelector((store) => store.posts.posts)
	const dispatch = useDispatch()

	const res: Post[] = data?.data
	const tagsData: string[] = tags?.data

	return (
		<div className={styles.home}>
			{/* <h3 className={styles['home__title']}>All Posts</h3> */}
			<div className={styles['home-wrap']}>
				<div className={styles.content}>
					<PostsList isLoading={isLoading} data={res} />
				</div>
				<div className={styles.sidebar}>
					<Tags isLoading={tagsLoading} tags={tagsData} />
				</div>
			</div>

			<Alert />
		</div>
	)
}

export default Home

import { PostsList, Tags } from '@/components'
import { Alert } from '@/lib/ui'
import { useGetPostsQuery } from '@/store/posts'
import { Post } from '@/types/posts'
import styles from './index.module.scss'

const Home = () => {
	const { data, isLoading } = useGetPostsQuery('')

	const res: Post[] = data?.data

	return (
		<div className={styles.home}>
			<h3 className={styles['home__title']}>All Posts</h3>
			<div className={styles['home-wrap']}>
				<div className={styles.content}>
					<PostsList isLoading={isLoading} data={res} />
				</div>
				<div className={styles.sidebar}>
					<Tags />
				</div>
			</div>

			<Alert />
		</div>
	)
}

export default Home

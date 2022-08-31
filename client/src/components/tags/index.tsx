import { Card, Skeleton } from '@/lib/ui'
import styles from './index.module.scss'

const Tags = ({ tags, isLoading }: { tags: string[]; isLoading: boolean }) => {
	return (
		<Card className={styles.tags}>
			{isLoading ? (
				<Skeleton height={3} rows={5} />
			) : (
				<>
					<h3 className={styles.title}>Tags</h3>

					<ul className={styles.list}>
						{tags.map((tag, i) => (
							<li key={i} className={styles['list__item']}>
								# {tag}
							</li>
						))}
					</ul>
				</>
			)}
			{/* <h3 className={styles.title}>Tags</h3>

			<ul className={styles.list}>
				<li className={styles['list__item']}>React</li>
				<li className={styles['list__item']}>Node</li>
				<li className={styles['list__item']}>Redux</li>
			</ul> */}
		</Card>
	)
}

export default Tags

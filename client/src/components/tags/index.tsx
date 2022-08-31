import { Card } from '@/lib/ui'
import styles from './index.module.scss'

const Tags = () => {
	return (
		<Card className={styles.tags}>
			<h3 className={styles.title}>Tags</h3>

			<ul className={styles.list}>
				<li className={styles['list__item']}>React</li>
				<li className={styles['list__item']}>Node</li>
				<li className={styles['list__item']}>Redux</li>
			</ul>
		</Card>
	)
}

export default Tags

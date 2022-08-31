import Card from '../card'
import styles from './index.module.scss'
import css from 'classnames'

const Skeleton = ({
	rows = 3,
	height = 1 | 2 | 3,
}: {
	rows?: number
	height: number
}) => {
	let res = []

	for (let i = 0; i < rows; i++) {
		res.push(
			<div
				style={{ height: height + 'rem' }}
				key={i}
				className={css(styles['skeleton__line'])}
			></div>,
		)
	}

	return <div className={styles.skeleton}>{res}</div>
}

const CardSkeleton = () => {
	return (
		<Card>
			<div className={styles['skeleton-card']}>
				<div className={styles['image']}></div>
				<div className={styles['content']}>
					<div className={css(styles['skeleton__line'])}></div>
					<div className={css(styles['skeleton__line'])}></div>
					<div className={css(styles['skeleton__line'])}></div>
					<div className={css(styles['skeleton__line'])}></div>
					<div className={css(styles['skeleton__line'])}></div>
				</div>
			</div>
		</Card>
	)
}

export default Object.assign(Skeleton, { Card: CardSkeleton })

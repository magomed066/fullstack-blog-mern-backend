import { FC } from 'react'
import styles from './index.module.scss'
import { Props } from './types'

const Card: FC<Props> = (props) => {
	const { children, style, className } = props

	return (
		<div className={`${styles.card} ${className}`} style={{ ...style }}>
			{children}
		</div>
	)
}

export default Card

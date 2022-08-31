import { FC } from 'react'
import { Props } from './types'
import styles from './index.module.scss'

const Button: FC<Props> = (props) => {
	const { children, type, className, onClick, style } = props

	return (
		<button
			onClick={onClick}
			style={{ ...style }}
			className={`${styles.btn} ${className} ${styles[`btn-${type}`]}`}
		>
			{children}
		</button>
	)
}

export default Button

import { FC } from 'react'
import { Props } from './types'
import styles from './index.module.scss'

const Button: FC<Props> = ({
	children,
	variant,
	className,
	onClick,
	style,
	type = 'button',
	disabled = false,
}) => {
	return (
		<button
			onClick={onClick}
			style={{ ...style }}
			type={type}
			disabled={disabled}
			className={`${styles.btn} ${className} ${styles[`btn-${variant}`]}`}
		>
			{children}
		</button>
	)
}

export default Button

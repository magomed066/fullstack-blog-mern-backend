import React, { FC } from 'react'
import styles from './index.module.scss'

import css from 'classnames'
import { Props } from './types'

const Input: FC<Props> = ({
	id,
	label,
	type = 'text',
	className,
	placeholder = 'Input value...',
	status,
	errorMessage,
	...props
}) => {
	return (
		<div className={css(styles.textfield, className)}>
			<label htmlFor={id}>{label}</label>

			<input
				id={id}
				type={type}
				className={css(status && styles[status])}
				placeholder={placeholder}
				{...props}
			/>

			{errorMessage && (
				<span className={css(styles['message__error'])}>{errorMessage}</span>
			)}
		</div>
	)
}

export default Input

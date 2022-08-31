import { FC, useContext } from 'react'
import styles from './index.module.scss'
import { Props } from './types'
import css from 'classnames'
import { AlertContext } from '@/context/alert/context'

const Alert: FC<Props> = ({ children }) => {
	const { active, close, status, message } = useContext(AlertContext)
	return (
		<div className={css(styles.alert, styles[status], !active && styles.hide)}>
			{children ? children : message}

			<span onClick={close} className={styles.closebtn}>
				{' '}
				&times;
			</span>
		</div>
	)
}

export default Alert

import { FC } from 'react'
import { Props } from './types'
import styles from './index.module.scss'
import icons from '@/assets/icons.svg'

const Icon: FC<Props> = ({ icon, width, height, className, onClick }) => {
	return (
		<svg
			onClick={onClick}
			className={`${styles.icon} ${className}`}
			width={width}
			height={height}
		>
			<use xlinkHref={`${icons}#${icon}`}></use>
		</svg>
	)
}

export default Icon

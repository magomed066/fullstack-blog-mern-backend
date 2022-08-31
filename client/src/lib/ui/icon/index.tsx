import { FC } from 'react'
import { Props } from './types'
import styles from './index.module.scss'
import icons from '@/assets/icons.svg'

const Icon: FC<Props> = ({
	icon,
	width,
	height,
	className,
	onClick,
	fill = '#00',
}) => {
	return (
		<svg
			onClick={onClick}
			className={`${styles.icon} ${className}`}
			width={width}
			height={height}
			style={{
				fill,
			}}
		>
			<use xlinkHref={`${icons}#${icon}`}></use>
		</svg>
	)
}

export default Icon

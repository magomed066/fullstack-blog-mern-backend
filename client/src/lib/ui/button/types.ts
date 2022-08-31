import { CSSProperties, ReactNode } from 'react'

export interface Props {
	onClick?: () => void
	className?: string
	style?: CSSProperties
	children?: ReactNode
	type?: 'primary' | 'danger' | 'outlined'
}

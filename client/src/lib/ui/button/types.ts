import { CSSProperties, ReactNode } from 'react'

export interface Props {
	onClick?: () => void
	className?: string
	style?: CSSProperties
	children?: ReactNode
	type?: 'button' | 'submit'
	variant?: 'primary' | 'danger' | 'outlined' | 'link'
	disabled?: boolean
}

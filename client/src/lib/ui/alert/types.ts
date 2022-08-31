import { ReactNode } from 'react'

export interface Props {
	type: 'error' | 'success' | 'warning' | 'primary' | 'secondary' | 'info'
	message?: string
	children?: ReactNode | string | JSX.Element
}

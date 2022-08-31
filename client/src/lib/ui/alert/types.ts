import { AlertStatus } from '@/types/ui'
import { ReactNode } from 'react'

export interface Props {
	type?: AlertStatus
	message?: string
	children?: ReactNode | string | JSX.Element
}

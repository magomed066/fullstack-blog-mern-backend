import { AlertStatus } from '@/types/ui'
import { createContext } from 'react'

interface AlertContext {
	open(status: AlertStatus, message: string): void
	close(): void
	active?: boolean
	message: string
	status: AlertStatus
}

const initialContext: AlertContext = {
	open() {},
	close() {},
	active: false,
	message: '',
	status: 'primary',
}

export const AlertContext = createContext<AlertContext>(initialContext)

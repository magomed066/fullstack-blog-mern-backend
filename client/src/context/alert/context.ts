import { createContext } from 'react'

interface AlertContext {
	open(): void
	close(): void
	active?: boolean
}

const initialContext: AlertContext = {
	open() {},
	close() {},
	active: false,
}

export const AlertContext = createContext<AlertContext>(initialContext)

import { AlertStatus } from '@/types/ui'
import React, { ReactNode, useEffect, useState } from 'react'
import { AlertContext } from './context'

const AlertContextProvider = ({ children }: { children: ReactNode }) => {
	const [active, setActive] = useState(false)
	const [message, setMessage] = useState('')
	const [status, setStatus] = useState<AlertStatus>('primary')

	const open = (status: AlertStatus, message: string) => {
		setMessage(message)
		setStatus(status)
		setActive(true)
	}

	const close = () => setActive(false)

	const value = {
		open,
		close,
		active,
		message,
		status,
	}

	return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
}

export default AlertContextProvider

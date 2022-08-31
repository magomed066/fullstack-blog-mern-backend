import React, { ReactNode, useState } from 'react'
import { AlertContext } from './context'

const AlertContextProvider = ({ children }: { children: ReactNode }) => {
	const [active, setActive] = useState(false)

	const open = () => setActive(true)
	const close = () => setActive(false)

	const value = {
		open,
		close,
		active,
	}

	return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
}

export default AlertContextProvider

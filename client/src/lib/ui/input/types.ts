import { ChangeEvent } from 'react'

export interface Props {
	id?: string
	value?: number | string
	placeholder?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
	label?: string
	type?: string
	className?: string
	status?: 'error'
	errorMessage?: string
	name?: string
}

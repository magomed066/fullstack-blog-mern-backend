import { ChangeEvent } from 'react'

export interface Props {
	onChange(e: ChangeEvent<HTMLInputElement> | Event): void
}

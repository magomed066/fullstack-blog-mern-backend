import { ChangeEvent, FC, useRef } from 'react'
import Button from '../button'
import styles from './index.module.scss'
import { Props } from './types'

const UploadBtn: FC<Props> = ({ onChange }) => {
	const ref = useRef<HTMLInputElement>(null)

	const handleClick = () => {
		ref.current?.click()
	}

	return (
		<div className={styles.upload}>
			<input type="file" onChange={onChange} ref={ref} hidden />

			<Button variant="primary" onClick={handleClick}>
				Upload image
			</Button>
		</div>
	)
}

export default UploadBtn

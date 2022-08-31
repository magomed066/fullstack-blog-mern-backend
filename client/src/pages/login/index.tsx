import { LoginForm } from '@/components'
import { AlertContext } from '@/context/alert/context'
import { Login as LoginI } from '@/types/user'
import { useContext } from 'react'

import styles from './index.module.scss'

const Login = () => {
	const { open } = useContext(AlertContext)

	const handleLogin = (data: LoginI) => {
		if (!data.email.length || !data.password.length) {
			open('error', 'Input all fields')
			return
		}

		console.log(data)
	}

	return (
		<div className={styles.login}>
			<LoginForm login={handleLogin} />
		</div>
	)
}

export default Login

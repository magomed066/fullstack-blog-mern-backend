import { LoginForm } from '@/components'
import { AlertContext } from '@/context/alert/context'
import { useAppDispatch, useAppSelector } from '@/store'
import { useLoginMutation } from '@/store/auth'
import { setCredentials } from '@/store/auth/auth-slice'
import { Login as LoginI } from '@/types/user'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'

import styles from './index.module.scss'

const Login = () => {
	const { open } = useContext(AlertContext)
	const dispatch = useAppDispatch()
	const nav = useNavigate()

	const [login, { isLoading }] = useLoginMutation()

	const { user } = useAppSelector((store) => store.auth)

	useEffect(() => {
		if (user) {
			nav('/')
		}
	}, [])

	const handleLogin = async (data: LoginI) => {
		if (!data.email.length || !data.password.length) {
			open('error', 'Input all fields')
			return
		}

		login(data)
			.unwrap()
			.then((res) => {
				localStorage.setItem('user', JSON.stringify(res.data))
				dispatch(setCredentials(res.data))
				nav('/')

				// return res
			})
			.catch((err) => {
				open('error', err.data.message)
			})
	}

	return (
		<div className={styles.login}>
			{isLoading && <h2>Loading...</h2>}
			<LoginForm login={handleLogin} />
		</div>
	)
}

export default Login

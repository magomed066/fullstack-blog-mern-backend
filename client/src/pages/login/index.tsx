import { LoginForm } from '@/components'
import useNotify from '@/hooks/useNotify'
import { useAppDispatch, useAppSelector } from '@/store'
import { useLoginMutation } from '@/store/auth'
import { setCredentials } from '@/store/auth/auth-slice'
import { Login as LoginI } from '@/types/user'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import styles from './index.module.scss'

const Login = () => {
	const dispatch = useAppDispatch()
	const nav = useNavigate()
	const [loading, setLoading] = useState(false)

	const [login] = useLoginMutation()

	const { user } = useAppSelector((store) => store.auth)

	useEffect(() => {
		if (user) {
			nav('/')
		}
	}, [])

	const handleLogin = async (data: LoginI) => {
		setLoading(true)

		setTimeout(() => {
			login(data)
				.unwrap()
				.then((res) => {
					localStorage.setItem('user', JSON.stringify(res.data))
					dispatch(setCredentials(res.data))
					nav('/')
				})
				.catch((err) => {
					useNotify({
						type: 'error',
						message: err.data.message,
						duration: 2,
					})
				})
				.finally(() => {
					setLoading(false)
				})
		}, 300)
	}

	return (
		<div className={styles.login}>
			<LoginForm login={handleLogin} isLoading={loading} />
		</div>
	)
}

export default Login

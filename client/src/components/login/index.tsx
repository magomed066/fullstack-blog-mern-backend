import { Button, Card, Icon, Input } from '@/lib/ui'
import { Login } from '@/types/user'
import React, { ChangeEvent, FC, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'
import { Props } from './types'

const LoginForm: FC<Props> = ({ login }) => {
	const [data, setData] = useState<Login>({
		email: '',
		password: '',
	})

	const [emailError, setEmailError] = useState({
		message: '',
	})
	const [passError, setPassError] = useState({
		message: '',
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))

		handleValidatePass()
		handleValidateEmail()
	}

	const handleValidateEmail = () => {
		data.email.length
			? setEmailError((prev) => ({ ...prev, message: 'Input an Email' }))
			: setEmailError((prev) => ({ ...prev, message: '' }))

		!data.email.includes('@')
			? setEmailError((prev) => ({ ...prev, message: 'Not correct Email' }))
			: setEmailError((prev) => ({ ...prev, message: '' }))
	}

	const handleValidatePass = () => {
		data.password.length < 5
			? setPassError((prev) => ({
					...prev,
					message: 'Password has to be at least 5 symbols',
			  }))
			: setPassError((prev) => ({ ...prev, message: '' }))
	}

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		login(data)
	}

	return (
		<Card className={styles.login}>
			<form className={styles.form} onSubmit={submitHandler}>
				<Input
					label="Email"
					name="email"
					value={data.email}
					placeholder="Input your Email"
					status={emailError.message ? 'error' : undefined}
					errorMessage={emailError.message}
					onChange={handleChange}
					onBlur={handleValidateEmail}
				/>
				<Input
					label="Password"
					name="password"
					type="password"
					value={data.password}
					placeholder="Input your password"
					status={passError.message ? 'error' : undefined}
					errorMessage={passError.message}
					onChange={handleChange}
					onBlur={handleValidatePass}
				/>

				<Button
					type="submit"
					variant="primary"
					disabled={emailError.message || passError.message ? true : false}
				>
					Log In
				</Button>

				<Link to="/register" className={styles.link}>
					Don't have an account?
				</Link>
			</form>
		</Card>
	)
}

export default LoginForm

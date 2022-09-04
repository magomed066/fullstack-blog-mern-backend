import { Login } from '@/types/user'
import { UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import styles from './index.module.scss'
import { Props } from './types'

const LoginForm: FC<Props> = ({ login, isLoading }) => {
	const nav = useNavigate()

	const submitHandler = (data: Login) => {
		login(data)
	}

	const goToRegister = () => nav('/register')

	return (
		<Card className={styles.login}>
			<Form
				name="basic"
				layout="vertical"
				initialValues={{ remember: true }}
				onFinish={submitHandler}
				autoComplete="off"
			>
				<div className={styles.lock}>
					<UserOutlined />
				</div>
				<Form.Item
					label="Email"
					name="email"
					rules={[{ required: true, message: 'Please input your Email!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" loading={isLoading}>
						Log in
					</Button>
					<Button type="link" onClick={goToRegister}>
						Don't have an account?
					</Button>
				</Form.Item>
			</Form>
		</Card>
	)
}

export default LoginForm

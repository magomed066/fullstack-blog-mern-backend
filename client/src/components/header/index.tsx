import { useAppSelector } from '@/store'
import { logout } from '@/store/auth/auth-slice'
import { ExportOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styles from './index.module.scss'

const Header = () => {
	const [loading, setLoading] = useState(false)
	const nav = useNavigate()
	const dispatch = useDispatch()
	const { user } = useAppSelector((store) => store.auth)

	const handleLogout = () => {
		setLoading(true)

		setTimeout(() => {
			dispatch(logout())
			setLoading(false)
		}, 1000)
	}

	const goToLogin = () => nav('/login')
	const goToAddPost = () => nav('/addPost')

	return (
		<Layout>
			<Layout.Header className={styles.header}>
				<div className={styles['logo']} />

				<div className={styles['btn-group']}>
					{!user ? (
						<>
							<Button type="link" onClick={goToLogin}>
								Log In
							</Button>
							<Button type="primary">Register</Button>
						</>
					) : (
						<>
							<Button type="primary" onClick={goToAddPost}>
								<PlusOutlined />
							</Button>
							<Button
								loading={loading}
								danger
								type="primary"
								onClick={handleLogout}
							>
								Logout
								<ExportOutlined />
							</Button>
						</>
					)}
				</div>
			</Layout.Header>
		</Layout>
	)
}

export default Header

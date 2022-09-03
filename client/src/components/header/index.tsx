import { AlertContext } from '@/context/alert/context'
import { Button, Icon } from '@/lib/ui'
import { useAppSelector } from '@/store'
import { logout } from '@/store/auth/auth-slice'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styles from './index.module.scss'

const Header = () => {
	const nav = useNavigate()
	const dispatch = useDispatch()
	const { user } = useAppSelector((store) => store.auth)

	const handleLogout = () => dispatch(logout())

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.wrap}>
					<div className="logo" onClick={() => nav('/')}>
						React Blog
					</div>
					<div className={styles['header-btns']}>
						{!user ? (
							<>
								<Button variant="outlined" onClick={() => nav('/login')}>
									Log In
								</Button>
								<Button variant="primary">Register</Button>
							</>
						) : (
							<>
								<Button variant="primary" onClick={() => nav('/addPost')}>
									<Icon fill="#fff" icon="pencil" width={20} height={20} />
								</Button>
								<Button variant="danger" onClick={handleLogout}>
									Log out
								</Button>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

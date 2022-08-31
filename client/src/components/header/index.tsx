import { AlertContext } from '@/context/alert/context'
import { Button } from '@/lib/ui'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import styles from './index.module.scss'

const Header = () => {
	const nav = useNavigate()

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.wrap}>
					<div className="logo" onClick={() => nav('/')}>
						React Blog
					</div>
					<div className={styles['header-btns']}>
						<Button variant="outlined" onClick={() => nav('/login')}>
							Log In
						</Button>
						<Button variant="primary">Register</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

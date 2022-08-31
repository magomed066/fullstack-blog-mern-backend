import { AlertContext } from '@/context/alert/context'
import { Button } from '@/lib/ui'
import { useContext } from 'react'
import styles from './index.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.wrap}>
					<div className="logo">React Blog</div>
					<div className={styles['header-btns']}>
						<Button type="outlined">Log In</Button>
						<Button type="primary">Register</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

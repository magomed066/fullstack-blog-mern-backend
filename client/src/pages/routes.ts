import Home from './home'
import Login from './login'
import Profile from './profile'

export const publicRoutes = [
	{ path: '/', Component: Home },
	{ path: '/login', Component: Login },
]

export const privateRoutes = [{ path: '/profile', Component: Profile }]

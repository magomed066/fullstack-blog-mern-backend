import AddPost from './add-post'
import Home from './home'
import Login from './login'
import PostDetails from './post'
import Profile from './profile'

export const publicRoutes = [
	{ path: '/', Component: Home },
	{ path: '/login', Component: Login },
	{ path: '/post/:id', Component: PostDetails },
]

export const privateRoutes = [
	{ path: '/profile', Component: Profile },
	{ path: '/addPost', Component: AddPost },
]

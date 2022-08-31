import { Alert } from '@/lib/ui'
import store, { useAppSelector } from '@/store'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import { publicRoutes, privateRoutes } from './routes'

const Routing = () => {
	const { user } = useAppSelector((store) => store.auth)
	const nav = useNavigate()

	useEffect(() => {
		if (!user) {
			nav('/', { replace: true })
		}
	}, [])

	return (
		<Routes>
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}

			{user &&
				privateRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
		</Routes>
	)
}

export default Routing

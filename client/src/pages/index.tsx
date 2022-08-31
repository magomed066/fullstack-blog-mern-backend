import { Alert } from '@/lib/ui'
import { useAppSelector } from '@/store'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import { publicRoutes, privateRoutes } from './routes'

const Routing = () => {
	const auth = useAppSelector((store) => store.auth.queries)
	const nav = useNavigate()

	useEffect(() => {
		if (!!!Object.values(auth).length) {
			nav('/', { replace: true })
		}
	}, [])

	return (
		<Routes>
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}

			{!!Object.values(auth).length &&
				privateRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
		</Routes>
	)
}

export default Routing

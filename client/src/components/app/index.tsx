import Header from '../header'
import '@/sass/index.scss'
import Routing from '@/pages'
import { BrowserRouter as Router } from 'react-router-dom'
import AlertContextProvider from '@/context/alert'

const App = () => {
	return (
		<Router>
			<AlertContextProvider>
				<div className="app">
					<Header />

					<div className="container">
						<Routing />
					</div>
				</div>
			</AlertContextProvider>
		</Router>
	)
}

export default App

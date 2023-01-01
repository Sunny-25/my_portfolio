import { useEffect, useState } from 'react'
import './App.css'
import FilterTabs from './components/filterTabs'
import Footer from './components/footer'
import Header from './components/header'

function App() {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
	}

	useEffect(() => {
		document.body.className = theme
		console.log(theme)
	}, [theme])

	return (
		<div>
			<i className={`${theme === 'light' ? 'ri-sun-line ' : 'ri-moon-line'} change-theme`} id="theme-btn" onClick={toggleTheme}></i>
			<Header />
			<FilterTabs />
			<Footer />
		</div>
	)
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FitFeastBanner } from './Components/FitFeastBanner'
import MacrosCalculator from './Components/MacrosCalculator'
import Recipe from './Components/Recipe'
import NavBar from './Components/NavBar'

const App = () => (
	<div className='App'>
		<NavBar />
		<FitFeastBanner />
		<MacrosCalculator />
		<Recipe />
	</div>
)

export default App

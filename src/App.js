import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MacrosCalculator from './Components/MacrosCalculator'
import Header from './Components/Header'

const App = () => (
	<div className='App'>
		<Header />
		<MacrosCalculator />
	</div>
)


export default App

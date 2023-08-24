import React, { useState, useEffect } from 'react'
import './styles/slogan.css'

const quotes = [
	'Eat Smart, Stay Fit!',
	'Maximize Every Ingredient.',
	'No Food Left Behind.',
	'Crafted For Your Cupboard.',
	'Calorie-Conscious Creations.',
	'Your Recipe, Your Rules.',
	'A Healthier You Starts Here.',
]

const Slogan = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
		}, 1570) // Change every 5 seconds

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='carousel'>
			<div className='carousel-inner'>
				<div className='quote'>{quotes[currentIndex]}</div>
			</div>
		</div>
	)
}

export default Slogan

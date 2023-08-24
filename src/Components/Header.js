import React, { useState, useEffect } from 'react'
import Background from '../assets/banner.mp4'
import Logo from '../assets/logo.png'
import { Container } from 'react-bootstrap'
import './styles/Header.css'

const quotes = [
	'Eat Smart, Stay Fit!',
	'Maximize Every Ingredient.',
	'No Food Left Behind.',
	'Crafted For Your Cupboard.',
	'Calorie-Conscious Creations.',
	'Your Recipe, Your Rules.',
	'A Healthier You Starts Here.',
]

const Header = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
		}, 5000) // Change every 5 seconds

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='header-container'>

			<video className='video-background' autoPlay loop muted playsInline>
				<source src={Background} type='video/mp4' />
			</video>
			<Container className='d-flex flex-column align-items-center justify-content-center'>
				<a href='/'>
					<img src={Logo} alt='FitFeast Logo' className='logo' />
				</a>
				<div className='quote-carousel'>
					<div className='quote'>{quotes[currentIndex]}</div>
				</div>
			</Container>
		</div>
	)
}

export default Header

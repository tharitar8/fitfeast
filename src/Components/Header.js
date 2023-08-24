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
		}, 1570) // Change every 5 seconds

		return () => clearInterval(interval)
	}, [])

	return (
		<div style={{ marginTop: '-50px' }}>
			<div style={{ position: 'relative', height: '600px' }}>
				<Container className='d-flex justify-content-center'>
					<a href='/'>
						<img
							src={Logo}
							alt='FitFeast Logo'
							style={{
								maxWidth: '300px',
								minWidth: '500px',
								width: '20vw',
								zIndex: 2,
							}}
						/>
					</a>
					{/* Slogan carousel */}
					<div
						className='carousel'
						style={{ zIndex: 1, position: 'absolute', bottom: '10%' }}>
						<div className='carousel-inner'>
							<div className='quote'>{quotes[currentIndex]}</div>
						</div>
					</div>

					{/* Video */}
					<video
						className='video-background'
						autoPlay
						loop
						muted
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '80%',
							objectFit: 'cover',
							opacity: 0.7,
							zIndex: -1,
						}}>
						<source src={Background} type='video/mp4' />
					</video>
				</Container>
			</div>
		</div>
	)
}

export default Header

import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHouseChimney,
	faPlaneUp,
	faImage,
} from '@fortawesome/free-solid-svg-icons'

import './styles/NavBar.css'

export const FitFeastNavBar = () => {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value)
	}

	return (
		<Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
			<Container>
				<Navbar.Brand href='#home'>
					<FontAwesomeIcon icon={faHouseChimney} size='sm' /> FitFeast
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						<Nav.Link
							href='#home'
							onClick={() => onUpdateActiveLink('home')}
							className={activeLink === 'home' ? 'active' : ''}>
							<FontAwesomeIcon icon={faHouseChimney} size='sm' /> Home
						</Nav.Link>
						<Nav.Link
							href='#calculator'
							onClick={() => onUpdateActiveLink('calculator')}
							className={activeLink === 'calculator' ? 'active' : ''}>
							<FontAwesomeIcon icon={faPlaneUp} size='sm' /> Calculate Recipe
						</Nav.Link>
						<Nav.Link
							href='#recipe'
							onClick={() => onUpdateActiveLink('recipe')}
							className={activeLink === 'recipe' ? 'active' : ''}>
							<FontAwesomeIcon icon={faImage} size='sm' /> Menu
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default FitFeastNavBar

import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import fitfeastImg from '../assets/img/fitfeast.png' 
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const FitFeastBanner = () => {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [text, setText] = useState('')
	const [delta, setDelta] = useState(100 - Math.random() * 2)
	const toRotate = [
		'Eat Smart, Stay Fit!',
		'Your Nutrition Partner',
		'A Healthier You Starts Here',
	]
	const period = 700

	useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)

		return () => {
			clearInterval(ticker)
		}
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length
		let fullText = toRotate[i]
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1)

		setText(updatedText)

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true)
			setDelta(period)
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setDelta(100)
		}
	}

	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='align-items-center'>
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}>
									<span className='tagline'>Welcome to FitFeast! 🥗</span>
									<h1>
										Join Our Healthy Journey
										<br />
										<span className='wrap'>{text}</span>
									</h1>
									<p>
										"Calculate, Eat, and Rejoice. Your Healthy Diet,
										Simplified."
									</p>
									<button onClick={() => console.log('Navigate to Contact')}>
										Get Started <ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									id='profile-pic'
									className={
										isVisible ? 'animate__animated animate__zoomIn' : ''
									}>
									{/* <img src={fitfeastImg} alt='FitFeast Img' /> */}
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

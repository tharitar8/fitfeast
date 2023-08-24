import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import './styles/NavBar.css';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
            <Container className="d-flex justify-content-center">
                <a href='/'>
                    <img
                        src={Logo}
                        alt='FitFeast Logo'
                        style={{
                            maxWidth: '300px',
                            minWidth: '150px',
                            width: '20vw',
                        }}
                    />
                </a>
            </Container>
        </Navbar>
    );
}

export default NavBar;

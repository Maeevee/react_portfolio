import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
    const [ActiveLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (Window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            window.addEventListener('scroll', onScroll);
            return () => window.removeEventListener('scroll', onScroll);
        }
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar className={scrolled ? 'scralled' : ''} expand="lg">
            <Container>
                <Navbar.Brand href="#home">Maria K.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={ActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('home')}}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={ActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('skills')}}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={ActiveLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('projects')}}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className='social-icon'>
                            <a href="https://github.com/Maeevee" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareGithub} size="2x" style={{color: "#7d689c",}}/></a>
                            <a href="https://www.linkedin.com/in/mariia-kiriakulova-2353a7241" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: "#7d689c",}}/></a>
                            <a href="mailto: mariya.kiryakulova@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareEnvelope} size="2x" style={{color: "#7d689c",}}/></a>
                            <a href="tel: +4407787387904" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquarePhone} size="2x" style={{color: "#7d689c",}}/></a>
                        </div>
                        <button className='contact' onClick={() => console.log('connect')}>
                            <span>Contact me</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar

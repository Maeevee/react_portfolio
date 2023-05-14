import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion } from "framer-motion";


const NavBar = () => {
    const [ActiveLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

const animateNav = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {type: 'spring', stiffnes: 1000, dumping: 740}
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {type: 'spring', stiffnes: 1000, delay: 0.3}
}}


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener('scroll', onScroll);
    
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <motion.div variants={animateNav} initial='hidden' whileInView='show'>
                    <Navbar.Brand href="#home">Maria K.</Navbar.Brand>
                </motion.div>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <motion.div className="ms-auto" variants={animateNav} initial='hidden' whileInView='show'>
                        <Nav className="ms-auto">
                            <Nav.Link href="#skills" className={ActiveLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('skills'); document.querySelector('.navbar-collapse').classList.remove('show')}}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={ActiveLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('projects'); document.querySelector('.navbar-collapse').classList.remove('show')}}>Projects</Nav.Link>
                            <Nav.Link href="#contact" className={ActiveLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('contact'); document.querySelector('.navbar-collapse').classList.remove('show')}}>Contacts</Nav.Link>
                        </Nav>
                    </motion.div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
}

export default NavBar

import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    const [ActiveLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

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
                <Navbar.Brand href="#home">Maria K.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#skills" className={ActiveLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('skills')}}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={ActiveLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('projects')}}>Projects</Nav.Link>
                        <Nav.Link href="#contact" className={ActiveLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('contact')}}>Contacts</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar

import { useState, useEffect, useRef, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/Intersectphoto.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import CV from '../assets/CV_Mariia_Kiriakulova.pdf';

const Jumbotron = () => {

    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const greeting = "Hello, I am Maria";
    const period = 2000;

    const tickerRef = useRef(null);

    const tick = useCallback(() => {
    const fullText = greeting;
    const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setDelta(500);
    }
    }, [greeting, isDeleting, text]);

    useEffect(() => {
    tickerRef.current = setInterval(() => {
        tick();
    }, delta);

    return () => clearInterval(tickerRef.current);
    }, [delta, tick]);



    const downloadCV = async() => {
        const link = document.createElement('a');
        link.href = CV;
        link.setAttribute('download', 'CV_Mariia_Kiriakulova.pdf');
        document.body.appendChild(link);
        link.click();
    }

    return (
        <section className="jumbotron" id="home">
        <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Hello, I am Maria" ]'><span className="wrap">{text}</span></span></h1>
                    <p>I'm an enthusiastic, motivated and detail-oriented Front-end Developer. I have a certain technical base and understanding of the main processes since I’ve studied biophysics and biochemistry at the university, I also consolidated all this knowledge and delved into Web Development at the Front-end Bootcamp.</p>
                    <p>However, what sets me apart is my ability to approach web development from a scientific and analytical standpoint. I am able to break down complex problems into smaller components and devise solutions based on evidence and data.</p>  
                    <p>Fast learner, hard worker and team player, passionate about building first-class websites.</p>
                    <button className='contact' onClick={downloadCV}>
                            <span>Download CV</span>
                        </button>
                </div>}
                </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        </section>
    )
}

export default Jumbotron
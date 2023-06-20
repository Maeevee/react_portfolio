import { useState, useEffect, useRef, useCallback } from "react";
import './Jumbotron.css';
import { FadeIn2 } from '../../utils/animation';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/Intersectphoto.png";
import CV from '../../assets/CV_Mariia_Kiriakulova.pdf';
import { motion } from "framer-motion";

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
                <motion.div viewport={{ once: true }}  variants={FadeIn2(1.1)} initial='hidden' whileInView='show'>
                    <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Hello, I am Maria" ]'><span className="wrap">{text}</span></span></h1>
                    <p>I'm an enthusiastic, motivated and detail-oriented Front-end Developer. I have a solid technical base and understanding of the main processes. I’ve studied biophysics and biochemistry at university. I consolidated this knowledge and delved into Web Development at the Front-end Bootcamp.</p>
                    <p>However, what sets me apart is my ability to approach web development from a scientific and analytical standpoint. I am able to break down complex problems into smaller components and devise solutions based on evidence and data.</p>  
                    <p>I am a fast learner, hard worker and team player, passionate about building first-class websites.</p>
                </motion.div>    
                <motion.div viewport={{ once: true }}  variants={FadeIn2(1.4)} initial='hidden' whileInView='show'>
                    <button className='contact' onClick={downloadCV}>
                        <span>Download CV</span>
                    </button>
                </motion.div>                
            </Col>
            <Col xs={12} md={6} xl={5}>
                    <motion.div viewport={{ once: true }}  variants={FadeIn2(1.1)} initial='hidden' whileInView='show'>
                    <img src={headerImg} alt="Header Img"/>
                    </motion.div>
            </Col>
            </Row>
        </Container>
        </section>
    )
}

export default Jumbotron
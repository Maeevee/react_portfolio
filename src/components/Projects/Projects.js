import React from 'react';
import './Projects.css';
import { FadeIn, FadeIn2 } from '../../utils/animation';
import { Container, Row, Col, } from "react-bootstrap";
import projImg1 from "../../assets/Personal-Portfolio.jpg";
import projImg2 from "../../assets/Personal-Website.jpg";
import projImg3 from "../../assets/sushi-restaurant.jpg";
import projImg4 from "../../assets/Password-Generator.jpg";
import projImg5 from "../../assets/Code-Quiz.jpg";
import projImg6 from "../../assets/Work-Day-Scheduler.jpg";
import projImg7 from "../../assets/Munchy.jpg";
import projImg8 from "../../assets/README-Generator.jpg";
import projImg9 from "../../assets/Team-Generator.jpg";
import projImg10 from "../../assets/ReadStream.jpg";
import projImg11 from "../../assets/Cinematica.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "HTML & CSS (Flexbox, Grid, Media Queries)",
            imgUrl: projImg1,
            summary: "This is a simple personal one-page portfolio",
            demo: "https://maeevee.github.io/MyPortfolio/",
            code: "https://github.com/Maeevee/MyPortfolio.git",
        },
        {
            title: "Personal Website",
            description: "Bootstrap",
            imgUrl: projImg2,
            summary: "It's a personal portfolio. It was done with Bootstrap (navbar, jumbotron, cards, buttons and form components)",
            demo: "https://maeevee.github.io/Bootstrap-Portfolio-Kiriakulova/",
            code: "https://github.com/Maeevee/Bootstrap-Portfolio-Kiriakulova.git",
        },
        {
            title: "Sushi Restaurant",
            description: "Sass",
            imgUrl: projImg3,
            summary: "This is a website for a sushi restaurant. The CSS code has been refactored using the Sass preprocessor to enhance the code's readability, efficiency and make it more maintainable",
            demo: "https://maeevee.github.io/Console-Finances/",
            code: "https://github.com/Maeevee/sushi-restaurant.git",
            },
        {
            title: "Password Generator",
            description: "Vanilla JavaScript",
            summary: "This project is a JavaScript password generator that generates a random password based on user-selected criteria",
            imgUrl: projImg4,
            demo: "https://maeevee.github.io/sushi-restaurant/",
            code: "https://github.com/Maeevee/Password-Generator.git",
        },
        {
            title: "Code Quiz",
            description: "JavaScript & Wed APIs",
            imgUrl: projImg5,
            summary: "This application is a basic implementation of a quiz game. It uses the DOM to select and manipulate elements from the HTML file, and a function to display questions and answers",
            demo: "https://maeevee.github.io/Code-Quiz/",
            code: "https://github.com/Maeevee/Code-Quiz.git",
        },
        {
            title: "Work Day Scheduler",
            description: "jQuery & Moment.js",
            imgUrl: projImg6,
            summary: "This is a JavaScript code for a daily planner application that allows users to plan their activities for the day",
            demo: "https://maeevee.github.io/Work-Day-Scheduler-by-Kiriakulova/",
            code: "https://github.com/Maeevee/Work-Day-Scheduler-by-Kiriakulova.git",
        },
        {
            title: "Munchy",
            description: "HTML, CSS, Bootstrap, jQuery & Server APIs",
            imgUrl: projImg7,
            summary: "The group project entails creating a website that empowers users to effortlessly search and seamlessly explore an extensive collection of recipes",
            demo: "https://maeevee.github.io/Munchy/",
            code: "https://github.com/Maeevee/Munchy",
        },
        {
            title: "README Generator",
            description: "ES6 & Node.js",
            imgUrl: projImg8,
            summary: "It's a command-line application that dynamically generates a professional README.md file from a user's input. Created with using Node.js and ES6 syntax",
            demo: "https://drive.google.com/file/d/1oggQQyKaFWSVfGlZJve232w4mqitewDK/view",
            code: "https://github.com/Maeevee/Professional-README-Generator-by-Kiriakulova.git",
        },
        {
            title: "Team Profile Generator",
            description: "JS, Node.js & Jest",
            imgUrl: projImg9,
            summary: "It's an application that generates HTML files using input from a command-line interface",
            demo: "https://github.com/Maeevee/Team-Profile-Generator-by-Kiriakulova/blob/main/output/team.html",
            code: "https://github.com/Maeevee/Team-Profile-Generator-by-Kiriakulova.git",
        },
        {
            title: "ReadStream",
            description: "React.js",
            imgUrl: projImg10,
            summary: "ReadStream is a user-friendly app that offers a wide range of books across different genres, making it easy for users to discover their next read",
            demo: "https://readstream.netlify.app/",
            code: "https://github.com/mateusuk/ReadStream.git",
        },
        {
            title: "Cinematica",
            description: "React.js & Typescript",
            imgUrl: projImg11,
            summary: "It's an app that keeps you up to date with the latest cinema releases, allowing you to search for movies, get information about it, watch trailers, read reviews and add them to watchlist",
            demo: "https://maevee-cinematica.netlify.app/home",
            code: "https://github.com/Maeevee/Cinematica.git",
        },
    ];

    return (
        <motion.section viewport={{ once: true }}  variants={FadeIn('up', 'tween', 0, 0.8)} initial='hidden' whileInView='show'  className="project" id="projects">
        <Container>
            <Row>
            <Col size={12} className='col'>
                <div >
                    <motion.h2 viewport={{ once: true }}  variants={FadeIn2(1)} initial='hidden' whileInView='show'>Projects</motion.h2>
                    <Container>
                        <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                    <Col key={index} size={12} sm={12} md={6} lg={4}>
                                        <motion.div viewport={{ once: true }}  variants={FadeIn2(1.2)} initial='hidden' whileInView='show' className="proj-imgbx">
                                            <img src={project.imgUrl} alt='Project Card'/>
                                            <div className="proj-txtx">
                                                <h4>{project.title}</h4>
                                                <p>{project.description}</p>
                                                <p>{project.summary}</p>
                                                <div className="cardButons">
                                                    <a href={project.demo} target='_blank' rel="noreferrer"><button className='proj-button'>Demo</button></a> 
                                                    <a href={project.code} target='_blank' rel="noreferrer"><button className='proj-button'>Code</button></a>
                                                </div>
                                                
                                            </div>
                                        </motion.div>
                                    </Col>
                                )
                            })
                            }
                        </Row>
                    </Container>
                </div>
            </Col>
            </Row>
        </Container>
        </motion.section>
    )
}

export default Projects

import React from 'react';
import { Container, Row, Col, } from "react-bootstrap";
import projImg1 from "../assets/Personal-Portfolio.jpg";
import projImg2 from "../assets/Personal-Website.jpg";
// import projImg3 from "../assets/Finance-Dashboard.jpg";
import projImg4 from "../assets/Password-Generator.jpg";
import projImg5 from "../assets/Code-Quiz.jpg";
// import projImg6 from "../assets/Work-Day-Scheduler.jpg";
import projImg7 from "../assets/Munchy.jpg";
import projImg8 from "../assets/README-Generator.jpg";
import projImg9 from "../assets/Team-Generator.jpg";
import projImg10 from "../assets/ReadStream.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "HTML & CSS",
            imgUrl: projImg1,
            demo: "https://maeevee.github.io/MyPortfolio/",
            code: "https://github.com/Maeevee/MyPortfolio.git",
        },
        {
            title: "Personal Website",
            description: "Bootstrap",
            imgUrl: projImg2,
            demo: "https://maeevee.github.io/Bootstrap-Portfolio-Kiriakulova/",
            code: "https://github.com/Maeevee/Bootstrap-Portfolio-Kiriakulova.git",
        },
        // {
        //     title: "Finance Dashboard",
        //     description: "HTML,CSS & Javascript",
        //     imgUrl: projImg1,
        //     demo: "https://maeevee.github.io/Console-Finances/",
        //     code: "https://github.com/Maeevee/Console-Finances.git",
        //     },
        {
            title: "Password Generator",
            description: "Vanilla JavaScript",
            imgUrl: projImg4,
            demo: "https://maeevee.github.io/Password-Generator/",
            code: "https://github.com/Maeevee/Password-Generator.git",
        },
        {
            title: "Code Quiz",
            description: "JavaScript & Wed APIs",
            imgUrl: projImg5,
            demo: "https://maeevee.github.io/Code-Quiz/",
            code: "https://github.com/Maeevee/Code-Quiz.git",
        },
        // {
        // title: "Work Day Scheduler",
        // description: "jQuery & Moment.js",
        // imgUrl: projImg6,
        // demo: "https://maeevee.github.io/Work-Day-Scheduler-by-Kiriakulova/",
        // code: "https://github.com/Maeevee/Work-Day-Scheduler-by-Kiriakulova.git",
        // },
        {
            title: "Munchy",
            description: "HTML, CSS, Bootstrap, jQuery & Server APIs",
            imgUrl: projImg7,
            demo: "https://maeevee.github.io/Munchy/",
            code: "https://github.com/Maeevee/Munchy",
        },
        {
            title: "README Generator",
            description: "ES6 & Node.js",
            imgUrl: projImg8,
            demo: "https://drive.google.com/file/d/1oggQQyKaFWSVfGlZJve232w4mqitewDK/view",
            code: "https://github.com/Maeevee/Professional-README-Generator-by-Kiriakulova.git",
        },
        {
            title: "Team Profile Generator",
            description: "JS, Node.js & Tests",
            imgUrl: projImg9,
            demo: "https://github.com/Maeevee/Team-Profile-Generator-by-Kiriakulova/blob/main/output/team.html",
            code: "https://github.com/Maeevee/Team-Profile-Generator-by-Kiriakulova.git",
        },
        {
            title: "ReadStream",
            description: "React.js",
            imgUrl: projImg10,
            demo: "https://readstream.netlify.app/",
            code: "https://github.com/mateusuk/ReadStream.git",
        },
        // {
        // title: "Business Startup",
        // description: "Design & Development",
        // imgUrl: projImg1,
        // demo: "",
        // code: "",
        // },
    ];
    
    return (
        <section className="project" id="projects">
        <Container>
            <Row>
            <Col size={12} className='col'>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <Container>
                        <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                    <Col key={index} size={12} sm={6} md={4}>
                                        <div className="proj-imgbx">
                                            <img src={project.imgUrl} alt='Project Card'/>
                                            <div className="proj-txtx">
                                                <h4>{project.title}</h4>
                                                <span>{project.description}</span>
                                                <div className="cardButons">
                                                    <a href={project.demo} target='_blank' rel="noreferrer"><button className='button-29'>Demo</button></a> 
                                                    <a href={project.code} target='_blank' rel="noreferrer"><button className='button-29'>Code</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                            }
                        </Row>
                    </Container>
                </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        </section>
    )
}

export default Projects

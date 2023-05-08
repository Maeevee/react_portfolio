import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/Rectangle.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contacts = () => {

    const formInitialDetails = {
        Name: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            firstName: formDetails.Name,
            email: formDetails.email,
            phone: formDetails.phone,
            message: formDetails.message
        }),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            toast.success('Message sent successfully', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        } else {
            toast.error('Something went wrong, please try again later.', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    };


    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility offset={50}>
                        {({ isVisible }) =>
                            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility >
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <h2>Contact me</h2>
                            <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={12} className="px-1">
                                <input type="text" value={formDetails.Name} placeholder="Name" onChange={(e) => onFormUpdate('Name', e.target.value)} required/>
                                </Col>
                                <Col size={12} sm={12} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                                </Col>
                                <Col size={12} sm={12} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col size={12} className="px-1">
                                <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                                <button className="submitButton" type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="ToastContainerParent">
                                        <ToastContainer toastClassName="toast-container" bodyClassName="toast-body"
                                            position="bottom-center"
                                            autoClose={3000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick={true}
                                            rtl={false}
                                            pauseOnFocusLoss={true}
                                            draggable={true}
                                            pauseOnHover={true}
                                            theme="dark"
                                        />
                                </Col>
                            </Row>
                            
                            </form>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contacts
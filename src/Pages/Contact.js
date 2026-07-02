import Layout from "../Components/Layout";
import {
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaFacebook,
} from "react-icons/fa";
import "../Assets/Css/Contact.css";


function Contact() {
    return (
        <Layout title="Contact">
            <div className="line"></div>

            {/* Hero */}
            <div className="contactCard">
                <h1 className="contactTitle">
                    Let's Build Something <br /> Great Together
                </h1>

                <p className="contactText">
                    I'm currently accepting new projects and collaborations, <br></br>with a
                    special interest in impactful and challenging work.<br></br>
                    Have a project in mind, a question, or just want to connect?<br></br>
                    My inbox is always open, and I'd love to hear from you.
                </p>
            </div>

            {/* Social */}
            <div className="contactCard socialCard">
                <p className="socialTitle">
                    Get in touch with me via social media or send me an email.
                </p>

                <div className="socialLinks">

                    <a href="#">
                        <FaFacebook />
                    </a>

                    <a href="#">
                        <FaLinkedin />
                    </a>

                    <a href="#">
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <div className="contactCard">
                <p className="emailTitle">
                    Send me an email
                </p>
                <form className="contactForm">
                    <div className="leftInputs">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>

                    </div>


                    <div className="buttonContainer">
                        <button type="submit">Send Email</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Contact;
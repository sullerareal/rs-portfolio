
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Layout from "../Components/Layout";
import {
    FaLinkedin,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";

import "../Assets/Css/Contact.css";

function Contact() {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            // 1. Send the visitor's message to your Gmail
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            // 2. Send an automatic reply to the visitor
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            // Both emails were successfully sent
            setStatus("success");
            form.current.reset();

        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");

        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout title="Contact">
            <div className="line"></div>

            {/* Hero */}
            <div className="contactCard">
                <h1 className="contactTitle">
                    Let's Build Something <br />
                    Great Together
                </h1>

                <p className="contactText">
                    I'm currently accepting new projects and collaborations,
                    with a special interest in impactful and challenging work.
                    <br />
                    Have a project in mind, a question, or just want to connect?
                    <br />
                    My inbox is always open, and I'd love to hear from you.
                </p>
            </div>

            {/* Social */}
            <div className="contactCard socialCard">
                <p className="socialTitle">
                    Get in touch with me via social media or send me an email.
                </p>

                <div className="socialLinks">
                    <a href="#" aria-label="Facebook">
                        <FaFacebook />
                    </a>

                    <a href="#" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>

                    <a href="#" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <div className="contactCard">
                <p className="emailTitle">
                    Send me an email
                </p>

                <form
                    ref={form}
                    className="contactForm"
                    onSubmit={sendEmail}
                >
                    <div className="leftInputs">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            required
                        ></textarea>
                    </div>

                    <div className="buttonContainer">
                        <button type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Email"}
                        </button>
                    </div>

                    {status === "success" && (
                        <p className="emailSuccess">
                            Your message has been sent successfully!
                            A confirmation email has also been sent to you.
                        </p>
                    )}

                    {status === "error" && (
                        <p className="emailError">
                            Something went wrong. Please try again later.
                        </p>
                    )}
                </form>
            </div>
        </Layout>
    );
}

export default Contact;

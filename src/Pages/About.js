import Layout from "../Components/Layout";
import "../Assets/Css/About.css";

function About() {
    return (
        <Layout title="About Me">

            <div className="line"></div>

            <div className="aboutCard">
                <p>
                    Hello there! 👋 My name is Real...
                </p>
            </div>

            <h2 className="sectionTitle">
                Primary Focus
            </h2>

            <div className="grid">

                <div className="card">
                    <h3>Web Design</h3>
                    <p>Creating attractive websites.</p>
                </div>

                <div className="card">
                    <h3>Full Stack</h3>
                    <p>Building scalable applications.</p>
                </div>

                <div className="card">
                    <h3>Mobile Apps</h3>
                    <p>Android and iOS applications.</p>
                </div>

                <div className="card">
                    <h3>Marketing</h3>
                    <p>SEO and digital marketing.</p>
                </div>

            </div>

        </Layout>
    );
}

export default About;
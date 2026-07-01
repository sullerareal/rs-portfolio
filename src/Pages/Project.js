import Layout from "../Components/Layout";
import "../Assets/Css/Project.css";

function Project() {
    return (
        <Layout title="Projects">

            <div className="line"></div>

            <div className="aboutCard">
                <p>
                    Here are some of the projects I've worked on.
                </p>
            </div>

            <div className="grid">

                <div className="card">
                    <h3>Portfolio Website</h3>
                    <p>Personal portfolio built with React.</p>
                </div>

                <div className="card">
                    <h3>POS System</h3>
                    <p>Point of Sale system for small businesses.</p>
                </div>

                <div className="card">
                    <h3>Inventory System</h3>
                    <p>Inventory management with reporting.</p>
                </div>

                <div className="card">
                    <h3>Mobile App</h3>
                    <p>Cross-platform mobile application.</p>
                </div>

            </div>

        </Layout>
    );
}

export default Project;
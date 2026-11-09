
import Layout from "../Components/Layout";
import "../Assets/Css/About.css";

import {
    FaCode,
    FaDatabase,
    FaTools,
    FaLaptopCode,
    FaDesktop,
    FaServer
} from "react-icons/fa";

function About() {

    const focusAreas = [
        {
            icon: <FaCode />,
            title: "Software Development",
            description:
                "Participating in system development, module creation, and improving existing applications."
        },
        {
            icon: <FaTools />,
            title: "Technical Support",
            description:
                "Troubleshooting application issues and assisting end users with their technical concerns."
        },
        {
            icon: <FaDatabase />,
            title: "Database Support",
            description:
                "Working with SQL queries, updating database records, and assisting with database-related issues."
        },
        {
            icon: <FaLaptopCode />,
            title: "UI Development",
            description:
                "Creating and modifying user interfaces to improve usability and overall user experience."
        },
        {
            icon: <FaServer />,
            title: "Application Maintenance",
            description:
                "Maintaining existing enterprise systems and helping ensure their reliable operation."
        },
        {
            icon: <FaDesktop />,
            title: "System Troubleshooting",
            description:
                "Investigating system errors, identifying possible issues, and providing appropriate solutions."
        }
    ];

    return (
        <Layout title="About Me">

            <div className="line"></div>

            {/* About Introduction */}
            <div className="aboutCard">

                {/* <span className="aboutLabel">
                    GET TO KNOW ME
                </span> */}

                <h1>
                    Hello there! I'm <span>Reyal</span>
                </h1>

                <p>
                    I'm a Software Developer with experience in
                    enterprise application support, system maintenance,
                    module development, and database-related tasks.

                    <br /><br />

                    Currently, I work with different enterprise systems
                    where I help troubleshoot application issues,
                    assist end users, contribute to system improvements,
                    and provide basic SQL and database support.

                    <br /><br />

                    I also have experience in developing user interfaces
                    and contributing to academic software projects.
                    I'm continuously learning and improving my skills
                    to become a better developer.
                </p>

            </div>

            {/* Primary Focus */}
            <div className="focusHeader">
                {/* <span className="aboutLabel">
                    WHAT I DO
                </span> */}

                <h2 className="sectionTitle">
                    Primary Focus
                </h2>

                <p>
                    These are the areas where I have gained experience
                    through my professional work and academic projects.
                </p>
            </div>

            <div className="grid">

                {focusAreas.map((area, index) => (
                    <div className="card" key={index}>

                        <div className="focusIcon">
                            {area.icon}
                        </div>

                        <h3>{area.title}</h3>

                        <p>{area.description}</p>

                    </div>
                ))}

            </div>

        </Layout>
    );
}

export default About;

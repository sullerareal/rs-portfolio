
import Layout from "../Components/Layout";
import "../Assets/Css/Project.css";
import SSS from "../Assets/Images/SSS.png";

import {
    FaTools,
    FaCode,
    FaDatabase,
    FaLaptopCode,
    FaPalette,
    FaMobileAlt,
    FaDesktop
} from "react-icons/fa";

function Project() {

    const projects = [
        {
            title: "PDIC",
            category: "APPLICATION SUPPORT",
            description:
                "Provided application support by investigating and resolving issues encountered by end users while using the existing system.",
            contributions: [
                "End-user technical support",
                "Application troubleshooting",
                "Issue investigation",
                "System maintenance"
            ],
            image: SSS,
            icon: <FaTools />
        },
        {
            title: "ARIS Rebuild",
            category: "MODULE DEVELOPMENT",
            description:
                "Participated in the rebuilding of the ARIS system by contributing to the development of one of its modules and making modifications to existing user interfaces.",
            contributions: [
                "Module development",
                "UI modifications",
                "Application enhancement"
            ],
            image: SSS,
            icon: <FaCode />
        },
        {
            title: "SSS",
            category: "ONSITE TECHNICAL SUPPORT",
            description:
                "Provided onsite technical support by assisting users with daily system issues and helping address database-related concerns.",
            contributions: [
                "Onsite technical support",
                "Database troubleshooting",
                "SQL support",
                "Daily issue resolution"
            ],
            image: SSS,
            icon: <FaDatabase />
        },
        {
            title: "Attendance Monitoring System",
            category: "ACADEMIC THESIS PROJECT",
            description:
                "Contributed to the development of an Attendance Monitoring System for an academic thesis project, focusing on designing and developing its user interface.",
            contributions: [
                "User interface development",
                "UI design",
                "System layout"
            ],
            image: SSS,
            icon: <FaLaptopCode />
        }
    ];

    // Tutorial-based UI/UX practice designs
    const designProjects = [
        {
            title: "Login Page Design",
            category: "TUTORIAL-BASED PRACTICE",
            description:
                "A login page interface created while following a design tutorial to practice layout, typography, and form design.",
            tools: ["Figma", "UI Design"],
            icon: <FaDesktop />
        },
        {
            title: "Dashboard UI Design",
            category: "TUTORIAL-BASED PRACTICE",
            description:
                "A dashboard interface recreated as a learning exercise to explore dashboard layouts, visual hierarchy, and component arrangement.",
            tools: ["Figma", "Dashboard UI"],
            icon: <FaLaptopCode />
        },
        {
            title: "Mobile App UI Design",
            category: "TUTORIAL-BASED PRACTICE",
            description:
                "A mobile application interface created through tutorial-based practice to learn mobile layouts and user interface elements.",
            tools: ["Figma", "Mobile UI"],
            icon: <FaMobileAlt />
        },
        {
            title: "Website UI Design",
            category: "TUTORIAL-BASED PRACTICE",
            description:
                "A website interface design created while learning modern web layouts, spacing, typography, and visual design principles.",
            tools: ["Figma", "Web Design"],
            icon: <FaPalette />
        }
    ];

    return (
        <Layout title="Projects">

            <div className="line"></div>

            {/* PAGE INTRODUCTION */}
            {/* <div className="projectHeader">
                <span className="projectLabel">
                    MY WORK & CONTRIBUTIONS
                </span>

                <h1>
                    Projects & <span>System Contributions</span>
                </h1>

                <p>
                    Here are the systems and projects I have been
                    involved in throughout my professional and
                    academic experience. My contributions include
                    application support, module development,
                    UI enhancements, and technical support.
                </p>
            </div> */}

            {/* PROFESSIONAL AND ACADEMIC PROJECTS */}
            <div className="projectSection">

                <h2 className="projectSectionTitle">
                    Professional & Academic Contributions
                </h2>

                <p className="projectSectionDescription">
                    Systems I have worked with through my professional
                    experience and academic projects.
                </p>

                <div className="projectGrid">

                    {projects.map((project, index) => (
                        <div className="projectCard" key={index}>

                            <div className="projectImage">

                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        className="projectScreenshot"
                                    />
                                ) : (
                                    <>
                                        <span className="projectImageIcon">
                                            {project.icon}
                                        </span>

                                        <span className="imagePlaceholderText">
                                            Project Screenshot
                                        </span>
                                    </>
                                )}

                            </div>

                            <div className="projectInfo">

                                <span className="projectCategory">
                                    {project.category}
                                </span>

                                <h2>{project.title}</h2>

                                <p className="projectDescription">
                                    {project.description}
                                </p>

                                <h4>My Contributions</h4>

                                <div className="contributionTags">
                                    {project.contributions.map(
                                        (item, i) => (
                                            <span key={i}>
                                                {item}
                                            </span>
                                        )
                                    )}
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

            {/* UI/UX PRACTICE DESIGNS */}
            <div className="projectSection designSection">

                <div className="designHeader">

                    <span className="projectLabel">
                        PERSONAL LEARNING & PRACTICE
                    </span>

                    <h2 className="projectSectionTitle">
                        UI/UX Design Explorations
                    </h2>

                    <p className="projectSectionDescription">
                        These are UI/UX designs I created while following
                        online tutorials and exploring different
                        interface layouts. These practice projects
                        help me improve my design skills and
                        understanding of user experience.
                    </p>

                </div>

                <div className="projectGrid">

                    {designProjects.map((design, index) => (
                        <div className="projectCard designCard" key={index}>

                            <div className="projectImage">

                                <span className="projectImageIcon">
                                    {design.icon}
                                </span>

                                <span className="imagePlaceholderText">
                                    Design Preview
                                </span>

                            </div>

                            <div className="projectInfo">

                                <span className="projectCategory">
                                    {design.category}
                                </span>

                                <h2>{design.title}</h2>

                                <p className="projectDescription">
                                    {design.description}
                                </p>

                                <h4>Tools & Focus</h4>

                                <div className="contributionTags">
                                    {design.tools.map((tool, i) => (
                                        <span key={i}>{tool}</span>
                                    ))}
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </Layout>
    );
}

export default Project;

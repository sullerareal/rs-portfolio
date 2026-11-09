
import Layout from "../Components/Layout";
import "../Assets/Css/Experience.css";

import {
    FaBriefcase,
    FaCode,
    FaDatabase,
    FaTools,
    FaLaptopCode,
    FaCheckCircle,
} from "react-icons/fa";

function Experience() {
    return (
        <Layout title="Experience">
            <div className="line"></div>

            <div className="experienceContainer">

                {/* Introduction */}
                {/* <div className="experienceHeader">
                    <span className="experienceLabel">
                        MY PROFESSIONAL JOURNEY
                    </span>

                    <h1>
                        Work Experience
                    </h1>

                    <p>
                        My professional experience in software development,
                        application maintenance, technical support, and
                        basic SQL support.
                    </p>
                </div> */}

                {/* Current Employment */}
                <div className="experienceCard">

                    <div className="experienceTimeline">
                        <div className="timelineIcon">
                            <FaBriefcase />
                        </div>
                        <div className="timelineLine"></div>
                    </div>

                    <div className="experienceContent">

                        <div className="experienceTop">
                            <div>
                                <span className="employmentStatus">
                                    <span className="statusDot"></span>
                                    CURRENTLY WORKING
                                </span>

                                <h2>Software Developer</h2>

                                <h3>
                                    Systems and Software Consulting Group Incorporated
                                </h3>
                            </div>

                            <span className="experienceDate">
                                Present
                            </span>
                        </div>

                        <p className="experienceDescription">
                            Working with enterprise applications,
                            contributing to software development,
                            providing technical support, and assisting
                            with database-related tasks to help maintain
                            reliable system operations.
                        </p>

                        <h4>Key Responsibilities</h4>

                        <div className="responsibilityList">

                            <div className="responsibilityItem">
                                <FaCode />
                                <div>
                                    <strong>Application Development</strong>
                                    <p>
                                        Participated in developing system
                                        modules and improving existing
                                        user interfaces.
                                    </p>
                                </div>
                            </div>

                            <div className="responsibilityItem">
                                <FaTools />
                                <div>
                                    <strong>Technical Support</strong>
                                    <p>
                                        Investigated application issues,
                                        troubleshot errors, and assisted
                                        end users with system-related
                                        concerns.
                                    </p>
                                </div>
                            </div>

                            <div className="responsibilityItem">
                                <FaDatabase />
                                <div>
                                    <strong>Basic SQL Support</strong>
                                    <p>
                                        Assisted with basic SQL tasks,
                                        including updating existing database
                                        records and correcting data based
                                        on authorized user requests.
                                    </p>
                                </div>
                            </div>

                            <div className="responsibilityItem">
                                <FaLaptopCode />
                                <div>
                                    <strong>System Maintenance</strong>
                                    <p>
                                        Helped maintain existing enterprise
                                        applications and resolve operational
                                        issues.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Systems */}
                        <h4 className="systemsHeading">
                            Systems Involved
                        </h4>

                        <div className="systemTags">
                            <span>PDIC</span>
                            <span>ARIS Rebuild</span>
                            <span>SSS</span>
                        </div>

                    </div>
                </div>

                {/* Academic Experience */}
                <div className="experienceCard academicCard">

                    <div className="experienceTimeline">
                        <div className="timelineIcon academicIcon">
                            <FaLaptopCode />
                        </div>
                    </div>

                    <div className="experienceContent">

                        <div className="experienceTop">
                            <div>
                                <span className="experienceCategory">
                                    ACADEMIC PROJECT
                                </span>

                                <h2>UI Developer</h2>

                                <h3>Attendance Monitoring System</h3>
                            </div>

                            <span className="experienceDate">
                                Thesis Project
                            </span>
                        </div>

                        <p className="experienceDescription">
                            Contributed to the development of an
                            Attendance Monitoring System for an
                            academic thesis project, focusing on
                            designing and developing its user interface.
                        </p>

                        <div className="responsibilityItem">
                            <FaCheckCircle />
                            <div>
                                <strong>UI Development</strong>
                                <p>
                                    Designed and developed the system's
                                    user interface to provide a clear
                                    and user-friendly experience.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Experience;

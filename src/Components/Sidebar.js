import { useState } from "react";
import profile from "../Assets/Images/rs1.png";      // Profile picture
import profileFull from "../Assets/Images/rs.png"; // Full picture for modal
import reactLogo from "../Assets/Images/TechStack/react.webp";
import htmlLogo from "../Assets/Images/TechStack/html.webp";
import cssLogo from "../Assets/Images/TechStack/css.webp";
import figmaLogo from "../Assets/Images/TechStack/figma.webp";
import gitLogo from "../Assets/Images/TechStack/git.webp";
import javascriptLogo from "../Assets/Images/TechStack/javascript.webp";
import mysqlLogo from "../Assets/Images/TechStack/mysql.svg";
import nodejsLogo from "../Assets/Images/TechStack/nodejs.svg";
import ssmsLogo from "../Assets/Images/TechStack/ssms.png";

import "../Assets/Css/Sidebar.css";
import {
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaGithub,
    FaFile,
} from "react-icons/fa";

function Sidebar() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="container1">
                <img
                    className="profile"
                    src={profile}
                    alt="Real Sullera"
                    onClick={() => setShowModal(true)}
                />

                <h2>Real Sullera</h2>

                <div className="badge">
                    Software Developer
                </div>

                <hr className="divider" />

                <div className="info">

                    <div className="techStack">
                        <span>TECH STACK</span>

                        <div className="stackIcons">
                            <div className="tech">
                                <img
                                    src={htmlLogo}
                                    alt="HTML"
                                    className="tech-logo"
                                />
                                <p>HTML</p>
                            </div>

                            <div className="tech">
                                <img
                                    src={cssLogo}
                                    alt="CSS"
                                    className="tech-logo"
                                />
                                <p>CSS</p>
                            </div>

                            <div className="tech">
                                <img
                                    src={reactLogo}
                                    alt="React"
                                    className="tech-logo"
                                />
                                <p>React</p>
                            </div>

                            <div className="tech">
                                <img
                                    src={javascriptLogo}
                                    alt="JavaScript"
                                    className="tech-logo"
                                />
                                <p>JavaScript</p>
                            </div>

                            <div className="tech">
                                <img
                                    src={nodejsLogo}
                                    alt="Node.js"
                                    className="tech-logo"
                                />
                                <p>Node.js</p>
                            </div>

                            <div className="tech">
                                <img
                                    src={figmaLogo}
                                    alt="Figma"
                                    className="tech-logo"
                                />
                                <p>Figma</p>
                            </div>

                            <div className="tech">
                                <img
                                    src={gitLogo}
                                    alt="Git"
                                    className="tech-logo"
                                />
                                <p>Git</p>
                            </div>


                            <div className="tech">
                                <img
                                    src={ssmsLogo}
                                    alt="SQL Server"
                                    className="tech-logo"
                                />
                                <p>SQL Server</p>
                            </div>


                            <div className="tech">
                                <img
                                    src={mysqlLogo}
                                    alt="MySQL"
                                    className="tech-logo  mysql-logo"
                                />
                                <p>MySQL</p>
                            </div>
                        </div>
                    </div>

                </div>

                <hr className="divider" />

                <div className="info">
                    <div className="techStack">
                        <div className="stackIcons1">

                            <div className="tech1">
                                <FaGithub />
                            </div>
                            <div className="tech1">
                                <FaFacebook />
                            </div>
                            <div className="tech1">

                                <FaLinkedin />
                            </div>
                            <div className="tech1">

                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <div className="downloadCv">
                        <FaFile />
                        <p>Download CV</p>
                    </div>
                </div>

            </div>



            {showModal && (
                <div
                    className="modal-overlay"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={profileFull}
                            alt="Real Sullera"
                            className="modal-image"
                        />

                        <p className="modal-note">
                            Click anywhere outside the picture to close.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Sidebar;
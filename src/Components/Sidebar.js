import { useState } from "react";
import profile from "../Assets/Images/rs1.png";      // Profile picture
import profileFull from "../Assets/Images/rs.png"; // Full picture for modal
import "../Assets/Css/Sidebar.css";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaFigma,
    FaGitAlt,
    FaJsSquare,
    FaNodeJs,
    FaDatabase,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaGithub,
    FaFile,
    FaFileDownload
} from "react-icons/fa";

import {
    SiMysql,
    SiMicrosoftsqlserver,
} from "react-icons/si";

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
                                <FaHtml5 />
                                <p>HTML</p>
                            </div>

                            <div className="tech">
                                <FaCss3Alt />
                                <p>CSS</p>
                            </div>

                            <div className="tech">
                                <FaReact />
                                <p>React</p>
                            </div>

                            <div className="tech">
                                <FaJsSquare />
                                <p>JavaScript</p>
                            </div>

                            <div className="tech">
                                <FaNodeJs />
                                <p>Node.js</p>
                            </div>

                            <div className="tech">
                                <SiMysql />
                                <p>MySQL</p>
                            </div>

                            <div className="tech">
                                <FaDatabase />
                                <p>SQL Server</p>
                            </div>

                            <div className="tech">
                                <FaFigma />
                                <p>Figma</p>
                            </div>

                            <div className="tech">
                                <FaGitAlt />
                                <p>Git</p>
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
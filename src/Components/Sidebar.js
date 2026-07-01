import { useState } from "react";
import profile from "../Assets/Images/rs.png";
import "../Assets/Css/Sidebar.css";

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
                    Hello, World!
                </div>

                <div className="info">
                    <div className="item">
                        <span>AGE</span>
                        <p>26 years old</p>
                    </div>

                    <div className="item">
                        <span>LOCATION</span>
                        <p>Philippines</p>
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
                            src={profile}
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
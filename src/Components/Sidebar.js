import profile from "../Assets/Images/rs.png";
import "../Assets/Css/Sidebar.css";

function Sidebar() {
    return (
        <div className="container1">
            <img
                className="profile"
                src={profile}
                alt="Real Sullera"
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
    );
}

export default Sidebar;
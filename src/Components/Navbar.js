import { NavLink } from "react-router-dom";
import "../Assets/Css/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">

            <NavLink
                to="/"
                end
                className={({ isActive }) => isActive ? "active" : ""}
            >
                About
            </NavLink>

            <NavLink
                to="/project"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Projects
            </NavLink>

            <NavLink
                to="/sidequest"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Side Quest
            </NavLink>

            <NavLink
                to="/certificate"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Certificates
            </NavLink>

            <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Contact
            </NavLink>

        </div>
    );
}

export default Navbar;
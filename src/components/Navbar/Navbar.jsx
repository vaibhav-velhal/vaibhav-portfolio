import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from "../../context/ThemeContext";
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const themeButton = (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );

    return (
        <nav
            className="navbar navbar-expand-lg fixed-top"
            aria-label="Primary Navigation"
        >
            <a href="/" className="navbar-brand fw-semibold">
                VAIBHAV VELHAL
            </a>

            <div className="d-flex align-items-center gap-3">
                <div className="d-block d-lg-none">
                    {themeButton}
                </div>
                <div
                    className={`hamburger ${isOpen ? "active" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div
                className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}
                id="navbarNav"
            >
                <ul className="navbar-nav align-items-center gap-1 gap-md-4 m-2 m-lg-0">
                    <li className="nav-item m-1 m-lg-0">
                        <NavLink to="/" onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item m-1 m-lg-0">
                        <NavLink to="/About" onClick={() => setIsOpen(false)}>
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item m-1 m-lg-0">
                        <NavLink to="/Contact" onClick={() => setIsOpen(false)}>
                            Contact
                        </NavLink>
                    </li>

                    <li className="nav-item theme-btn m-1 m-lg-0 d-none d-lg-block">
                        {themeButton}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
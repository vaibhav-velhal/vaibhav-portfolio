import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg fixed-top"
            aria-label="Primary Navigation">
            <a href="/" className="navbar-brand fw-semibold text-dark">Vaibhav Velhal</a>

            <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
            </div>

            <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`} id="navbarNav">
                <ul className="navbar-nav gap-1 gap-md-4 m-2 m-lg-0">
                    <li className="nav-item m-1 m-lg-0"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-item m-1 m-lg-0"><NavLink to="/About">About</NavLink></li>
                    <li className="nav-item m-1 m-lg-0"><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
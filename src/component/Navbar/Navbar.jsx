import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return(
        <nav className="navbar navbar-expand-lg fixed-top"
        aria-label="Primary Navigation">
            <a href="/" className="navbar-brand fw-semibold text-dark">Vaibhav Velhal</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
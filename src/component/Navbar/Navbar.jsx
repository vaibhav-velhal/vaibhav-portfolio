import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return(
        <nav className="navbar navbar-expand-lg fixed-top border border-secondary border-opacity-25 shadow rounded-3">
            <a href="/" className="navbar-brand fw-semibold text-dark">Vaibhav Velhal</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-1 gap-md-4">
                        <li className="nav-item fw-semibold"><Link to="/">Home</Link></li>
                        <li className="nav-item fw-semibold"><Link to="/About">About</Link></li>
                        <li className="nav-item fw-semibold"><Link to="/Contact">Contact</Link></li>
                    </ul>
            </div>
        </nav>
    )

}

export default Navbar;
import {Link} from 'react-router-dom';

function Navbar() {

    return(
        <nav className="navbar navbar-expand-lg bg-secondary bg-opacity-25 
        border border-secondary border-opacity-25 m-3 px-4 shadow rounded">
            <a href="/" className="navbar-brand fw-semibold text-dark">V-V Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="offcanvas offcanvas-end w-50" id="navbarNav">
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                        <li className="nav-item fw-semibold"><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;
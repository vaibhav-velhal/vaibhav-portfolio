import {Link} from 'react-router-dom';

function Navbar() {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary bg-opacity-75 m-2 rounded px-4">
            <a href="/" className="navbar-brand fw-semibold">V-V Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className='navbar-nav'>
                    <li className="nav-item fw-semibold"><Link to="/">Home</Link></li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className='p-3 pb-1'>
            <div className="social-links text-light">
                <FaLinkedin /><FaGithub />
            </div>
            <p className="text-center text-light m-0"><small>&copy; {new Date().getFullYear()}  - Vaibhav Velhal</small></p>
        </footer>
    );
}

export default Footer;
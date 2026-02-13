import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className='p-3 pb-1 text-center'>
            <div className="social-links mb-1">
                <a href="https://www.linkedin.com/in/vaibhav-velhal" target='_blank' className="mb-1 text-light"><FaLinkedin className="mb-1 me-1" />LinkedIn</a>
                <br />
                <a href="https://github.com/vaibhav-velhal" target='_blank' className="mb-1 text-light"><FaGithub className="mb-1 me-1" />Github</a>                
            </div>
            <p className="text-center text-light m-0"><small>&copy; {new Date().getFullYear()}  - Vaibhav Velhal</small></p>
        </footer>
    );
}

export default Footer;
import './Footer.css';

function Footer() {
    return (
        <footer className='footer border-top border-secondary border-opacity-50'>
                <p>&copy; {new Date().getFullYear()}  - Vaibhav Velhal &nbsp; | &nbsp; Built with React.js</p>
        </footer>
    );
}

export default Footer;
import './Home.css';
import { FaArrowRight } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { FaDiamond } from 'react-icons/fa6';

function Home() {

    return (
        <section className="home-page">
            <header className="hero-section">
                <h1>Hi! I'm <br /><strong> Vaibhav Velhal</strong></h1>
                <h2 className='mt-3'><span className='text-secondary'>A</span> Frontend Developer <br />
                    <span className='text-secondary'>living in</span> India.</h2>
            </header>

            <section className="projects-section">
                <h2 className='mb-4 fw-semibold'><FaDiamond className='mb-2' size={40} style={{color: 'hsl(206, 82%, 40%)'}} /> Projects</h2>
                
                {/* First Project */}
                <div className="project-item row mb-5">
                    <div className="project-info col-12 col-md-6 pe-4">
                        <h3>JustPizza Project</h3>
                        <p>JustPizza is a responsive pizza ordering website built using React.js. It allows customers to view the menu, select their pizzas, and contact the restaurant for orders. The website is hosted on Vercel and deployed using GitHub Actions for continuous integration.</p>
                        <p className='technology-section fw-semibold'>Technologies: React.js, React Router, Bootstrap, CSS, Vite, Web3Forms, Vercel Environment Variables</p>
                        <div className="buttons-section">
                            <button className="btn btn-light btn-outline-dark py-2 px-3">View Details <FaArrowRight className='ms-1' /></button>
                            <a className="btn btn-light btn-outline-dark py-2 px-3" href="https://just-pizza-official.vercel.app/" target='_blank'>View Preview <BsGlobe className='ms-1' /></a>
                        </div>
                    </div>
                    <div className="project-image col-12 col-md-6 border p-3 rounded-4">
                        <img src="/JustPizza-Project.png" alt="JustPizza-Project" />
                    </div>
                </div>

                {/* Second Project */}
                <div className="project-section row">
                    <div className="project-image col-12 col-md-6 border p-3 rounded-4">
                        <img src="" alt="" />
                    </div>
                    <div className="project-info col-12 col-md-6 pe-4">
                        <h3>A Currency Converter</h3>
                    </div>            
                </div>
            </section>
        </section>
    );
}

export default Home;
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
                <h2 className='fw-semibold'><FaDiamond className='mb-2' style={{color: '#1271ba'}} /> Projects</h2>
                
                {/* First Project */}
                <div className="project-item mb-4 mb-md-5">
                    <h3 className='text-decoration-underline'>JustPizza</h3>
                    <div className="row reverse">                        
                        <div className="project-info col-12 col-md-6">
                            <p className='project-description'>JustPizza is a responsive pizza ordering website built using React.js. It allows customers to view the menu, select their pizzas, and contact the restaurant for orders. The website is hosted on Vercel and deployed using GitHub Actions for continuous integration.</p>
                            <p className='technology-section fw-semibold'>Technologies: React.js, React Router, Bootstrap, CSS, Vite, Web3Forms, Vercel Environment Variables</p>
                            <div className="buttons-section">
                                <button className="btn btn-light btn-outline-dark py-md-2 px-md-3">View Details <FaArrowRight className='ms-1' /></button>
                                <a className="btn btn-light btn-outline-dark py-md-2 px-md-3" href="https://just-pizza-official.vercel.app/" target='_blank'>View Preview <BsGlobe className='ms-1' /></a>
                            </div>
                        </div>
                        <div className="image-container project-image col-12 col-md-6">
                            <img src="/JustPizza-Project.png" alt="JustPizza-Project" />
                        </div>
                    </div>
                </div>

                <hr />

                {/* Second Project */}
                <div className="project-item my-4 my-md-5">
                    <h3 className='text-decoration-underline'>Currency Converter</h3>
                    <div className="row">
                        <div className="image-container project-image col-12 col-md-6">
                            <img src="/Currency Converter.png" alt="Currency-Converter-Project" />
                        </div>
                        <div className="project-info col-12 col-md-6">
                            <p className='project-description'>Currency Converter is a web app that provides real-time currency exchange rates. It uses the Frankfurter API for live conversion data and FlagsAPI for displaying country flags. The website supports multiple currencies and displays the most up-to-date exchange rates.</p>
                            <p className='technology-section fw-semibold'>Technologies: HTML, CSS, JavaScript, Frankfurter API, FlagsAPI</p>
                            <div className="buttons-section">
                                <button className="btn btn-light btn-outline-dark py-md-2 px-md-3">View Details <FaArrowRight className='ms-1' /></button>
                                <a className="btn btn-light btn-outline-dark py-md-2 px-md-3" href="https://vaibhav-velhal.github.io/currency-converter/" target='_blank'>View Preview <BsGlobe className='ms-1' /></a>
                            </div>
                        </div>
                    </div>                    
                </div>

                <hr />

                
            </section>
        </section>
    );
}

export default Home;
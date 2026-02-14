import './Home.css';
import { FaArrowRight, FaDiamond } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { FaGithub } from 'react-icons/fa6';

function Home() {

    return (
        <section className="home-page">
            <header className="hero-section">
                <h1>Hi! I'm <br /><strong> Vaibhav Velhal</strong></h1>
                <h2 className='mt-3'><span className='text-secondary'>A</span> Frontend Developer <br />
                    <span className='text-secondary'>living in</span> India.</h2>
            </header>

            <section className="projects-section">
                <h2 className='fw-semibold'><FaDiamond className='mb-2' style={{ color: '#1271ba' }} /> Projects</h2>

                {/* First Project */}
                <article className="project mb-4 mb-md-5">
                    <h3 className='text-decoration-underline'>JustPizza</h3>
                    <div className="project-content reverse">
                        <div className="project-info">
                            <p className='project-description'>
                                A responsive pizza ordering web application built using React.js. Users can browse the menu and contact the restaurant for orders. Deployed on Vercel with modern frontend practices.
                            </p>
                            <p className='technology-section fw-semibold'>Technologies: React.js, React Router, Bootstrap, CSS, Vite, Web3Forms, Vercel Environment Variables</p>
                            <div className="buttons-section">
                                <button className="btn btn-sm btn-light btn-outline-dark py-md-2 px-md-3">View Details <FaArrowRight className='ms-1 mb-1' /></button>
                                <a className="btn btn-sm btn-light btn-outline-dark py-md-2 px-md-3"
                                     href="https://github.com/vaibhav-velhal/just-pizza-react" target='_blank' rel="noopener noreferrer">
                                        GitHub Repo <FaGithub className='ms-1 mb-1' /></a>
                                <a className="btn btn-sm btn-light btn-outline-dark py-md-2 px-md-3"
                                    href="https://just-pizza-official.vercel.app/" target='_blank' rel="noopener noreferrer">
                                    View Preview <BsGlobe className='ms-1 mb-1' /></a>
                            </div>
                        </div>
                        <div className="image-container col-12 col-md-6 m-0 ms-lg-3 ">
                            <img src="/JustPizza-Project.png" alt="JustPizza-Project" loading='lazy'
                             className='border border-secondary border-opacity-50 rounded-3' />
                        </div>
                    </div>
                </article>

                <hr />

                {/* Second Project */}
                <article className="project my-4 my-md-5">
                    <h3 className='text-decoration-underline'>Currency Converter</h3>
                    <div className="project-content">
                        <div className="image-container col-12 col-md-6 m-0 me-lg-3">
                            <img src="/Currency Converter.png" alt="Currency-Converter-Project" loading='lazy' className='rounded-3' />
                        </div>
                        <div className="project-info">
                            <p className='project-description'>
                                A real-time currency converter that fetches live exchange rates using the Frankfurter API. Supports multiple currencies and displays country flags dynamically.
                            </p>
                            <p className='technology-section fw-semibold'>Technologies: HTML, CSS, JavaScript, Frankfurter API, FlagsAPI</p>
                            <div className="buttons-section">
                                <button className="btn btn-sm btn-light btn-outline-dark py-md-2 px-md-3">View Details <FaArrowRight className='ms-1 mb-1' /></button>
                                <a className="btn btn-sm btn-light btn-outline-dark py-md-2 px-md-3"
                                     href="https://github.com/vaibhav-velhal/currency-converter" target='_blank' rel="noopener noreferrer">
                                        GitHub Repo <FaGithub className='ms-1 mb-1' /></a>
                                <a className="btn btn-sm btn-light btn-outline-dark py-md-2 px-md-3"
                                    href="https://vaibhav-velhal.github.io/currency-converter/" target='_blank' rel="noopener noreferrer">
                                    View Preview <BsGlobe className='ms-1 mb-1' /></a>
                            </div>
                        </div>
                    </div>
                </article>

                <hr />

                {/* Third Project */}
                <article className="project my-4 my-md-5">
                    <h3><span className='text-decoration-underline'>E-Medicine</span><small>&nbsp;(Frontend)</small></h3>
                    <div className="project-content reverse">
                        <div className="project-info">
                            <p className='project-description'>
                                A responsive healthcare web interface developed with React.js. Focused on creating a clean, user-friendly UI and integrating with backend APIs for data handling.
                            </p>
                            <p className='technology-section fw-semibold'>Technologies: React.js, Vite, React Router, Bootstrap, CSS</p>
                            <div className="buttons-section">
                                <button className="btn btn-sm btn-light btn-outline-dark py-md-2 px-md-3">View Details <FaArrowRight className='ms-1 mb-1' /></button>
                            </div>
                        </div>
                        <div className="image-container col-12 col-md-6 m-0 ms-lg-3">
                            <img src="/E-Medicine.png" alt="E-Medicine-project" loading='lazy' className='rounded-3' />
                        </div>
                    </div>
                </article>

                <hr />
            </section>
        </section>
    );
}

export default Home;
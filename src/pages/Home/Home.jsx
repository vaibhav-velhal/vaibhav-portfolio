import './Home.css';
import { FaArrowRight } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

function Home() {

    return (
        <section className="home-page">
            <header className="hero-section">
                <h1>Hi! I'm <br /><strong> Vaibhav Velhal</strong></h1>
                <h2 className='mt-3'><span className='text-secondary'>A</span> Frontend Developer <br />
                    <span className='text-secondary'>living in</span> India.</h2>
            </header>

            <section className="projects-section">
                <h2 className='mb-4'>Projects</h2>
                <div className="project-item row">
                    <div className="project-info col-12 col-md-6">
                        <h3>JustPizza Project</h3>
                        <p>JustPizza is a responsive pizza ordering website built using React.js. It allows customers to view the menu, select their pizzas, and contact the restaurant for orders. The website is hosted on Vercel and deployed using GitHub Actions for continuous integration.</p>
                        <p><b>Technologies: React.js, React Router, Bootstrap, CSS, Vite, Web3Forms, Vercel Environment Variables</b></p>
                        <div className="buttons-section">
                            <button className="btn btn-light btn-outline-dark py-2 px-3">View Details <FaArrowRight className='ms-1' /></button>
                            <button className="btn btn-light btn-outline-dark py-2 px-3">View Preview <BsGlobe className='ms-1' /></button>
                        </div>
                    </div>
                    <div className="project-image col-12 col-md-6 border p-3 rounded-4">
                        <img src="/JustPizza-Project.png" alt="JustPizza-Project" />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Home;
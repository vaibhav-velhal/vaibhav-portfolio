import justPizzaProject from "./../../assets/project-images/just-pizza-project-preview.png";
import eMedicineProject from "./../../assets/project-images/e-medicine-project-preview.png";
import "./Home.css";
import {
  FaArrowUpRightFromSquare,
  FaDiamond,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";

function Home() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>
          Hi! I'm <br />
          <strong> Vaibhav Velhal</strong>
        </h1>
        <div className="hero-content">
          <h2 className="hero-title mt-2 mt-md-3">
            <span className="text-secondary">A</span>{" "}
            <span>Full-Stack Developer</span> <br />
            <span className="text-secondary">living in</span> India.
          </h2>
          <div className="social-links mt-md-5">
            <a
              className="btn btn-outline-dark pt-2 rounded-pill"
              href="https://www.linkedin.com/in/vaibhav-velhal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon mb-1" style={{ color: "#0077B5" }} />
              LinkedIn
            </a>
            <a
              className="btn btn-outline-dark pt-2 rounded-pill"
              href="https://github.com/vaibhav-velhal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon mb-1" />
              GitHub
            </a>
            <a
              className="btn btn-primary pt-2 rounded-pill"
              href="/Vaibhav Velhal Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoDocumentText className="icon mb-1" />
              Resume
            </a>
          </div>
        </div>
      </header>

      <section className="projects-section">
        <h2>
          <FaDiamond className="mb-2" style={{ color: "#1271ba" }} /> Projects
        </h2>

        {/* First Project */}
        <article className="project mb-5">
          <h3 className="mt-2 mt-md-0">
            JustPizza - Full-Stack Pizza Web Application
          </h3>
          <div className="project-content mt-3 reverse">
            <div className="project-info">
              <p className="project-description">
                A full-stack pizza web application built with React, Node.js,
                Express, and MongoDB, featuring JWT authentication, protected
                user APIs, complete CRUD operations, responsive design, and
                cloud deployment.
              </p>
              <p className="technology-section fw-semibold">
                Technologies: React.js, React Router, Node.js, Express.js,
                MongoDB, Mongoose, Joi, JWT, Bootstrap
              </p>
              <div className="buttons-section">
                {/* <button className="btn btn-sm btn-light btn-outline-dark py-md-2 px-md-3">View Details <FaArrowRight className='ms-1 mb-1' /></button> */}
                <a
                  className="btn btn-outline-dark py-md-2 px-md-3"
                  href="https://github.com/vaibhav-velhal/just-pizza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo <FaGithub className="ms-1 mb-1" />
                </a>
                <a
                  className="btn btn-outline-dark py-md-2 px-md-3"
                  href="https://just-pizza-official.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Preview <BsGlobe className="ms-1 mb-1" />
                </a>
              </div>
            </div>
            <div className="image-container col-12 col-md-6 m-0 ms-lg-3 ">
              <a
                href="https://just-pizza-official.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={justPizzaProject}
                  alt="JustPizza-Project"
                  loading="lazy"
                  className="rounded-3"
                />
              </a>
            </div>
          </div>
        </article>

        <hr />

        {/* Second Project */}
        <article className="project my-5">
          <h3>
            E-Medicine - Online Pharmacy
            <small>&nbsp;(Frontend)</small>
          </h3>
          <div className="project-content mt-3">
            <div className="image-container col-12 col-md-6 m-0 me-lg-3">
              <img
                src={eMedicineProject}
                alt="E-Medicine-project"
                loading="lazy"
                className="rounded-3"
              />
            </div>
            <div className="project-info">
              <p className="project-description">
                E-Medicine is a responsive healthcare web interface built using
                React.js, focused on clean and user-friendly design for an
                online medicine platform. It integrates backend APIs, with my
                primary contribution being complete frontend UI development.
              </p>
              <p className="technology-section fw-semibold">
                Technologies: React.js, Vite, React Router, Bootstrap, CSS
              </p>
              <div className="buttons-section">
                {/* <button className="btn btn-sm btn-light btn-outline-dark py-md-2 px-md-3">View Details <FaArrowRight className='ms-1 mb-1' /></button> */}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="publication-section">
        <h2>
          <FaDiamond className="mb-2" style={{ color: "#1271ba" }} />{" "}
          Publication
        </h2>

        <article className="publication">
          <header className="publication-header-section">
            <div className="title">
              <h3>
                Smart Restaurant Service Robot
                <span className="badge bg-light text-dark border ms-2">
                  Research Paper
                </span>
              </h3>
            </div>
            <a
              href="http://proceeding.conferenceworld.in/NCETET-2025/85.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark rounded-pill fw-semibold"
              aria-label="View Smart Restaurant Service Robot research paper"
            >
              Read Publication
              <FaArrowUpRightFromSquare className="mb-1 ms-2" />
            </a>
          </header>
          <div className="sub-title my-2 mt-md-0">
            <p className="sub-text text-secondary m-0">
              Conference World - NCETET 2025 Proceedings | Apr 17, 2025
            </p>
          </div>
          <p className="description">
            Published a research paper on an autonomous food delivery robot
            using ESP32, IR sensors, RF communication, and IoT (ThingSpeak). The
            system follows a line for navigation and logs order details in real
            time for efficient, contactless restaurant service.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Home;

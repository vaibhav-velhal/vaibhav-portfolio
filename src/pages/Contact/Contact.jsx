import "./Contact.css";
import { IoMailOutline } from "react-icons/io5";
import { FaArrowRight, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

function Contact() {
  return (
    <main className="contact-page">
      <header className="contact-hero text-center">
        <h1 className="contact-title mb-3">
          Let's work <strong>together</strong>
        </h1>
        <div className="container px-md-4">
          <p className="contact-subtext text-secondary p-0">
            I'm always open to discussing{" "}
            <span className="text-dark fw-semibold">software development</span>{" "}
            opportunities, innovative projects, and collaborative ideas. Whether
            you're hiring a{" "}
            <span className="text-dark fw-semibold">
              Full-Stack MERN Developer
            </span>{" "}
            or would like to discuss a project, I'd be{" "}
            <span className="text-dark fw-semibold">happy</span> to connect.
          </p>
        </div>
      </header>

      <section className="contact-cards mx-md-5">
        <section className="card-section">
          {/* 1. Get In Touch Card*/}
          <article className="card p-3 border border-dark mb-5">
            <div className="card-body">
              <div className="card-title mb-3 text-center">
                <h2>
                  <IoMailOutline className="mb-2 me-2" />
                  Get In Touch
                </h2>
              </div>

              <div className="card-subtitle">
                <p className="card-desc text-secondary text-center">
                  Feel free to reach out regarding job opportunities,
                  collaborations, technical discussions, or general enquiries.
                </p>
              </div>

              <div className="link">
                <a
                  href="mailto:vaibhav.velhal1614@gmail.com"
                  className="send-email btn"
                >
                  Send Email
                  <FaArrowRight className="mb-1 ms-2" size={13} />
                </a>
              </div>
              <p className="email-text text-secondary">
                <small>vaibhav.velhal1614@gmail.com</small>
              </p>
            </div>
          </article>

          {/* 2. Social Links Cards */}
          <div className="social-link-cards">
            <article className="card p-4 border border-dark">
              <div className="card-body text-center p-0">
                <FaLinkedinIn className="mb-2" size={40} />

                <div className="card-title m-0">
                  <p className="m-0">
                    <small>LinkedIn</small>
                  </p>
                </div>

                <div className="sub-text">
                  <p className="text-secondary">
                    <small>Professional network</small>
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/vaibhav-velhal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link fw-semibold"
                >
                  Connect &rarr;
                </a>
              </div>
            </article>

            <article className="card p-4 border border-dark text-center">
              <div className="card-body p-0">
                <FiGithub className="mb-2" size={40} />

                <div className="card-title m-0">
                  <p className="m-0">
                    <small>GitHub</small>
                  </p>
                </div>

                <div className="sub-text">
                  <p className="text-secondary">
                    <small>Explore my projects</small>
                  </p>
                </div>
                <a
                  href="https://github.com/vaibhav-velhal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link fw-semibold"
                >
                  View Code &rarr;
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="card-section">
          {/* 3. Open for Opportunities Card */}
          <article className="card py-3 border border-dark mb-5">
            <div className="card-body text-center">
              <div className="card-title mb-3">
                <h2>Open for Opportunities</h2>
              </div>

              <div className="card-subtitle">
                <p className="card-desc mb-2 text-secondary">
                  Currently seeking Full-Stack Developer opportunities
                  where I can contribute, learn, and build impactful web
                  applications.
                </p>
              </div>

              <div className="button-section">
                <div className="link mb-3">
                  <a
                    href="mailto:vaibhav.velhal1614@gmail.com"
                    className="send-email btn"
                  >
                    Contact Me
                    <FaArrowRight className="mb-1 ms-2" size={13} />
                  </a>
                </div>
                <div className="resume-button">
                  <a
                    href="/Vaibhav Velhal Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark fw-semibold"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 4. Location Card */}
          <div className="location-card">
            <article className="card border border-dark py-1">
              <div className="location-icon">
                <GrLocation className="ms-4" size={25} />
              </div>
              <div className="card-body">
                <div className="card-title mb-0">
                  <p className="m-0">Based in Maharashtra, India</p>
                </div>
                <div className="sub-text text-secondary">
                  <p className="m-0">Open to remote, hybrid, and on-site opportunities.</p>
                  <p className="location-time-text">UTC +5:30</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Contact;

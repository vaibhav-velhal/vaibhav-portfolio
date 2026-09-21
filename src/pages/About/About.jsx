// import { skillsData } from "../../data/skillsData";
import "./About.css";

const skillsData = {
  frontend: ["HTML", "CSS", "Bootstrap", "JavaScript (ES6)", "TypeScript", "React.js"],
  backend: ["Node.js", "Express.js", "Middleware", "REST APIs", "CRUD APIs"],
  database: ["MongoDB", "MongoDB Atlas"],
  libraries: [ "React Router", "React Toolkit", "JWT Authentication", "Joi Validation", "Mongoose"],
  tools: ["Git", "GitHub", "VS Code", "npm", "Bruno", "Vercel", "Render"],
  design: ["Adobe Photoshop", "Adobe Lightroom"],
};

function About() {
  return (
    <section className="about-page">
      <header className="header-section px-md-3 mb-md-5">
        <div className="heading-content mt-4 mt-md-0">
          <p className="header-text mb-2">
            I'm a Full-Stack Developer <br /> specializing in the{" "}
            <strong>MERN Stack</strong>.
          </p>
          <p className="sub-text text-secondary m-0">
            Building modern, scalable, and user-friendly web applications.
          </p>
        </div>
        <div className="profile-picture-section">
          <div className="image-container">
            <img
              src="./profile-picture.jpg"
              alt="Vaibhav-Velhal-Profile-Picture"
              loading="lazy"
            />
          </div>
        </div>
      </header>

      <section className="about-section pt-md-4">
        <h3 className="mb-4">About Me</h3>
        <p>
          I'm <span className="fw-semibold">Vaibhav Velhal</span>, a passionate{" "}
          <span className="fw-semibold">Full-Stack Developer</span> from India
          with a Bachelor's degree in{" "}
          <span className="fw-semibold">
            Electronics and Telecommunication Engineering
          </span>
          . I enjoy building modern, responsive, and scalable web applications
          using the <span className="fw-semibold">MERN Stack</span>.
        </p>
        <p>
          I work with <span className="fw-semibold">React.js</span> for creating
          interactive user interfaces and use{" "}
          <span className="fw-semibold">Node.js</span>,{" "}
          <span className="fw-semibold">Express.js</span>, and{" "}
          <span className="fw-semibold">MongoDB</span> to build secure backend
          services and <span className="fw-semibold">REST APIs</span>. I'm
          passionate about writing clean, maintainable code and continuously
          learning modern web technologies.
        </p>
      </section>

      <section className="skill-section">
        <h3 className="mb-5">Skills &amp; Technologies</h3>

        {/* ********** Design 1 ********** */}
        {/* <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 d-flex justify-content-center">
            {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="col skill-category mb-2">

                    <h4 className="category-title text-center mb-4 text-capitalize">{category}</h4>

                    <div className="skills row row-cols-auto d-flex justify-content-center">
                        {skills.map((skill) => (
                            <div className="col icon-div" key={skill.name}>
                                <img className="icon" src={skill.image} alt={skill.name} loading="lazy" />

                                <p className="mt-2 m-0">
                                    <small className="border border-secondary rounded-pill px-2">
                                    {skill.name}
                                    </small>
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </div> */}

        {/* ********** Design 2 ********** */}

        <div className="row row-cols-1 row-cols-md-3">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="col skill-category">
              <h4 className="category-title text-capitalize">
                {category}
              </h4>

              <div className="skills row row-cols-auto">
                {skills.map((skill) => (
                  <p className="col mt-2 m-0" key={skill}>
                    <small className="border border-secondary rounded-pill" style={{padding: "2px 8px"}}>
                      {skill}
                    </small>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h3 className="mb-4">Education</h3>
        <div className="education-content">
          <div className="education-title d-flex justify-content-between align-items-center">
            <h4 className="mb-1 fw-semibold">Bachelor of Technology</h4>
            <p className="sub-date m-0 text-secondary text-end">2021 - 2025</p>
          </div>
          <p className="college-name text-secondary mb-1">
            Bharati Vidyapeeth College of Engineering
          </p>
          <p className="branch-name mb-1">
            Electronics &amp; Telecommunication Engineering
          </p>
        </div>
      </section>

      <section className="resume-button text-center">
        <a
          href="/Vaibhav Velhal Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary px-4 py-2 fw-semibold"
        >
          Download Resume
        </a>
      </section>
    </section>
  );
}

export default About;

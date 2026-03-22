import { IconList } from '../../data/skillsData';
import './About.css';

function About() {
    return (
        <section className='about-page'>
            <header className='header-section mb-md-5 reverse'>
                <div className="heading-content">
                    <p className='header-text text-center mb-1'>I'm a Frontend Developer <br /> specializing in <strong>React.js</strong>.</p>
                    <p className='sub-text text-secondary text-center'>Building modern, responsive, and user-friendly web applications.</p>
                </div>
                <div className="profile-picture-section">
                    <div className="image-container">
                        <img src="/Profile Picture.jpg" alt="Vaibhav-Velhal-Profile-Picture" loading='lazy' />
                    </div>
                    <p className='text-center m-0 mt-2 mb-2 fw-semibold'><small>Er. Vaibhav Velhal</small></p>
                </div>
            </header>

            <section className='about-section'>
                <h3 className='mb-4'>About Me</h3>
                <p>I'm <b>Vaibhav Velhal</b>, a passionate <b>Frontend Developer</b> from India. I completed my <b>B.Tech in Electronics and Telecommunication Engineering</b> in 2025.</p>
                <p>I specialize in building responsive and user-friendly web applications using modern technologies like <b>HTML, CSS, Bootstrap, JavaScript,</b> and <b>React.js</b>.
                    I enjoy creating clean <b>UI designs</b> and writing efficient code to deliver smooth <b>user experiences</b>.</p>
            </section>
            
            <section className="skill-section">
                <h3 className="mb-5">Skills &amp; Technologies</h3>
                <div className="skills row row-cols-auto row-cols-lg-5 m-0 mx-lg-5">
                    {IconList.map((icon)=>
                        (
                            <div className="col icon-div" key={icon.name}>
                                <img className='icon' src={icon.image} alt={icon.name} loading="lazy" />
                                <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>{icon.name}</small></p>
                            </div>
                        )
                    )}                    
                </div>
            </section>

            <section className="education-section">
                <h3 className="mb-4">Education</h3>
                <div className="education-content">
                    <div className="education-title d-flex justify-content-between align-items-center">
                        <h4 className="mb-1 fw-semibold">Bachelor of Technology</h4>
                        <p className='sub-date m-0 text-secondary text-end'>2021 - 2025</p>
                    </div>
                    <p className="college-name text-secondary mb-1">Bharati Vidyapeeth College of Engineering</p>
                    <p className="branch-name mb-1">Electronics &amp; Telecommunication Engineering</p>
                    <p className="cgpa mb-1">CGPA: 7.51/10</p>
                </div>
            </section>

            <section className="resume-button text-center">
                <a href="/Vaibhav Velhal Resume.pdf" target='_blank' rel="noopener noreferrer"
                 className="btn btn-primary px-4 py-2 fw-semibold">Download Resume</a>
            </section>
        </section>
    )
}

export default About;
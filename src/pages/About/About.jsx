import './About.css';

function About() {
    return (
        <section className='about-page'>
            <header className='header-section mb-md-5 reverse'>
                <p className='text-center'>I'm a Frontend Developer <br /> specializing in <strong>React.js</strong>.</p>
                <div className="profile-picture-section">
                    <div className="image-container">
                        <img src="/Profile Picture.jpg" alt="Vaibhav-Velhal-Profile-Picture" loading='lazy' />
                    </div>
                    <p className='text-center m-0 mt-2 mb-2'><small>Er. Vaibhav Velhal</small></p>
                </div>
            </header>

            <section className='about-section mb-5'>
                <h3 className='mb-4'>About Me</h3>
                <p>I'm <b>Vaibhav Velhal</b>, a passionate <b>Frontend Developer</b> from India. Completed my B.Tech in <b>Electronics and Telecommunication Engineering.</b></p>
                <p>I specialize in building responsive and user-friendly web applications using modern technologies like <b>HTML, CSS, Bootstrap, JavaScript,</b> and <b>React.js</b>.
                    I enjoy creating clean <b>UI designs</b> and writing efficient code to deliver smooth <b>user experiences</b>.</p>
            </section>
            
            <section className="skill-section mb-5">
                <h3 className="mb-4">Skills</h3>
                <div className="skills row row-cols-auto row-cols-lg-5 mx-lg-5">
                </div>
            </section>
        </section>
    )
}

export default About;
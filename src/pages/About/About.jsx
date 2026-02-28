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
                    <div className="col icon-div">
                        <img className='icon' src="/skill icons/html5.png" alt="HTML5" loading="lazy" />
                        <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>HTML5</small></p>
                    </div>
                    <div className="col icon-div">
                        <img className='icon' src="/skill icons/css3.png" alt="CSS3" loading="lazy" />
                        <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>CSS3</small></p>
                    </div>
                    <div className="col icon-div">
                        <img className='icon' src="/skill icons/bootstrap.png" alt="Bootstrap" loading="lazy" />
                        <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>Bootstrap</small></p>
                    </div>
                    <div className="col icon-div">
                        <img className='icon' src="/skill icons/js.png" alt="JavaScript" loading="lazy" />
                        <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>JavaScript</small></p>
                    </div>
                    <div className="col icon-div">
                        <img className='icon' src="/skill icons/reactjs.png" alt="ReactJs" loading="lazy" />
                        <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>React.js</small></p>
                    </div>
                    <div className="col icon-div">
                        <img className='icon' src="/skill icons/git.png" alt="Git" loading="lazy" />
                        <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>Git</small></p>
                    </div>
                    <div className="col icon-div">
                        <img className='icon' src="/skill icons/github.png" alt="GitHub" loading="lazy" />
                        <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>GitHub</small></p>
                    </div>
                    <div className="col icon-div">
                        <img className='icon' src="/skill icons/vercel.png" alt="Vercel" loading="lazy" />
                        <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>Vercel</small></p>
                    </div>
                    <div className="col icon-div">
                        <img className='icon' src="/skill icons/photoshop.png" alt="Photoshop" loading="lazy" />
                        <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>Photoshop</small></p>
                    </div>
                    <div className="col icon-div">
                        <img className='icon' src="/skill icons/lightroom.png" alt="Lightroom" loading="lazy" />
                        <p className='mt-2 m-0'><small className='border border-secondary rounded-pill px-2'>Lightroom</small></p>
                    </div>
                </div>
            </section>

            <section className="education-section">
                <h3 className="mb-4">Education</h3>
            </section>
        </section>
    )
}

export default About;
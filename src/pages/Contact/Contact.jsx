import './Contact.css';
import { IoMailOutline } from 'react-icons/io5';
import { FaArrowRight, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';

function Contact() {

    return (
        <section className="contact-page">

            <div className="contact-hero text-center">
                <h1 className="contact-title mb-3">Let's work <strong>together</strong></h1>
                <div className="container px-md-5">
                    <p className="contact-subtext text-secondary mx-md-5 p-0">
                        I'm always open to discussing new projects, creative ideas,
                        or opportunities to be part of your vision.
                        Whether you need a <span className='text-dark fw-semibold'>responsive</span> website or a <span className='text-dark fw-semibold'>modern</span> React application,
                        <span className='text-dark fw-semibold'> I'd love to connect.</span>
                    </p>
                </div>
            </div>

            <div className="contact-cards">

                <div className="card-section">

                    {/* 1. Get In Touch Card*/}
                    <div className="card p-3 border border-dark mb-5">
                        <div className="card-body">
                            <div className="card-title mb-3 text-center">
                                <h3><IoMailOutline className='mb-2 me-2' />Get In Touch</h3>
                            </div>

                            <div className="card-subtitle">
                                <p className='mb-0 text-secondary text-center'>For project inquiries, collaborations, or freelance opportunities.</p>
                            </div>

                            <div className="link">
                                <button href="mailto:vaibhav.velhal1614@gmail.com" className='send-email btn'>Send Email<FaArrowRight className='mb-1 ms-2' size={13} /></button>
                            </div>
                            <p className='email-text text-secondary'><small>vaibhav.velhal1614@gmail.com</small></p>
                        </div>
                    </div>

                    {/* 2. Social Links Cards */}
                    <div className="social-link-cards">
                        <div className="card p-4 border border-dark">
                            <div className="card-body text-center p-0">
                                <FaLinkedinIn className='mb-2' size={40} />

                                <div className="card-title m-0"><p className="m-0"><small>LinkedIn</small></p></div>

                                <div className="sub-text">
                                    <p className='text-secondary'><small>Professional network</small></p>
                                </div>
                                <a href="https://www.linkedin.com/in/vaibhav-velhal" target="_blank" rel="noopener noreferrer" className='fw-semibold'>Connect &rarr;</a>
                            </div>
                        </div>

                        <div className="card p-4 border border-dark text-center">
                            <div className="card-body p-0">
                                <FiGithub className="mb-2" size={40} />

                                <div className="card-title m-0"><p className="m-0"><small>GitHub</small></p></div>

                                <div className="sub-text">
                                    <p className='text-secondary'><small>Explore my projects</small></p>
                                </div>
                                <a href="https://github.com/vaibhav-velhal" target="_blank"rel="noopener noreferrer" className='fw-semibold'>View Code &rarr;</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="card-section">

                    {/* 3. Open for Opportunities Card */}
                    <div className="card p-3 border border-dark mb-5">
                        <div className="card-body text-center">
                            <div className="card-title mb-3">
                                <h3>Open for Opportunities</h3>
                            </div>

                            <div className="card-subtitle">
                                <p className='mb-2 text-secondary'>Currently available for frontend development roles and freelance projects. Let's create something impactful.</p>
                            </div>

                            <div className="button-section">
                                <div className="link mb-3">
                                    <button href="mailto:vaibhav.velhal1614@gmail.com" className='send-email btn'>Start a Project<FaArrowRight className='mb-1 ms-2' size={13} /></button>
                                </div>
                                <div className="resume-button">
                                    <button className="btn btn-outline-dark fw-semibold">Download Resume</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Location Card */}
                    <div className="location-card">

                        <div className="card border border-dark py-1">
                            <div className="location-icon"><GrLocation className='ms-4' size={25} /></div>
                            <div className="card-body">
                                <div className="card-title mb-0">
                                    <p className='m-0'>Based in Maharashtra, India</p>
                                </div>
                                <div className="sub-text text-secondary">
                                    <p className='m-0'>Open to remote opportunities worldwide</p>
                                    <p className='location-time-text'>UTC +5:30</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact;
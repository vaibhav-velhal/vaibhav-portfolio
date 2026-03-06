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
                            <div className="card-title text-center">
                                <h3><IoMailOutline className='mb-1 me-2' />Get In Touch</h3>
                                <p className='mb-0 text-secondary'>For project inquiries, collaborations, or freelance opportunities.</p>
                            </div>
                            <div className="link mb-2">
                                <a href=""><big>Send Email<FaArrowRight className='mb-1 ms-2' size={13} /></big></a>
                            </div>
                            <p className='mb-1'><small>vaibhav.velhal1614@gmail.com</small></p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact;
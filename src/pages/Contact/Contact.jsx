import './Contact.css';

function Contact() {

    return (
        <section className="contact-page">

            <div className="contact-hero text-center">
                <h1 className="contact-title mb-3">Let's work <strong>together</strong></h1>
                <p className="contact-subtext text-secondary">
                    I'm always open to discussing new projects, creative ideas, <br />
                    or opportunities to be part of your vision. <br />
                    Whether you need <span className='text-dark fw-semibold'>a responsive website</span> or <span className='text-dark fw-semibold'>a modern React application</span>, <br />
                    I'd love to connect.
                </p>
            </div>

            <div className="contact-cards">
                <div className="card text-center p-3 rounded-5">
                    <h3>Get in touch</h3>
                </div>
            </div>

        </section>
    )
}

export default Contact;
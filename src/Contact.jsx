import React, { useRef, useState } from 'react';
import download from './assets/download.png'
import facebook from './assets/Facebook.png'
import Twitter from './assets/twitter.png'
import Youtube from './assets/Youtube.png'
import Gmail from './assets/Gmail.png'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.jpg'
import emailjs from '@emailjs/browser';
import ReactWhatsapp from 'react-whatsapp'
import Whatsapp from './assets/Whatsapp.png'

function Contact() {
    const form = useRef();
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        // Perform validation here
        if (!form.current.from_name.value) {
            errors.name = 'Name is required';
        }
        if (!form.current.from_email.value) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.current.from_email.value)) {
            errors.email = 'Email is invalid';
        }
        if (!form.current.message.value) {
            errors.message = 'Message is required';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const formData = {
                from_name: form.current.from_name.value,
                from_email: form.current.from_email.value,
                message: form.current.message.value
            };

            emailjs.send('service_hi0k9uq', 'template_e4nvqqm', formData, '0qmTYEoFkvFutAuJF')
                .then((result) => {
                    console.log(result.text);
                    alert('Email Sent!');
                    e.target.reset();
                })
                .catch((error) => {
                    console.log(error.text);
                });
        }
    };


    return (
        <div>
            <div id="ContactPage">
                <div className="Clients">
                    <h1 className="ContactPageTitle">My Clients</h1>
                    <p className="ClientDesc">
                        I have had the opportunity to work with a diverse group of companies and people. Some of the notable companies I have worked with includes
                    </p>
                    <div className="ClientImgs">
                        <img src={download} alt="" className="ClientImg" />
                        <img src={download} alt="" className="ClientImg" />
                        <img src={download} alt="" className="ClientImg" />
                        <img src={download} alt="" className="ClientImg" />
                    </div>
                </div>
                <div id="Contact">
                    <h1 className="ContactPageTitle"> Contact Me</h1>
                    <span className="ContactDesc">Please fill out the form below to discuss any work opportunities.</span>
                    <form className="ContactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder='Your Name' name='from_name' />
                        {formErrors.name && <span className="error">{formErrors.name}</span>}
                        <input type="email" className="email" placeholder='Your Email' name='from_email' />
                        {formErrors.email && <span className="error">{formErrors.email}</span>}
                        <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                        {formErrors.message && <span className="error">{formErrors.message}</span>}
                        <button type='submit' value='send' className="submitbtn" style={{ color: '#000', fontSize: '20px', padding: '10px 0', background: 'white', borderRadius: '20px', width: '150px', marginTop: '10px', textAlign: 'center' }}>Submit</button>
                        {/* Add your social media links here */}
                    </form>
                    <div className="links">
                        <a href='https://www.facebook.com/profile.php?id=100093047991970' style={{ display: 'block' }}>
                            <img src={facebook} alt="" className="link" />
                        </a>
                        <a href='https://twitter.com/Official_Rickid' style={{ display: 'block' }}>
                            <img src={Twitter} alt="" className="link" />
                        </a>
                        <a href='https://www.youtube.com/channel/UC9IMcJL60IfUXVaHbWWpOOg' style={{ display: 'block' }}>
                            <img src={Youtube} alt="" className="link" />
                        </a>
                        <a href='https://mail.google.com/mail/u/0/#inbox' style={{ display: 'block' }}>
                            <img src={Gmail} alt="" className="link" />
                        </a>
                        <a href='https://www.instagram.com/_official_rickid/' style={{ display: 'block' }}>
                            <img src={instagram} alt="" className="link" />
                        </a>
                        <a href='https://www.linkedin.com/in/fadare-richard-99768428b/' style={{ display: 'block' }}>
                            <img src={linkedin} alt="" className="link" />
                        </a>
                        <a href='https://github.com/Richardboluwatife' style={{ display: 'block' }}>
                            <img src={github} alt="" className="link" style={{ borderRadius: "50px" }} />
                        </a>
                    </div>
                </div>
                <div className="" style={{ display: 'flex', width: '100%', alignContent: 'center', justifyContent: 'center', gap: '100px' }}>
                    <a href="tel:+2348109427739" className='btn'  >call me </a>
                    <div className="btn" style={{ margin: '1rem 0', display: 'flex', cursor: 'pointer' }}>
                        <img src={Whatsapp} alt="" style={{ height: '30px', cursor: 'pointer' }} />
                        <ReactWhatsapp number='+234 8109427739' className='' message='i am, interested ' style={{ border: 'none', cursor: 'pointer' }}>Whatsapp</ReactWhatsapp>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
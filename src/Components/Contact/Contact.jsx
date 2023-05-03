import emailjs from 'emailjs-com';
import React, { useRef } from 'react'
import './Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d0mjtpl', 'template_3uddqyl', form.current, 'EENYRq2ghPW4jvMIo')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
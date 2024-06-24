import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {


  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e6rfzr8', 'template_thwires', form.current, {
        publicKey: 'jOfy5fijPW7lYjGIz',
      })
      .then(
        () => {

          alert('Thank you. I will get back to you as soon as possible.');
          const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
          }
          console.log(formData);
          nameRef.current.value = '';
          emailRef.current.value = '';
          messageRef.current.value = '';

        },
        (error) => {
          alert("Ahh, something went wrong. Please try again.");
        },
      )
      ;
  };





  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>krishanmaan651@gmail.com</h5>
            <a href="mailto:krishanmaan651@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >

          <input type="text" name="from_name" placeholder="Your Full Name" required ref={nameRef} />  {/* client side validation */}
          <input type="email" name='from_email' placeholder='Your Email' required ref={emailRef} />
          <textarea name="message" rows="7" placeholder='Your Message' required ref={messageRef} ></textarea>
          <button type="submit" value="send" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
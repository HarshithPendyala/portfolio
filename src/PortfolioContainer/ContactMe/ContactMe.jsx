import React, { useRef, useState } from 'react';
import './ContactMe.css';
import Phone from '../../assets/contact/phone.png';
import Email from '../../assets/contact/email.png';
import emailjs from '@emailjs/browser';
import {FaLinkedin,FaGithubSquare} from 'react-icons/fa';

export default function ContactMe() {
    const formRef = useRef();
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_ei94xnd', 'template_y5d2uvj', formRef.current, 'user_1BmH4oQwcvQcu8SBkfaHQ')
      .then((result) => {
          console.log(result.text);
          setSent(true);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className='c container' id='contact'>
        <div className='c-wrapper row p-1'>
            <div className='c-left col-12 col-sm-6'>
                <div className='row'>
                <h1 className='c-title col-12 col-sm'>Get in touch</h1>
                </div>
                <div className='c-info'>
                    <div className='c-info-item '><img src={Phone} alt="" className='c-icon img-fluid'/> +91 8463 939 677</div>
                    <div className='c-info-item'><img src={Email} alt="" className='c-icon'/> harshith.pendyala777@gmail.com</div>
                    <a className='text-info fa-2x  m-1' href='https://www.linkedin.com/in/harshith-pendyala?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE6nIx2DVQCS%2F4R4ICfESAQ%3D%3D' target='_blank' rel='noreferrer'><FaLinkedin/></a>
                    <a className='text-info fa-2x  m-1' href='https://github.com/HarshithPendyala' target='_blank' rel='noreferrer'><FaGithubSquare/></a>
                </div>
            </div>
            <div className='c-right col-12 col-sm-6'>
                {/* <h3 className='c-desc'>
                    <b>Whats your story?</b> Get in touch, always available for collab.
                </h3> */}
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className='row m-1'>  <input type="text" className='col-12 col-sm' placeholder='Name' name='user_name'/></div>
                  <div className='row m-1'>   <input type="text" className='col-12 col-sm' placeholder='Subject' name='subject'/></div>
                  <div className='row m-1'>   <input type="text" className='col-12 col-sm' placeholder='Email' name='user_email'/></div>
                  <div className='row m-1'>   <textarea rows={5} className='col-12 col-sm' placeholder='Message' name='message'/></div>
                  <div className='row m-1'>   <button className='btn btn-info mt-2'>Submit</button></div>
                   <div style={{color:'green'}} className='m-1'> {sent && "Thank you for your interest, will get back to you soon"}</div>
                </form>
            </div>
        </div>
    </div>
    );
}

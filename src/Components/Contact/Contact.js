import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import { MdOutlineContactMail} from "react-icons/md";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function Contact() {


  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pqea3bx', 'template_r1gqnle', form.current, 'Ti548V68DF612VnGH')
      .then((result) => {

        window.alert("Message envoyé !");
        form.current.reset();
          
      }, (error) => {
        window.alert("Erreur lors de l'envoi du message");
      });
  };
  return (
    <div id="contact">

<div className="contact">
        <div className="contact-header">
          <div>
            <MdOutlineContactMail className="contact-logo" />
          </div>
          <div>
            <h1 className="contact-title">Me contacter</h1>
          </div>
        </div>
<div className='contact-form'>
        <form ref={form} onSubmit={sendEmail}>
<div className='contact-form-content'>

          <label className='contact-label'>Objet</label>
          <input className='contact-input' type="text" name="objet" required/>
</div>
<div className='contact-form-content'>
          <label className='contact-label'>Nom</label>
          <input className='contact-input' type="text" name="nom" required/>
          </div>

          <div className='contact-form-content'>
          <label className='contact-label'>Email</label>
          <input className='contact-input' type="email" name="email" required/>
            </div>

          <div className='contact-form-content'>
          <label className='contact-label'>Message</label>
          <textarea className='contact-textarea' name='message' required></textarea> 
          </div>

          <input className='contact-submit' type="submit" value="Envoyer" />





</form>
</div>




        </div>

    </div>
  );
}

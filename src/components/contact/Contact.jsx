import React , {useRef} from 'react'
import emailjs from '@emailjs/browser';

import './contact.scss'



function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_whz7rdd', 'template_ptwnp0c', form.current, 'Ron1gcMc8B89VAXMQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
 
        form.current.reset()
  };


  return (
    <div className='contact' id='contact' >
      <div className="left">
        <img src="assets/contact/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Bize Yazın</h2>

        <form ref={form} onSubmit={sendEmail}>
        <input name="name" type="text" placeholder="İsim .."  required={true}  />
          <input name="email" type="email" placeholder="Email adresiniz.."  required={true}  />
          <textarea placeholder="Mesajınız.." required={true} type="text" name="message"></textarea>
          <button  type="submit" >Gönder</button>
         
        </form>

      </div>
    </div>
  )
}

export default Contact
import * as messageAPI from "../../utilities/message-api"
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';


const initState = {
    name: '',
    email: '',
    phone: '',
    message: ''
}

export default function ContactPage({lightMode}) {
    const [formData, setFormData] = useState(initState)
    const [popup, setPopup] = useState(false)

      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              setPopup(true)
              setFormData(initState)
          }, (error) => {
              console.log(error.text);
          });
      };



  //  async function handleAddMessage(evt) {
  //   evt.preventDefault()
  //   const updatedMessage = {...formData}
  //   const message = await messageAPI.newMessage(updatedMessage)
  //   console.log(message, "MESSAGE AFTER CONTROLLER")
  //   setFormData(initState)
  //   setPopup(true)
  //  }

   function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value})
   }

   function handleDismiss() {
    setPopup(false)
   }

  return (
    <div className="Routes">
      <div className="message">
        <h1>Contact Me</h1>
        {popup === true ? 
        <div className={lightMode ? "lightPopup popup" : "popup"}>
          <h4>Thank you for your message! I'll get back to you within 48 hours!</h4>
          <button className={lightMode ? "lightBtn" : "darkBtn"} onClick={handleDismiss}>Dismiss</button>
        </div>
        :
        ""
        }
        <form ref={form} className={lightMode ? "lightForm" : "darkForm"} onSubmit={sendEmail}>
          <label className="white">Name:</label>
          <input onChange={handleChange} name="name" class="input" value={formData.name} type="text" autoFocus required />
          <label className="white">Email:</label>
          <input onChange={handleChange} name="email" class="input" value={formData.email} type="email" required />
          <label className="white">Phone <em>(Optional)</em> :</label>
          <input onChange={handleChange} name="phone" class="input" value={formData.phone} type="tel" id="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"/>
          <label className="white">Message:</label>
          <textarea onChange={handleChange} name="message" value={formData.message} id="" cols="30" rows="10" required></textarea>
          <button className={lightMode ? "lightBtn" : "darkBtn"} type="submit">Send</button>
        </form>
        <div className={lightMode ? "lightContact-icons contact-icons" : "contact-icons"}>
          <a href="https://github.com/liloby" target="_blank">
            <div className="github"></div>
          </a>
          <a href="https://linkedin.com/in/oby-li" target="_blank">
            <div className="linkedin"></div>
          </a>
          <a href="mailto: obyli214@gmail.com" target="_blank">
            <div className="email"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

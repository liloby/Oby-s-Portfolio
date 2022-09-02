import * as messageAPI from "../../utilities/message-api"
import { useState } from 'react'

const initState = {
    name: '',
    email: '',
    phone: '',
    message: ''
}

export default function ContactPage() {
    const [formData, setFormData] = useState(initState)
    const [popup, setPopup] = useState(false)


   async function handleAddMessage(evt) {
    evt.preventDefault()
    const updatedMessage = {...formData}
    const message = await messageAPI.newMessage(updatedMessage)
    console.log(message, "MESSAGE AFTER CONTROLLER")
    setFormData(initState)
    setPopup(true)
   }

   function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value})
   }

   function handleDismiss() {
    setPopup(false)
   }

  return (
    <div className="Routes">
      <div className="message">
        <h1 className="white">Contact Me</h1>
        {popup === true ? 
        <div className="popup">
          <h4>Thank you for your message! I'll get back to you within 48 hours!</h4>
          <button onClick={handleDismiss}>Dismiss</button>
        </div>
        :
        ""
        }
        <form onSubmit={handleAddMessage}>
          <label className="white">Name:</label>
          <input onChange={handleChange} name="name" value={formData.name} type="text" required />
          <label className="white">Email:</label>
          <input onChange={handleChange} name="email" value={formData.email} type="email" required />
          <label className="white">Phone <span className="optional">(Optional) </span>:</label>
          <input onChange={handleChange} name="phone" value={formData.phone} type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Format: 123-456-7890"/>
          <label className="white">Message:</label>
          <textarea onChange={handleChange} name="message" value={formData.message} id="" cols="30" rows="10" required></textarea>
          <button type="submit">Send</button>
        </form>
        <div className="contact-icons">
          <a href="https://github.com/liloby" target="_blank">
            <div className="github"></div>
          </a>
          <a href="https://www.linkedin.com/in/oby-li-37276086/" target="_blank">
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

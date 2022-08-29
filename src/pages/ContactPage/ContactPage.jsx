export default function ContactPage() {
  return (
    <div className="Routes">
      <div className="message">
        <h1 className="white">Contact Me</h1>
        <form onSubmit="">
          <label className="white">Name:</label>
          <input type="text" required />
          <label className="white">Email:</label>
          <input type="email" required />
          <label className="white">Phone (Optional):</label>
          <input type="tel" name="" id="" />
          <label className="white">Message:</label>
          <textarea name="" id="" cols="30" rows="10" required></textarea>
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

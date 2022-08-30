import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import * as messageAPI from '../../utilities/message-api'
import { useState, useEffect } from 'react'

export default function NavBar({
  user,
  setUser,
  currentPage,
  handleHomePage,
  handleAboutPage,
  handlePortfolioPage,
  handleExperiencesPage,
  handleContactPage,
}) {
  const [messages, setMessages] = useState([])

  useEffect(
      function () {
          async function getMessages() {

              const allMessages = await messageAPI.getAll()
              console.log(allMessages)
              setMessages(allMessages.filter(a => a.read === false))
          }
          if (user) {
              getMessages()

          }
      },
      [user]
  )

  console.log(messages, "UNREAD MESSAGES")

  function handleLogOut() {
    userService.logOut();
    setUser(null)
  }
  return (
    <nav>
      <div className="Avatar-info-wrapper">
        <div className="Avatar"></div>
        <div className="white name">Oby Li</div>
        <div className="white role">Full Stack Developer</div>
      </div>
      <div className="Border-line"></div>
      <div className="Routes-Wrapper">
        <div>
          <Link
            onClick={handleHomePage}
            className={
              currentPage === 1
                ? "currentPage nav-tags HomeHref"
                : "nav-tags HomeHref"
            }
            to="/"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            onClick={handleAboutPage}
            className={
              currentPage === 2
                ? "currentPage nav-tags AboutHref"
                : "nav-tags AboutHref"
            }
            to="/about"
          >
            About
          </Link>
        </div>
        <div>
          <Link
            onClick={handlePortfolioPage}
            className={
              currentPage === 3
                ? "currentPage nav-tags PortfolioHref"
                : "nav-tags PortfolioHref"
            }
            to="/portfolio"
          >
            Portfolio
          </Link>
        </div>
        <div>
          <Link
            onClick={handleExperiencesPage}
            className={
              currentPage === 4
                ? "currentPage nav-tags ExperiencesHref"
                : "nav-tags ExperiencesHref"
            }
            to="/experiences"
          >
            Experiences
          </Link>
        </div>
        <div>
        <Link
          onClick={handleContactPage}
          className={
            currentPage === 5
              ? "currentPage nav-tags ContactHref"
              : "nav-tags ContactHref"
          }
          to="/contact"
        >
          Contact
        </Link>
        </div>
        { user ?
        <div className="admin-btn">
          <h3 className="new-messages">{messages.length}</h3>
          <Link to="/admin">Admin</Link>
          <Link onClick={handleLogOut} to="/">Log Out</Link>
        </div>
          :
          ""
          }
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import * as messageAPI from "../../utilities/message-api";
import { useState, useEffect } from "react";

export default function NavBar({
  user,
  setUser,
  currentPage,
  handleHomePage,
  handleAboutPage,
  handlePortfolioPage,
  handleExperiencesPage,
  handleContactPage,
  handleLightMode,
  lightMode,
  showMenu,
}) {
  const [messages, setMessages] = useState([]);

  useEffect(
    function () {
      async function getMessages() {
        const allMessages = await messageAPI.getAll();
        console.log(allMessages);
        setMessages(allMessages.filter((a) => a.read === false));
      }
      if (user) {
        getMessages();
      }
    },
    [user]
  );

  console.log(messages, "UNREAD MESSAGES");

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav className={lightMode && showMenu ? "lightModeNav hideNav"
                    : showMenu ? "hideNav" 
                    : lightMode && !showMenu ? "lightModeNav showNav"
                    : !showMenu ? "showNav"
                    :
                    ""
      }>
      <div className="Avatar-info-wrapper">
        <div className="LightMode-wrapper">
          <button className={lightMode? "modeSwitch modeSwitchLight" : "modeSwitch"} onClick={handleLightMode}>
            {lightMode ? "🌙 " : "🔅"}
          </button>
        </div>
        <div className={user ? "Avatar border" : "Avatar"}></div>
        <div className="name">Oby Li</div>
        <div className={lightMode ? "lightModeRole role" : "role"}>
          Full Stack Developer
        </div>
        <div className="resume-wrapper">
          <a target="_blank" href="https://docs.google.com/document/d/1O_G2jAch-5sqaim5r_4XNdDB_O6hp7MmiKmWuSLOU0I/export?format=pdf">Résumé</a>
        </div>
      </div>
      <div className={lightMode ? "lightModeBorder" : "Border-line"}></div>
      <div className="Routes-Wrapper">
        <div>
          <Link
            onClick={handleHomePage}
            className={
              currentPage === 1 && lightMode
                ? "currentPage nav-tags HomeHref lightHome"
                : currentPage === 1 && !lightMode
                ? "currentPage nav-tags HomeHref"
                : lightMode
                ? "nav-tags HomeHref lightHome"
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
              currentPage === 2 && lightMode
                ? "currentPage nav-tags AboutHref lightAbout"
                : currentPage === 2 && !lightMode
                ? "currentPage nav-tags AboutHref"
                : lightMode
                ? "nav-tags AboutHref lightAbout"
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
              currentPage === 3 && lightMode
                ? "currentPage nav-tags PortfolioHref lightPortfolio"
                : currentPage === 3 && !lightMode
                ? "currentPage nav-tags PortfolioHref"
                : lightMode
                ? "nav-tags PortfolioHref lightPortfolio"
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
              currentPage === 4 && lightMode
                ? "currentPage nav-tags ExperiencesHref lightExperiences"
                : currentPage === 4 && !lightMode
                ? "currentPage nav-tags ExperiencesHref"
                : lightMode
                ? "nav-tags ExperiencesHref lightExperiences"
                : "nav-tags ExperiencesHref"
            }
            to="/experiences"
          >
            Extracurricular
          </Link>
        </div>
        <div>
          <Link
            onClick={handleContactPage}
            className={
              currentPage === 5 && lightMode
                ? "currentPage nav-tags ContactHref lightContact"
                : currentPage === 5 && !lightMode
                ? "currentPage nav-tags ContactHref"
                : lightMode
                ? "nav-tags ContactHref lightContact"
                : "nav-tags ContactHref"
            }
            to="/contact"
          >
            Contact
          </Link>
        </div>
        {user ? (
          <div className="admin-btn">
            {messages.length === 0 ? (
              ""
            ) : messages.length < 2 ? (
              <h3 className="new-messages">{messages.length} New Message</h3>
            ) : (
              <h3 className="new-messages">{messages.length} New Messages</h3>
            )}
            <Link className="admin-text" to="/admin">
              Admin
            </Link>
            <Link className="logout-text" onClick={handleLogOut} to="/">
              Log Out
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

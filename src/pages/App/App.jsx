import "./App.css";
import { useState} from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import ExperiencesPage from "../ExperiencesPage/ExperiencesPage";
import ContactPage from "../ContactPage/ContactPage";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect } from "react";
import Snowfall from "react-snowfall";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [currentPage, setCurrentPage] = useState(1);
  const [lightMode, setLightMode] = useState(false)
  const [showMenu, setShowMenu] = useState(true)

  function handleHomePage() {
    setCurrentPage(1);
    setShowMenu(!showMenu)
  }

  function handleAboutPage() {
    setCurrentPage(2);
    setShowMenu(!showMenu)
  }

  function handlePortfolioPage() {
    setCurrentPage(3);
    setShowMenu(!showMenu)
  }

  function handleExperiencesPage() {
    setCurrentPage(4);
    setShowMenu(!showMenu)
  }

  function handleContactPage() {
    setCurrentPage(5);
    setShowMenu(!showMenu)
  }

  function handleLightMode() {
    if (!lightMode) {
      setLightMode(true)
    } else {
      setLightMode(false)
    }
  }

  return (
    <main className={lightMode ? "lightModeApp App" : "App"}>
      {
        <div className={lightMode ? "lightModeMain Main-Container-Wrapper" : "Main-Container-Wrapper"}>
          <div className={showMenu? "menu small-screen" :"menu small-screen close-menu"} onClick={() => setShowMenu(!showMenu)}></div>
          <Snowfall style={{ position: 'fixed', width: '100vw', height: '100vh'}}
          snowflakeCount={50}
          speed={[.5, 1]}
          wind={[-.5, 2]}
          />
          <NavBar
            user={user}
            setUser={setUser}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleHomePage={handleHomePage}
            handleAboutPage={handleAboutPage}
            handlePortfolioPage={handlePortfolioPage}
            handleExperiencesPage={handleExperiencesPage}
            handleContactPage={handleContactPage}
            handleLightMode={handleLightMode}
            lightMode={lightMode}
            showMenu={showMenu}
          />
          <Routes>
            <Route path="/" element={<HomePage handleAboutPage={handleAboutPage} lightMode={lightMode} />} />
            <Route path="/about" element={<AboutPage lightMode={lightMode} />} />
            <Route path="/portfolio" element={<PortfolioPage lightMode={lightMode} />} />
            <Route path="/experiences" element={<ExperiencesPage lightMode={lightMode} />} />
            <Route path="/contact" element={<ContactPage lightMode={lightMode}  />} />
            <Route path="/admin" element={< AuthPage setUser={setUser} user={user} lightMode={lightMode} />} />
          </Routes>
        </div>
      }
    </main>
  );
}

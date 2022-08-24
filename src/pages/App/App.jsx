import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import ExperiencesPage from "../ExperiencesPage/ExperiencesPage";
import ContactPage from "../ContactPage/ContactPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [currentPage, setCurrentPage] = useState(1);

  function handleHomePage() {
    setCurrentPage(1);
  }

  function handleAboutPage() {
    setCurrentPage(2);
  }

  function handlePortfolioPage() {
    setCurrentPage(3);
  }

  function handleExperiencesPage() {
    setCurrentPage(4);
  }

  function handleContactPage() {
    setCurrentPage(5);
  }

  return (
    <main className="App">
      {
        // user ?
        <div className="Main-Container-Wrapper">
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
          />
          <Routes>
            <Route path="/" element={<HomePage handleAboutPage={handleAboutPage} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        // :
        // <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

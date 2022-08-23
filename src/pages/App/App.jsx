import './App.css';
import { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import AuthPage from "../AuthPage/AuthPage"
import { getUser } from "../../utilities/users-service" 
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';



export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      { 
        // user ? 
        <div className="Main-Container-Wrapper">
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        </div>
        // :
        // <AuthPage setUser={setUser}/>
      }
    </main>
  );
}



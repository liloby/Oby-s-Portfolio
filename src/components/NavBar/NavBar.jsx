import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  return (
    <nav>
      <div>
        <div></div>
        <div>Oby Li</div>
        <div>Full Stack Developer</div>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/portfolio">Portfolio</Link>
      </div>
      <div>
        <Link to="/experiences">Experiences</Link>
      </div>
      <Link to="/contact">Contact</Link>
      <div></div>
    </nav>
  );
}

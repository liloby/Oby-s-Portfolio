import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  return (
    <nav>
      <div className="Avatar-info-wrapper">
        <div className="Avatar"></div>
        <div className="white name">Oby Li</div>
        <div className="white role">Full Stack Developer</div>
      </div>
      <hr />
      <div className="Routes-Wrapper">
      <div>
        <Link className="nav-tags HomeHref" to="/">Home</Link>
      </div>
      <div>
        <Link className="nav-tags AboutHref" to="/about">About</Link>
      </div>
      <div>
        <Link className="nav-tags PortfolioHref" to="/portfolio">Portfolio</Link>
      </div>
      <div>
        <Link className="nav-tags ExperiencesHref" to="/experiences">Experiences</Link>
      </div>
      <Link className="nav-tags ContactHref" to="/contact">Contact</Link>
      <div></div>
      </div>
    </nav>
  );
}

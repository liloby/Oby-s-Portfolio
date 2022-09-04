import { Link } from "react-router-dom";

export default function HomePage({ handleAboutPage, lightMode }) {
  return (
    <div className="Routes">
      <div className="Home-Info-Wrapper">
        <div className="Home-Info">
          <h1 className="white HomeName">Hello, I'm Oby</h1>
          <p className="white paragraph">
            I am a full-stack Software Developer in Los Angeles. I love the
            process of tranforming thoughts into reality!
          </p>
          <Link
            onClick={handleAboutPage}
            className={lightMode ? "lightClickAbout ClickAbout" : "ClickAbout"}
            to="/about"
          >
            Click here to know more about me!
          </Link>
        </div>
      </div>
    </div>
  );
}

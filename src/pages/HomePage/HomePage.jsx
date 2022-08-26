import { Link } from "react-router-dom";

export default function HomePage({ handleAboutPage }) {
  return (
    <div className="Routes">
      <div className="Home-Info-Wrapper">
        <div className="Home-Info">
          <h1 className="white HomeName">Hello, I'm Oby</h1>
          <p className="white paragraph">
            I am a full-stack Software Developer who enjoys
            creating custom designs, functionality, and animations for web
            applications
          </p>
          <Link onClick={handleAboutPage} className="ClickAbout" to="/about">
            Click here to know more about me!
          </Link>
        </div>
      </div>
    </div>
  );
}

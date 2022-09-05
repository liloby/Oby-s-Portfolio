import { checkToken } from "../../utilities/users-service";

export default function AboutPage({ lightMode }) {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <div className="Routes">
      <div className="About-Info-Wrapper">
        <div className="ProfilePic-Wrapper">
          <div className="ProfilePic"></div>
        </div>
        <div className="AboutMe white">
          <span className="About-titles">About Me</span>
          <div className="AboutMe-Wrapper">
            <p>
              <span className="Indent"></span>I graduated from UCLA with a
              major in Linguistics and Psychology. My studies helped me
              understand the fundamentals of language and communication which I
              use to translate ideas into code and code into reality. From the
              back-end to the front-end, I enjoy all the steps of bringing a web
              application to life.
            </p>
          </div>
        </div>

        <div className="Skills white">
          <span className="About-titles">Skills</span>
          <div className={lightMode ? "lightSkills" : "Skills-Wrapper"}>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Python</p>
            <p>Django</p>
            <p>Express.js</p>
            <p>Node.js</p>
            <p>PostgreSQL</p>
            <p>SQL</p>
            <p>React.js</p>
            <p>Materialize</p>
            <p>Bootstrap</p>
            <p>Design</p>
            <p>Animation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { checkToken } from "../../utilities/users-service";

export default function AboutPage() {
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
                <span className="Indent">In the past, </span>
                I graduated from UCLA majoring in Linguistics and
              Psychology where the learning environment is face-paced and
              challenging. Moving forward, I wish to
              apply the same commitment and hard work to continue to grow in a
              Software Development position and as an individual. I especially love designing and bringing web applications to live!
            </p>
          </div>
        </div>

        <div className="Skills white">
          <span className="About-titles">Skills</span>
          <div className="Skills-Wrapper">
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

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
              challenging. Most recently, I was an assistant manager in a
              restaurant where it taught me not only customer satisfaction
              skills but I also took on a role to become a leader to work with
              my staff to upgrade the restaurant’s health code from a B to an A.
              The experience shaped me to become an organized and detail
              oriented person who can follow and carry out instructions. Being
              in a managerial position also taught me how to adapt to a
              fast-paced and a slow-paced environment. Moving forward, I wish to
              apply the same commitment and skill set to continue to grow in a
              Software Development position and as an individual.
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

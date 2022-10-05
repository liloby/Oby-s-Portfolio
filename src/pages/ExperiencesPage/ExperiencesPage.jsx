export default function ExperiencesPage({ lightMode }) {
  return (
    <div className="Routes">
      <div
        className={
          lightMode
            ? "Experience-wrapper lightExperience-wrapper"
            : "Experience-wrapper"
        }
      >
        <h1 className="white">Extracurricular</h1>
        <div className="Yilan-wrapper">
          <div className="Yilan-img"></div>
          <p className="Yilan-info white">
            I volunteered to be a teacher in Yilan, Taiwan for underprivileged
            children to help them learn English. It was a very meaningful
            experience, and I learned a lot from them.
          </p>
        </div>
        <div className="Volunteer-wrapper">
          <p className="Volunteer-info white">
            At UCLA, I had the opportunity to volunteer in a variety of
            programs. At a local middle school, my dorm-mates and I got to
            repaint parts of the school to help brighten up the campus.
          </p>
          <div className="Volunteer-img"></div>
        </div>
        <div className="OTN-wrapper">
          <div className="OTN-img"></div>
          <p className="OTN-info white">
            I was very active in my acapella group while at UCLA. It provided a
            ton of great opportunities to grow and learn. One cool experience
            was when we performed at an event to raise awareness for HBV.
          </p>
        </div>
      </div>
    </div>
  );
}

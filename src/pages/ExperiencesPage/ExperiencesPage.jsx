export default function ExperiencesPage({ lightMode }) {
  return (
    <div className="Routes">
      <div className={lightMode ? "Experience-wrapper lightExperience-wrapper" : "Experience-wrapper"}>
        <h1 className="white">Experiences</h1>
        <div className="Yilan-wrapper">
          <div className="Yilan-img"></div>
          <p className="Yilan-info white">
            In this photo, I had the opportunity to volunteer for a Church in
            Yilan to be a teacher for minority group of children who did not
            have the privilege to learn English. It was a very meaningful
            experience and I learned a lot from them especially their culture!
          </p>
        </div>
        <div className="Volunteer-wrapper">
          <p className="Volunteer-info white">
            At UCLA, I got the chance to volunteer at a local middle school
            where my dorm-mates and I got to help renew the environment of the
            school by applying new painting.
          </p>
          <div className="Volunteer-img"></div>
        </div>
        <div className="OTN-wrapper">
          <div className="OTN-img"></div>
          <p className="OTN-info white">
            This is my Acapella group when I was at UCLA. This picture was taken
            after we performed at an event to raise college students' awareness for HBV.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import OurMissionPage from "../components/OurMissionPage";
import "./AboutPage.css";

// const styles = {
//   backgroundImage: `url(${AboutImage})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',

// };

const AboutPage = () => {
  return (
    <div>
      <div className="about">
        <h1>About NRC</h1>
        <p>
          The Nigeria Railway Corporation (NRC) provides safe, reliable, and
          efficient rail transport, connecting cities and making travel seamless
          across Nigeria.
        </p>
      </div>
      <OurMissionPage />
    </div>
  );
};

export default AboutPage;

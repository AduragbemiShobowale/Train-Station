import React from "react";
import OurMissionPage from "../components/OurMissionPage";
import Stats from "../components/Stats";
import "../pages/AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="contentText">
          <h1 className="about">
            <b>About NRC</b>{" "}
          </h1>
          <p className="railway md:w-[0%] lg:w-[60%] ">
            The Nigeria Railway Corporation (NRC) provides safe, reliable, and
            efficient rail transport, connecting cities and making travel
            seamless across Nigeria.
          </p>
        </div>
      </div>
      <OurMissionPage />
      <Stats />
    </div>
  );
};

export default AboutPage;

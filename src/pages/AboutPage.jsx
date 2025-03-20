import React from "react";
import OurMissionPage from "../components/OurMissionPage";
import RailwayCompanion from "../components/RailwayCompanion";
import Stats from "../components/Stats";
import "../pages/AboutPage.css";
import Testimonial from "../components/testimonials/Testimonial";

const AboutPage = () => {
  return (
    <div>
      <div className="aboutMain-Container">
        <div className="contentText">
          <h1 className="about">
            <b>About NRC</b>{" "}
          </h1>
          <p className="railway md:w-[45%]  ">
            The Nigeria Railway Corporation (NRC) provides safe, reliable, and
            efficient rail transport, connecting cities and making travel
            seamless across Nigeria.
          </p>
        </div>
      </div>
      <OurMissionPage />
      <Stats />
      <Testimonial />
      <RailwayCompanion />
    </div>
  );
};

export default AboutPage;

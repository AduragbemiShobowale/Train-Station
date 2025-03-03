import React from "react";
import Train from "../assets/image/ourMission.png";
import star from "../assets/icon/Vector.png";
import "./OurMissionPage.css";

const OurMissionPage = () => {
  return (
    //the main body
    <div className="Main ">
      {/* ////////////////// */}
      <div className="train ">
        <img className="Train" src={Train} alt="" />
      </div>
      {/* //////////////////////////////////////////////// */}
      <div className="text">
        <h1>Our Mission</h1>
        <p>
          At NRC Train Booking, our mission is to modernize rail travel in
          Nigeria with a secure, seamless, and user-friendly platform that makes
          train ticket booking effortless for everyone.
        </p>

        <div className="bullet1">
          <img className="star" src={star} alt="" />
          <p>
            Enhance Accessibility – Making train travel easy and available to
            all passengers across Nigeria, from urban cities to rural areas
          </p>
        </div>
        <div className="bullet2">
          <img className="star" src={star} alt="" />{" "}
          <p>
            Improve Efficiency – Reducing wait times, eliminating ticketing
            queues, and ensuring real-time train availability updates.
          </p>
        </div>
        <div className="bullet3 ">
          <img className="star" src={star} alt="" />
          <p>
            {" "}
            Empowering our users with the knowledge and tools to grow their
            businesses and expand their reach
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMissionPage;

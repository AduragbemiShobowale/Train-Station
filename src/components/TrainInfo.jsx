import React from "react";
import "./TrainInfo.css";

const TrainInfo = () => {
  return (
    <section className="full-container max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-6 px-6 md:px-20">
      <div className="card card-train">
        <div className="card-content">
          <h3 className="title">Changes to Train Times</h3>
          <p className="description">Check your routes before traveling</p>
          <button className="know-more">Know More</button>
        </div>
      </div>

      <div className="card card-eticket">
        <div className="card-content">
          <h3 className="title">Try E-Ticketing</h3>
          <p className="description">
            A more convenient way to get your ticket
          </p>
          <button className="know-more">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default TrainInfo;

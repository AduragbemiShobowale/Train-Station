import React from "react";
import "./TrainInfo.css";

const TrainInfo = () => {
  return (
    <section className="full-container max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-6 p-10 md:p-20">
      <div className="card-train">
        <div className="card-content pt-12 ml-5 mx-auto">
          <h3 className="text-3xl font-bold pb-1">Changes to Train Times</h3>
          <p className="pb-10">Check your routes before traveling</p>
          <button className="know-more font-semibold">Know More</button>
        </div>
      </div>

      <div className="card-eticket">
        <div className="card-content pt-12 ml-5 mx-auto">
          <h3 className="font-bold">Try E-Ticketing</h3>
          <p className="moreText pb-10">
            A more convenient way to get your ticket
          </p>
          <button className="know-more font-semibold">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default TrainInfo;

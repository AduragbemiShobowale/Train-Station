import React from "react";
import Destinations from "../components/Destination";
import OurServices from "../components/OurServices";
import TrainInfo from "../components/TrainInfo";
import "./HomePage.css";
import RailwayCompanion from "../components/RailwayCompanion";
import NewsUpdates from "../components/NewsUpdates";
import FindTrain from "../components/FindTrain";

function HomePage() {
  return (
    <div>
      <div className="relative">
        <div className="mainCont">
          <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center md:text-left lg:text-left py-20 px-6 md:px-12 gap-5 md:justify-start md:items-start ">
            <h1 className="lg:text-[56px] text-[28px] md:text-left text-white font-bold leading-tight max-w-[800px]">
              Journey Through Nigeria's Heart by Rail
            </h1>
            <p className="text-white text-[14px] md:text-left lg:text-[18px] max-w-[600px] px-6 md:px-0 lan">
              Safe, comfortable, and reliable train services across the nation.
              Experience the future of Nigerian transportation, today.
            </p>
          </div>
        </div>
        <FindTrain />
        <Destinations />
        <OurServices />
        <TrainInfo />
        <NewsUpdates />
        <RailwayCompanion />
      </div>
    </div>
  );
}

export default HomePage;

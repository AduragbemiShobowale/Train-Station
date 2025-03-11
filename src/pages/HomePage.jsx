import React from "react";
import Destinations from "../components/Destination";
import OurServices from "../components/OurServices";
import TrainInfo from "../components/TrainInfo";
import "./HomePage.css";
import RailwayCompanion from "../components/RailwayCompanion";
import NewsUpdates from "../components/NewsUpdates";
import FindTrain from "../components/FindTrain";
import NotFound from "../components/NotFound";

function HomePage() {
  return (
    <div>
      <div className="relative">
        <div className="mainCont">
          <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center md:text-start py-20 px-6 md:px-12 gap-5 md:justify-start md:items-start ">
            <h1 className="lg:text-[56px] text-[28px] text-white font-bold leading-tight max-w-[800px]">
              Journey Through Nigeria's Heart by Rail
            </h1>
            <p className="text-white text-[14px] lg:text-[18px] max-w-[600px] px-6 md:px-0">
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
        <NotFound/>
      </div>
    </div>
  );
}

export default HomePage;

import React from "react";
import "./Stats.jsx";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="main-container">
      <div className="stat-element md:flex md:gap-3">
        <span className="figures">100k+</span>
        <span className="text text-start">Happy Customers</span>
      </div>
      <div className="stat-element md:flex items-center md:gap-3">
        <span className="figures">140+</span>
        <span className="text text-start md:w-3">Routes Covered</span>
      </div>
      <div className="stat-element md:flex items-center md:gap-3">
        <span className="figures">140+</span>
        <span className="text text-start md:w-3">Routes Covered</span>
      </div>
    </div>
  );
};

export default Stats;

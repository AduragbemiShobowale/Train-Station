import React from "react";
import "./Stats.jsx";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="main-container">
      <div className="stat-element">
        <span className="figures">100k+</span>
        <span className="text">Happy Customers</span>
      </div>
      <div className="stat-element">
        <span className="figures">140+</span>
        <span className="text">Routes Covered</span>
      </div>
      <div className="stat-element">
        <span className="figures">140+</span>
        <span className="text">Routes Covered</span>
      </div>
    </div>
  );
};

export default Stats;

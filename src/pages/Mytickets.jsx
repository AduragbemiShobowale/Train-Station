import "./Mytickets.css";
import React from "react";
import { IoBusSharp } from "react-icons/io5";
const Mytickets = () => {
  return (
    <div className="MainCont">
      <div>
        <h1>My Tickets</h1>
      </div>
      <div className="Icn">
        <img className="IoBusSharp " src={IoBusSharp} alt="IoBusSharp" />
        <h1>Lagos - Ibadan Morning Train </h1>
        <p>Train No - LL1 | PNR No: 5R2WSIX786</p>
        <a href="#">Active</a>
      </div>
      <div Secont>
        <div className="First">
          <div>
            <time datetime="#">07:00</time>
            <p>Mobalaji Johnson Station</p>
            <p>Ebute Metta</p>
            <p>28 - Jan - 2025</p>
          </div>
        </div>
        <div className="Second">
          <div>
            <p>0 hrs 24 mins</p>
            <p>Non Stop</p>
            <a href="#">Business Class</a>
          </div>
        </div>
        <div className="Third">
          <div>
            <time datetime="#">08:21</time>
            <p>Mobalaji Johnson Station</p>
            <p>Ebute Metta</p>
            <p>28 - Jan - 2025</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="MainCont2">
        <div>
          <h1>Passenger: Oluwaseun Adedayo</h1>
          <p>NIN: ****2034 | </p>
        </div>
      </div>
    </div>
  );
};

export default Mytickets;

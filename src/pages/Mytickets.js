import React from "react";
import MyTickets from "../components/Mytickets";
import "./Mytickets.css";

const Mytickets = () => {
  const tickets = [
    {
      route: "Lagos - Ibadan Morning Train",
      trainNo: "LL1",
      pnr: "5R2WSIX786",
      departureTime: "07:57",
      departureStation: "Mobolaji Johnson Station, Ebute Metta",
      arrivalTime: "08:21",
      arrivalStation: "Mobolaji Johnson Station, Ebute Metta",
      duration: "0 hrs 24 mins",
      class: "Business Class",
      passenger: "Oluwaseun Adedayo",
      nin: "2034",
      contact: "08164567825",
      type: "Adult",
      seat: "CO1/1A",
      price: "6500",
    },
  ];

  return (
    <div className="mytickets">
      <h1>Mytickets</h1>
      {tickets.map((ticket, index) => (
        <Mytickets key={index} ticket={ticket} />
      ))}
    </div>
  );
};

export default Mytickets;

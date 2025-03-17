import React from "react";
import Opps from "../assets/image/Train17363.png";

const OppS = () => {
  return (
    <section className="flex items-center justify-center text-center p-2">
      <div className="flex flex-col items-center">
        <img src={Opps} alt="No trains found" className="w-48 md:w-56" />
        <h2 className="font-bold text-2xl px-6">
          Oops! No Trains Found for Your Search.
        </h2>
        <p className="text-base font-normal max-w-2xl mx-auto  px-5 p-2 text-gray-600">
          No trains found for your selected route and date. This may be due to
          no scheduled trains, full bookings, or temporary disruptions. Try a
          different date or check alternative routes.
        </p>
      </div>
    </section>
  );
};

export default OppS;

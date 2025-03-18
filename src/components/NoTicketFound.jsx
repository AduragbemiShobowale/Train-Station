import React from "react";
import IMG from "../assets/image/Mask Group 5.png";

const NoTicketFound = () => {
  return (
    <section className="flex items-center justify-center text-center p-2">
      <div className="flex flex-col items-center">
        <img src={IMG} alt="No trains found" className="w-48 md:w-56" />
        <h2 className="font-bold text-3xl pt-3 mb-3 px-2">No Tickets Found</h2>
        <p className="text-base font-normal max-w-2xl mx-auto px-5  text-gray-600">
          It looks like you haven't booked any train tickets yet. Once you make
          a booking, your tickets will appear here for easy access.
        </p>

        <a href="/">
          <button className="mt-4 border border-green-500 text-green-500 px-5 py-2 rounded-sm cursor-pointer hover:bg-green-500 hover:text-white transition duration-500">
            Book a Ticket
          </button>
        </a>
      </div>
    </section>
  );
};

export default NoTicketFound;

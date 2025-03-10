// components/TrainBooking.js
import React from "react";
import trainSchedules from "./trainSchedule";
import FirstClassIcon from "../../assets/icon/firstClass.png";
import BusinessClassIcon from "../../assets/icon/businessClass.png";
import StandardClassIcon from "../../assets/icon/standardClass.png";
import Lefticon from "../../assets/icon/left.png";
import Righticon from "../../assets/icon/right.png";

// 1) Import the context and the router hook
import { useSelectedTrain } from "../../contexts/SelectedTrainContext";
import { useNavigate } from "react-router-dom";

// 2) A helper function to get the icon for each class
const getClassIcon = (type) => {
  const icons = {
    "first class": FirstClassIcon,
    "business class": BusinessClassIcon,
    "standard class": StandardClassIcon,
  };
  return icons[type.toLowerCase()] || null;
};

const TrainBooking = () => {
  // 3) Destructure the set functions from our context
  const { setSelectedTrain, setSelectedClass } = useSelectedTrain();

  // 4) useNavigate for routing
  const navigate = useNavigate();

  // 5) When user clicks Book Now, store data in context & navigate
  const handleBookNow = (train, ticketClass) => {
    setSelectedTrain(train); // Entire train object
    setSelectedClass(ticketClass.type); // E.g. “Business Class”
    navigate("/booking"); // Go to booking form page
  };

  return (
    <div className="max-w-6xl mx-auto rounded-lg">
      {trainSchedules.map((train, index) => (
        <div key={index} className="mb-10 mx-7 rounded-lg shadow-lg">
          {/* Title */}
          <h3 className="text-center font-bold text-[16px] lg:text-[29.11px] py-6 bg-green-100 rounded-t-lg">
            {train.route} | {train.timeOfDay} | Train No - {train.trainNumber}
          </h3>

          {/* Main Body */}
          <div className="p-12">
            <div className="flex flex-col md:flex-row text-center gap-7 justify-between items-center p-6 bg-white rounded-t-md">
              {/* Departure */}
              <div className="md:text-left text-center">
                <p className="font-bold text-lg">{train.departure.time}</p>
                <p className="font-semibold">{train.departure.station}</p>
                <p className="text-sm text-gray-600">
                  {train.departure.street}
                </p>
                <p className="text-sm text-gray-600">{train.departure.date}</p>
              </div>

              {/* Duration */}
              <div className="text-center flex items-center gap-9 justify-center">
                <img
                  className="w-[68px] md:w-[90px]"
                  src={Lefticon}
                  alt="Left Arrow Icon"
                />
                <p className="font-bold text-green-600 text-[15px] lg:text-[28px]">
                  {train.duration}
                </p>
                <img
                  className="w-[68px] md:w-[90px]"
                  src={Righticon}
                  alt="Right Arrow Icon"
                />
              </div>

              {/* Arrival */}
              <div className="md:text-right text-center">
                <p className="font-bold text-lg">{train.arrival.time}</p>
                <p className="font-semibold">{train.arrival.station}</p>
                <p className="text-sm text-gray-600">{train.arrival.street}</p>
                <p className="text-sm text-gray-600">{train.arrival.date}</p>
              </div>
            </div>
            <hr />

            {/* Ticket Classes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {train.classes.map((ticketClass, classIndex) => (
                <div
                  key={classIndex}
                  className="p-6 rounded-lg shadow-sm text-center bg-white"
                >
                  <img
                    src={getClassIcon(ticketClass.type)}
                    alt={`${ticketClass.type} Icon`}
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <h3 className="font-bold text-lg">{ticketClass.type}</h3>
                  <p className="text-gray-700">
                    Adult:{" "}
                    <span className="font-semibold">
                      {ticketClass.priceAdult}
                    </span>{" "}
                    | Child:{" "}
                    <span className="font-semibold">
                      {ticketClass.priceChild}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Reserved: {ticketClass.reserved}
                  </p>

                  {/* 6) Clicking this calls handleBookNow */}
                  <button
                    className="mt-4 hover:cursor-pointer text-green-400 border border-green-400 hover:bg-green-700 hover:text-white w-full py-2 px-6 rounded-lg transition duration-300"
                    onClick={() => handleBookNow(train, ticketClass)}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainBooking;

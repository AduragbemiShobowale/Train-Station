// components/BookingForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelectedTrain } from "../contexts/SelectedTrainContext";
import FindMyTrain from "./searchTrain/FindMyTrain";
import Lefticon from "../assets/icon/left.png";
import Righticon from "../assets/icon/right.png";

// 1) Helper function to get text & background color classes
const getClassBadgeStyle = (classType) => {
  switch (classType.toLowerCase()) {
    case "business class":
      return "text-[#F4AC00] bg-[#FFF7E3]";
    case "first class":
      return "text-[#18A532] bg-[#E8FFED]";
    case "standard class":
      return "text-[#595959] bg-[#EDEDED]";
    default:
      return "text-gray-700 bg-gray-200";
  }
};

const BookingForm = () => {
  const navigate = useNavigate();
  const { selectedTrain, selectedClass } = useSelectedTrain();

  // Early return if no train is selected
  if (!selectedTrain) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <FindMyTrain />
        <p>Please select a train first.</p>
        <button
          onClick={() => navigate("/searchTrain")}
          className="mt-4 border px-4 py-2 rounded-md"
        >
          Back to Search
        </button>
      </div>
    );
  }

  // State for seat details (Class, Coach, Seat)
  // Auto-select the Class from context (selectedClass)
  const [seatData, setSeatData] = useState({
    class: selectedClass || "",
    coach: "",
    seat: "",
  });

  // Passenger forms state
  const [passengers, setPassengers] = useState([
    {
      id: 1,
      passengerType: "",
      passengerName: "",
      ninNumber: "",
      email: "",
      phone: "",
    },
  ]);

  // Contact details state
  const [contact, setContact] = useState({ email: "", phone: "" });

  // Handlers for seat data
  const handleSeatDataChange = (field, value) => {
    setSeatData((prev) => ({ ...prev, [field]: value }));
  };

  // Handlers for passengers
  const addPassenger = () => {
    setPassengers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        passengerType: "",
        passengerName: "",
        ninNumber: "",
        email: "",
        phone: "",
      },
    ]);
  };

  const removePassenger = (id) => {
    if (passengers.length === 1) return; // Prevent removing the only passenger
    setPassengers(passengers.filter((p) => p.id !== id));
  };

  const handlePassengerChange = (id, field, value) => {
    setPassengers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  // Handlers for contact details
  const handleContactChange = (field, value) => {
    setContact({ ...contact, [field]: value });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      selectedTrain,
      seatData, // includes { class, coach, seat }
      passengers, // array of passenger objects
      contact, // { email, phone }
    };
    console.log("Booking Data:", bookingData);
    // Optionally navigate to a confirmation page, etc.
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* (Optional) Search bar again at the top */}
      <FindMyTrain />

      {/* Selected train info */}
      <h2 className="text-center font-bold text-xl my-4">
        {selectedTrain.route} | {selectedTrain.timeOfDay} | Train No -{" "}
        {selectedTrain.trainNumber}
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-md">
        {/* Departure Info */}
        <div className="text-left mb-4 md:mb-0">
          <p className="font-bold text-lg">{selectedTrain.departure.time}</p>
          <p className="font-semibold">{selectedTrain.departure.station}</p>
          <p className="text-sm text-gray-600">
            {selectedTrain.departure.street}
          </p>
          <p className="text-sm text-gray-600">
            {selectedTrain.departure.date}
          </p>
        </div>

        {/* Duration & Class Badge */}
        <div className="text-center mb-4 md:mb-0">
          <p className="font-bold">{selectedTrain.duration}</p>
          {/* 2) Class badge with dynamic styling */}
          <p
            className={`inline-block px-7 md:text-[16px] py-1 mt-1 rounded-full font-semibold ${getClassBadgeStyle(
              selectedClass
            )}`}
          >
            {selectedClass}
          </p>
        </div>

        {/* Arrival Info */}
        <div className="text-right">
          <p className="font-bold text-lg">{selectedTrain.arrival.time}</p>
          <p className="font-semibold">{selectedTrain.arrival.station}</p>
          <p className="text-sm text-gray-600">
            {selectedTrain.arrival.street}
          </p>
          <p className="text-sm text-gray-600">{selectedTrain.arrival.date}</p>
        </div>
      </div>

      {/* Book a Seat Section */}
      <h2 className="text-xl font-bold mt-6 mb-4">Book a Seat</h2>
      <form onSubmit={handleSubmit}>
        {/* Class, Coach, Seat */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Class */}
          <div>
            <label className="block mb-1 font-medium">Class</label>
            <select
              value={seatData.class}
              onChange={(e) => handleSeatDataChange("class", e.target.value)}
              className="border p-2 w-full"
            >
              <option value="">Select Class</option>
              <option value="Business Class">Business Class</option>
              <option value="Standard Class">Standard Class</option>
              <option value="First Class">First Class</option>
            </select>
          </div>

          {/* Coach */}
          <div>
            <label className="block mb-1 font-medium">Coach</label>
            <select
              value={seatData.coach}
              onChange={(e) => handleSeatDataChange("coach", e.target.value)}
              className="border p-2 w-full"
            >
              <option value="">Select Coach</option>
              <option value="Coach 1">Coach 1</option>
              <option value="Coach 2">Coach 2</option>
            </select>
          </div>

          {/* Seat */}
          <div>
            <label className="block mb-1 font-medium">Seat</label>
            <select
              value={seatData.seat}
              onChange={(e) => handleSeatDataChange("seat", e.target.value)}
              className="border p-2 w-full"
            >
              <option value="">Select seat</option>
              <option value="C03/8">C03/8</option>
              <option value="C03/9">C03/9</option>
              {/* Add more seat options as needed */}
            </select>
          </div>
        </div>

        {/* Passenger Forms */}
        {passengers.map((passenger, idx) => (
          <div
            key={passenger.id}
            className="bg-white shadow p-4 mb-4 rounded-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">
                Passenger {idx + 1} - Coach No / Seat No:{" "}
                {seatData.seat || "C03/8"}
              </h3>
              {passengers.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePassenger(passenger.id)}
                  className="text-red-500"
                >
                  Clear Details
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Passenger Type */}
              <div>
                <label className="block mb-1 font-medium">Passenger Type</label>
                <select
                  value={passenger.passengerType}
                  onChange={(e) =>
                    handlePassengerChange(
                      passenger.id,
                      "passengerType",
                      e.target.value
                    )
                  }
                  className="border p-2 w-full"
                >
                  <option value="">Select passenger type</option>
                  <option value="Adult">Adult</option>
                  <option value="Child">Child</option>
                </select>
              </div>

              {/* Passenger Name */}
              <div>
                <label className="block mb-1 font-medium">Passenger Name</label>
                <input
                  type="text"
                  placeholder="Enter passenger name"
                  value={passenger.passengerName}
                  onChange={(e) =>
                    handlePassengerChange(
                      passenger.id,
                      "passengerName",
                      e.target.value
                    )
                  }
                  className="border p-2 w-full"
                />
              </div>

              {/* NIN Number */}
              <div>
                <label className="block mb-1 font-medium">NIN Number</label>
                <input
                  type="text"
                  placeholder="Enter NIN number"
                  value={passenger.ninNumber}
                  onChange={(e) =>
                    handlePassengerChange(
                      passenger.id,
                      "ninNumber",
                      e.target.value
                    )
                  }
                  className="border p-2 w-full"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={passenger.email}
                  onChange={(e) =>
                    handlePassengerChange(passenger.id, "email", e.target.value)
                  }
                  className="border p-2 w-full"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={passenger.phone}
                  onChange={(e) =>
                    handlePassengerChange(passenger.id, "phone", e.target.value)
                  }
                  className="border p-2 w-full"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Add Passenger Button */}
        <button
          type="button"
          onClick={addPassenger}
          className="text-green-500 border border-green-500 px-4 py-2 rounded-md mb-6"
        >
          + Add Passenger
        </button>

        {/* Contact Details */}
        <div className="bg-white shadow p-4 mb-6 rounded-md">
          <h3 className="font-semibold mb-2">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter contact email"
                value={contact.email}
                onChange={(e) => handleContactChange("email", e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter contact phone"
                value={contact.phone}
                onChange={(e) => handleContactChange("phone", e.target.value)}
                className="border p-2 w-full"
              />
            </div>
          </div>
        </div>

        {/* Form Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/searchTrain")}
            className="border border-gray-500 px-6 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

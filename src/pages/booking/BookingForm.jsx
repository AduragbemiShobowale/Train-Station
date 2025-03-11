// components/BookingForm.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelectedTrain } from "../../contexts/SelectedTrainContext";
import FindMyTrain from "../searchTrain/FindMyTrain";
import SeatSelectorModal from "./seatSelector/SeatSelectorModal";
import Lefticon from "../../assets/icon/left.png";
import Righticon from "../../assets/icon/right.png";

const BookingForm = () => {
  const navigate = useNavigate();
  const { selectedTrain, setSelectedTrain, selectedClass, setSelectedClass } =
    useSelectedTrain();

  // Add loading state
  const [isLoading, setIsLoading] = useState(true);

  // State for seat details (Class, Coach, Seat)
  const [seatData, setSeatData] = useState({
    class: selectedClass || "",
    coach: "",
    seats: [],
  });

  // State for modal
  const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);

  // Track if seats have been selected
  const [seatsSelected, setSeatsSelected] = useState(false);

  // Error message state
  const [errorMessage, setErrorMessage] = useState("");

  // Passenger forms state
  const [passengers, setPassengers] = useState([]);

  // Contact details state
  const [contact, setContact] = useState({ email: "", phone: "" });

  // Helpers for seat data
  const handleSeatDataChange = (field, value) => {
    setSeatData((prev) => ({ ...prev, [field]: value }));
  };

  // Helpers for passengers
  const updatePassengers = () => {
    // Update passengers to match the number of selected seats
    if (seatData.seats.length === passengers.length) return;

    if (seatData.seats.length > passengers.length) {
      // Add new passenger forms
      const newPassengers = [...passengers];
      for (let i = passengers.length; i < seatData.seats.length; i++) {
        newPassengers.push({
          id: i + 1,
          passengerType: "",
          passengerName: "",
          ninNumber: "",
          email: "",
          phone: "",
        });
      }
      setPassengers(newPassengers);
    } else {
      // Remove excess passenger forms
      setPassengers(passengers.slice(0, seatData.seats.length));
    }
  };

  const removePassenger = (id) => {
    if (passengers.length === 1) return; // Prevent removing the only passenger

    // Find the index of the passenger to remove
    const index = passengers.findIndex((p) => p.id === id);

    // Create a new array without the passenger
    const newPassengers = passengers.filter((p) => p.id !== id);

    // Create a new seats array without the corresponding seat
    const newSeats = [...seatData.seats];
    newSeats.splice(index, 1);

    // Update state
    setPassengers(newPassengers);
    setSeatData((prev) => ({
      ...prev,
      seats: newSeats,
    }));
  };

  const handlePassengerChange = (id, field, value) => {
    setPassengers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  // Helpers for contact details
  const handleContactChange = (field, value) => {
    setContact({ ...contact, [field]: value });
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let isValid = true;

    // Validate passengers
    passengers.forEach((passenger) => {
      if (
        !passenger.passengerType ||
        !passenger.passengerName ||
        !passenger.ninNumber ||
        !passenger.email ||
        !passenger.phone
      ) {
        isValid = false;
        alert("Please complete all passenger details");
      }
    });

    // Validate contact details
    if (!contact.email || !contact.phone) {
      isValid = false;
      alert("Please complete contact details");
    }

    if (!seatData.class || !seatData.coach || !seatData.seats.length) {
      isValid = false;
      alert("Please complete seat selection");
    }

    if (isValid) {
      const bookingData = {
        selectedTrain,
        seatData,
        passengers,
        contact,
      };
      console.log("Booking Data:", bookingData);
      // Here you would typically send this data to your backend
      // For now, we'll just log it and navigate to a confirmation page
      navigate("/confirmation");
    }
  };

  // Persist selected train and class on component mount
  useEffect(() => {
    if (!selectedTrain) {
      const savedTrain = localStorage.getItem("selectedTrain");
      if (savedTrain) setSelectedTrain(JSON.parse(savedTrain));

      const savedClass = localStorage.getItem("selectedClass");
      if (savedClass) setSelectedClass(savedClass);
    }
    setIsLoading(false);
  }, []);

  // Update passengers when seat selection changes
  useEffect(() => {
    updatePassengers();
  }, [seatData.seats]);

  // Early return if no train is selected AND not loading
  if (!selectedTrain && !isLoading) {
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

  // Handle seat selection from modal
  const handleSeatsSelected = (selectedSeats) => {
    setErrorMessage("");
    setSeatData((prev) => ({
      ...prev,
      seats: selectedSeats,
    }));
    setSeatsSelected(selectedSeats.length > 0);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mb-14">
      {/* Display error message if any */}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded">
          <strong className="font-bold">Error:</strong>
          <span className="block">{errorMessage}</span>
        </div>
      )}

      {/* Search bar at the top */}
      <FindMyTrain />

      {/* Selected train info */}
      <h2 className="text-center font-bold text-xl mt-4 bg-[#E2F5E5] py-5 lg:text-[29.11px] rounded-t-2xl">
        {selectedTrain.route} | {selectedTrain.timeOfDay} | Train No -{" "}
        {selectedTrain.trainNumber}
      </h2>
      <div className="shadow-2xl p-4 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 rounded-md">
          {/* Departure Info */}
          <div className="md:text-left mb-4 md:mb-0 text-center">
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
          <div className="text-center mb-4 md:mb-0 flex items-center gap-9 px-4 justify-center">
            <img
              className="w-[68px] md:w-[90px]"
              src={Lefticon}
              alt="Left Arrow Icon"
            />
            <div>
              <p className="font-bold">{selectedTrain.duration}</p>
              {/* Class badge with dynamic styling */}
              <p
                className={`inline-block px-7 text-[13px] md:text-[16px] py-1 mt-1 rounded-full font-semibold ${
                  selectedClass.toLowerCase() === "business class"
                    ? "text-[#F4AC00] bg-[#FFF7E3]"
                    : selectedClass.toLowerCase() === "first class"
                    ? "text-[#18A532] bg-[#E8FFED]"
                    : "text-[#595959] bg-[#EDEDED]"
                }`}
              >
                {selectedClass}
              </p>
            </div>
            <img
              className="w-[68px] md:w-[90px]"
              src={Righticon}
              alt="Right Arrow Icon"
            />
          </div>

          {/* Arrival Info */}
          <div className="md:text-right text-center ">
            <p className="font-bold text-lg">{selectedTrain.arrival.time}</p>
            <p className="font-semibold">{selectedTrain.arrival.station}</p>
            <p className="text-sm text-gray-600">
              {selectedTrain.arrival.street}
            </p>
            <p className="text-sm text-gray-600">
              {selectedTrain.arrival.date}
            </p>
          </div>
        </div>
        <hr />

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
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSeatModalOpen(true)}
                  className="border p-2 w-full flex justify-between items-center"
                >
                  {seatData.seats?.join(", ") || "Select seat(s)"}
                  <span>▼</span>
                </button>
              </div>
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
                  {seatData.seats?.[idx] || "Not selected"}
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
                  <label className="block mb-1 font-medium">
                    Passenger Type
                  </label>
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
                  <label className="block mb-1 font-medium">
                    Passenger Name
                  </label>
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
                  <label className="block mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={passenger.email}
                    onChange={(e) =>
                      handlePassengerChange(
                        passenger.id,
                        "email",
                        e.target.value
                      )
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
                      handlePassengerChange(
                        passenger.id,
                        "phone",
                        e.target.value
                      )
                    }
                    className="border p-2 w-full"
                  />
                </div>
              </div>
            </div>
          ))}
          <hr />

          {/* Contact Details */}
          <div className=" py-4 mb-6 rounded-md">
            <h3 className="font-semibold mb-2">Contact Details</h3>
            <div className="flex gap-6">
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
                <label className="block mb-1 font-medium  ">Phone Number</label>
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
          <hr />

          {/* Form Buttons */}
          <div className="flex gap-6 py-6">
            <button
              type="submit"
              className="bg-[#18A532] text-white px-6 py-2 rounded-md w-full lg:w-[20%]"
            >
              Proceed
            </button>
            <button
              type="button"
              onClick={() => navigate("/searchTrain")}
              className="border border-[#18A532] text-[#18A532] px-6 py-2 rounded-md w-full lg:w-[20%]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      {/* Seat Selection Modal */}
      <SeatSelectorModal
        isOpen={isSeatModalOpen}
        onClose={() => setIsSeatModalOpen(false)}
        onSeatsSelected={handleSeatsSelected}
        selectedSeats={seatData.seats}
      />
    </div>
  );
};

export default BookingForm;

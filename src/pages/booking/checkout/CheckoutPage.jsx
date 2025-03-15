import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Lefticon from "../../../assets/icon/left.png";
import Righticon from "../../../assets/icon/right.png";

const CheckoutPage = () => {
  const location = useLocation();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("bookingData");

    if (location.state?.bookingData) {
      setBookingData(location.state.bookingData);
      localStorage.setItem(
        "bookingData",
        JSON.stringify(location.state.bookingData)
      );
    } else if (storedData) {
      setBookingData(JSON.parse(storedData));
    }
  }, [location.state]);

  if (!bookingData) {
    return <div>No booking data available</div>;
  }

  const { selectedTrain, seatData, passengers, contact } = bookingData;

  // Define prices based on class and passenger type
  const prices = {
    "First Class": {
      Adult: 6000,
      Child: 4500,
    },
    "Business Class": {
      Adult: 5000,
      Child: 4000,
    },
    "Standard Class": {
      Adult: 3000,
      Child: 2500,
    },
  };

  // Convenience fee is constant
  const convenienceFee = 400;

  // Count passengers by type
  const passengerCounts = passengers.reduce((counts, passenger) => {
    counts[passenger.passengerType] =
      (counts[passenger.passengerType] || 0) + 1;
    return counts;
  }, {});

  return (
    <div className="max-w-6xl mx-auto p-4 mb-14">
      {/* Train Information Header */}
      <h2 className="text-center font-bold px-2 text-xl mt-4 bg-[#E2F5E5] py-5 lg:text-[29.11px] rounded-t-2xl">
        {selectedTrain.route} | {selectedTrain.timeOfDay} | Train No -{" "}
        {selectedTrain.trainNumber}
      </h2>

      <div className="shadow-2xl p-4 rounded-xl">
        {/* Departure and Arrival Details */}
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
              <p
                className={`inline-block px-7 text-[13px] md:text-[16px] py-1 mt-1 rounded-full font-semibold ${
                  seatData.class.toLowerCase() === "business class"
                    ? "text-[#F4AC00] bg-[#FFF7E3]"
                    : seatData.class.toLowerCase() === "first class"
                    ? "text-[#18A532] bg-[#E8FFED]"
                    : "text-[#595959] bg-[#EDEDED]"
                }`}
              >
                {seatData.class}
              </p>
            </div>
            <img
              className="w-[68px] md:w-[90px]"
              src={Righticon}
              alt="Right Arrow Icon"
            />
          </div>

          {/* Arrival Info */}
          <div className="md:text-right text-center">
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
        <hr className="my-4" />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Passenger and Contact Details */}
          <div className="flex flex-col flex-1">
            {/* Passenger Details */}
            <h2 className="text-xl font-bold mt-6 mb-4">Passenger Details</h2>
            {passengers.map((passenger, index) => (
              <div
                key={passenger.id}
                className="bg-white shadow mb-4 rounded-md"
              >
                {/* Header with labels */}
                <div className="grid grid-cols-3 gap-4 bg-[#F5F5F5] p-4">
                  <div>
                    <label className="block font-medium">Name</label>
                  </div>
                  <div>
                    <label className="block font-medium">Type</label>
                  </div>
                  <div>
                    <label className="block font-medium">Coach/Seat No</label>
                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-3 gap-4 p-4 ">
                  <div>
                    <p className="mb-1">{passenger.passengerName}</p>
                    <p className="mb-1">{passenger.email}</p>
                  </div>
                  <div>
                    <p>{passenger.passengerType}</p>
                  </div>
                  <div>
                    <p>
                      {seatData.coach} /{" "}
                      {seatData.seats[index] || "Not selected"}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Details */}
            <div className="bg-white shadow mb-6 rounded-md">
              {/* Header with labels */}
              <div className="grid grid-cols-2 gap-4 bg-[#F5F5F5] p-4">
                <div>
                  <label className="block font-medium">Email Address</label>
                </div>
                <div>
                  <label className="block font-medium">Phone Number</label>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-2 gap-4 p-4 border-t">
                <div>
                  <p>{contact.email}</p>
                </div>
                <div>
                  <p>{contact.phone}</p>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center mb-6">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span className="text-sm">
                By proceeding with the booking, I confirm that I have read and
                accepted the Privacy Policy, User Agreement and Terms of Service
              </span>
            </div>
          </div>

          {/* Right Column - Apply Voucher and Price Summary */}
          <div className="flex-1 max-w-[350px]">
            {/* Apply Voucher */}
            <div className="bg-white shadow p-4 mb-6 rounded-md">
              <h3 className="font-semibold mb-2">Apply Voucher</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter Voucher"
                  disabled
                  className="border flex-1 p-2 rounded-l-md bg-gray-200 cursor-not-allowed"
                />
                <button
                  disabled
                  className="bg-[#18A532] text-white p-2 rounded-r-md cursor-not-allowed"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white shadow p-4 mb-6 rounded-md">
              <h3 className="font-semibold mb-2">Price Summary</h3>

              {Object.entries(passengerCounts).map(([type, count]) => (
                <div key={type} className="flex justify-between mb-2">
                  <span>
                    {type} x {count}
                  </span>
                  <span>₦{prices[seatData.class][type] * count}</span>
                </div>
              ))}

              <div className="flex justify-between mb-2">
                <span>Convenience Fee</span>
                <span>₦{convenienceFee}</span>
              </div>

              <hr className="my-2" />

              <div className="flex justify-between font-bold">
                <span>Total Fare</span>
                <span>
                  ₦
                  {(
                    Object.entries(passengerCounts).reduce(
                      (total, [type, count]) => {
                        return total + prices[seatData.class][type] * count;
                      },
                      0
                    ) + convenienceFee
                  ).toFixed(0)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment and Cancel Buttons */}
        <div className="flex gap-6 items-center mt-6">
          <button
            className="bg-[#18A532] text-white px-6 py-2 rounded-md w-full lg:w-[20%]"
            onClick={() => alert("Payment processing logic here")}
          >
            Make Payment
          </button>
          <button
            className="border border-[#18A532] text-[#18A532] px-6 py-2 rounded-md w-full lg:w-[20%]"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

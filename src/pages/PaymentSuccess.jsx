import React from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const bookingId = new URLSearchParams(location.search).get("bookingId");

  return (
    <div className="max-w-6xl mx-auto p-4 mb-14">
      <h2 className="text-center font-bold text-2xl mt-8">
        Payment Successful!
      </h2>
      <p className="text-center mt-4">
        Your booking has been confirmed. Booking ID: {bookingId}
      </p>
      <p className="text-center mt-2">
        Please check your email for your ticket.
      </p>
    </div>
  );
};

export default PaymentSuccess;

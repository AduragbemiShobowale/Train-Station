import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import CheckoutPage from "./checkout/CheckoutPage";

const BookingContainer = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = React.useState(null);

  const handleSubmit = (data) => {
    setBookingData(data);
    navigate("/checkout");
  };

  return (
    <div>
      {bookingData ? (
        <CheckoutPage bookingData={bookingData} />
      ) : (
        <BookingForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default BookingContainer;

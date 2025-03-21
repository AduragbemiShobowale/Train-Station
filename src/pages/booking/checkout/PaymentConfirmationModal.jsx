// PaymentConfirmationModal.js
import React, { useState } from "react";

const PaymentConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsProcessing(true);
    onConfirm();
  };

  return (
    <div className="fixed inset-0 bg-gray-900/75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 text-center max-w-md w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          disabled={isProcessing}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Timer Icon */}
        <img
          src="https://res.cloudinary.com/dgde8cwjk/image/upload/v1742333692/TrainStation%20Pictures/Frame_1321316266_z5ejpl.png"
          alt="Timer"
          className="w-20 h-20 mb-4 mx-auto"
        />

        {/* Message */}
        <p className="text-gray-600 mb-4">
          Your seat(s) has been reserved for 10 mins
        </p>

        {/* Paystack Logo with Orange Dot */}
        <div className="flex items-center justify-center mb-6 gap-3">
          <img
            src="https://res.cloudinary.com/dgde8cwjk/image/upload/v1742333692/TrainStation%20Pictures/Frame_1321316267_uplif8.png"
            alt="Orange Dot"
            className="w-4 h-4 mr-2"
          />
          <img
            src="https://res.cloudinary.com/dgde8cwjk/image/upload/v1742333692/TrainStation%20Pictures/Vector_fcguuq.png"
            alt="Paystack"
            className="h-6"
          />
          <img
            src="https://res.cloudinary.com/dgde8cwjk/image/upload/v1742334181/TrainStation%20Pictures/Vector1_e2rq10.png"
            alt="Paystack word"
          />
        </div>

        {/* Make Payment Button */}
        <button
          onClick={handleConfirm}
          className="bg-[#18A532] text-white px-6 py-2 rounded-md w-full"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Make Payment"}
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmationModal;

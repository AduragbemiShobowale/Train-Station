// TheModals.jsx
import React from "react";
import logIcon from "../assets/image/logOut.png";
import { useAuth } from "../contexts/AuthContext";

const TheModals = ({ isOpen, onConfirm, onCancel }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      onConfirm(); // Call the onConfirm callback to close the modal
    } catch (error) {
      console.error("Logout error:", error);
      // Add error handling if needed
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-10 px-4">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-[90%] md:w-[400px] text-center relative">
        {/* Icon */}
        <div className="flex justify-center">
          <img className="w-14 h-14 mb-4" src={logIcon} alt="Logout Icon" />
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-bold text-black">
          Log Out
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-500 mt-2 mb-6">
          Do you wish to log out from your account?
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4">
          <button
            onClick={onCancel}
            className="w-full md:w-1/2 text-red-500 border border-red-500 py-2 rounded-xl text-center cursor-pointer hover:bg-red-100 transition"
          >
            Yo! I’m Kidding
          </button>
          <button
            onClick={handleLogout}
            className="w-full md:w-1/2 bg-green-500 text-white py-2 rounded-xl text-center cursor-pointer border-2 border-transparent hover:border-amber-300 transition"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheModals;
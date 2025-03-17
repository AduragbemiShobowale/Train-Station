// PassChange.jsx
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const PassChange = ({ isOpen, onClose }) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-start md:items-center mt-24 md:pt-0 z-10 px-4">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-[90%] md:w-[450px] relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <IoClose className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Modal Heading */}
        <h1 className="text-lg md:text-2xl font-bold mb-2 text-left">
          Change Password
        </h1>
        <p className="text-gray-600 mb-6 text-left text-sm md:text-base">
          Enter new password details below.
        </p>

        {/* Form Fields */}
        <form className="space-y-5">
          
          {/* New Password Field */}
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="relative mt-1">
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                className="w-full border rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                aria-label="Toggle password visibility"
              >
                {showNewPassword ? <LuEye className="w-5 h-5" /> : <LuEyeOff className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                className="w-full border rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                aria-label="Toggle password visibility"
              >
                {showConfirmPassword ? <LuEye className="w-5 h-5" /> : <LuEyeOff className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PassChange;

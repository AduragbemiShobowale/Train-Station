import React, { useState } from "react";
import { LuEyeOff } from "react-icons/lu";
import { IoClose } from "react-icons/io5"; // Close icon

const PassChange = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="Body">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-10 px-4">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-[90%] md:w-[450px] relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
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
              {/* New Password */}
              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="relative mt-1">
                  <input
                    type="password"
                    id="new-password"
                    className="w-full border rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter password"
                    required
                  />
                  <div className="absolute right-3 top-3">
                    <LuEyeOff className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative mt-1">
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full border rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter password"
                    required
                  />
                  <div className="absolute right-3 top-3">
                    <LuEyeOff className="w-5 h-5 text-gray-400" />
                  </div>
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
      )}
    </div>
  );
};

export default PassChange;

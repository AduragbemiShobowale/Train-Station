import React, { useState } from "react";
import logIcon from "../assets/image/logOut.png";
import { IoClose } from "react-icons/io5"; // Import close icon
import PassChange from "./PassChange";

const TheModals = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="Body">

      {/* Modal */}
      {showModal && (
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
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(false);
                }}
                className="w-full md:w-1/2 text-red-500 border border-red-500 py-2 rounded-xl text-center cursor-pointer hover:bg-red-100 transition"
              >
                Yo! I’m Kidding
              </a>
              <a
                href="#"
                className="w-full md:w-1/2 bg-green-500 text-white py-2 rounded-xl text-center cursor-pointer border-2 border-transparent hover:border-amber-300 transition"
              >
                Log Out
              </a>
            </div>
          </div>
        </div>
      )}
      <PassChange />
    </div>
  );
};

export default TheModals;

import React from "react";
import tickicon from "../assets/icon/Success Icon.png";
import "./SuccessModal.css";
import { IoClose } from "react-icons/io5";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="Success-Main flex items-center justify-center relative">
      <div className="main-modal fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0">
        <div className="success-body bg-white mx-10 px-10 py-20 flex justify-center w-[90%] md:w-[500px]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black transition picks"
          >
            <IoClose className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div className="successContent">
            <img
              className="ticIcon flex justify-center px-20 py-4 h-35 mx-auto"
              src={tickicon}
              alt="Success Icon"
            />
            <h1 className="success-title">Success!</h1>
            <p className="success-message px-1.5">
              You have successfully updated your password! You will also be
              logged out from any device you logged in with previously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

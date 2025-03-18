import React, { useState } from "react";
import tickicon from "../assets/icon/Success Icon.png";
import "./SuccessModal.css";

const SuccessModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="Success-Main flex items-center justify-center">
      <div
        onClick={() => setShowModal(true)}
        className="flex gap-4 items-center cursor-pointer "
      >
        <a
          href="#"
          className="pop bg-green-700 text-white text-center  py-1 px-35"
        >
          Confirm
        </a>
      </div>
      {showModal && (
        <div className="main-modal fixed bg-black/50 min-h-screen z-10 w-screen flex justify-center items-center top-0 left-0 ">
          <div className="success-body bg-white mx-10 px-10 py-20 flex justify-center w-[90%] md:w-[400px]">
            <div className="successContent">
              <img
                className="ticIcon flex justify-center px-20 py-4 h-35 mx-auto"
                src={tickicon}
                alt=""
              />

              <h1 className="success-title">Success!</h1>
              <p className="success-message px-1.5">
                You have successfully updated your password!, you will also be
                logged out from any device you logged in with previously
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessModal;

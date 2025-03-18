import React from "react";
import notFoundImage from "../assets/image/13315300_5203298 1.png";
import "../pages/PageError.css";
import back from "../assets/icon/Arrow-28.png";

const PageError = () => {
  return (
    <div className="errorContainer flex flex-col justify-center items-center">
      <div className="errorImage flex justify-center items-center">
        <img src={notFoundImage} className="w-[80%]" alt="Robot" />
      </div>
      <h1 className="error-messages">Page not Found</h1>

      <a href="/" className="goHome-text">
        <img src={back} alt="" /> Go home
      </a>
    </div>
  );
};

export default PageError;

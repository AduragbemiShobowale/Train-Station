import React from "react";
import notFoundImage from "../assets/image/13315300_5203298 1.png";
import "../pages/PageError.css";
import back from "../assets/icon/Arrow-28.png";

const PageError = () => {
  return (
    <div className="errorContainer">
      <div className="errorImage">
        <img src={notFoundImage} alt="Robot" />
      </div>
      <h1 className="error-message">Page not Found</h1>

      <a href="/" className="goHome-text">
        <img src={back} alt="" /> Go home
      </a>
    </div>
  );
};

export default PageError;

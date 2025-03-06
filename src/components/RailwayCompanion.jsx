import React from "react";
import scanImage from "../assets/icon/qrCode.png";
import appleLogo from "../assets/icon/appleLogo.png";
import playstore from "../assets/icon/playstore.png";
import "../components/RailwayCompanion.css";

const RailwayCompanion = () => {
  return (
    <div className="mainBody">
      <div className="majorContent">
        <div className="heading">
          <h1>Your Railway Companion,</h1>
          <h1> Anytime, Anywhere</h1>
        </div>
        <div className="scan">
          <img className="qrCode" src={scanImage} alt="" />
          <div className="scanText">
            <p className="download">Scan to download the NRC app now.</p>
            <p className="available">Available on Play Store and App Store</p>
            <div className="appPlay">
              <img className="apple" src={appleLogo} alt="" />
              <img className="play" src={playstore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RailwayCompanion;

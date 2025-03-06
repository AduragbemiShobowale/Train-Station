import React from "react";
import "./ContactUsPage.css";
import ContactSection from "./ContactSection";
import GoogleMapComponent from "./googleMap/GoogleMapComponent";
// import motionTrain from "../assets/image/blurtrain.png.png";

const ContactUsPage = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="contact-text">
          <h1>Contact Us</h1>
        </div>
        <p className="content md:w-[45%]">
          Safe, comfortable, and reliable train services across the nation.
          Experience the future of Nigerian transportation, today.
        </p>
      </div>
      <ContactSection />
      <GoogleMapComponent />
    </div>
  );
};

export default ContactUsPage;

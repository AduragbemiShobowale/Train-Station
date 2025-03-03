import React, { useState } from "react";
import TrainLogo from "../assets/icon/TrainLogo.png";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div>
        <img
          className="logo"
          src={TrainLogo}
          alt="NIGERIAN 
          RAILWAY 
          CORPORATION"
        />
      </div>

      <div className={`navigate ${isOpen ? "open" : ""}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/table">Time Table</a>
        <a href="faq">FAQS</a>
        <a href="contact">Contact Us</a>

        <button className="register-button">Register</button>
        <button className="signin-button">Sign In</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default NavBar;

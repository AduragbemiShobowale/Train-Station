import React from "react";
import Trainlogo from "../assets/icon/TrainLogo.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/instagram.png";
import twitter from "../assets/icon/twitter.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content px-6">
        {/* Footer Logo Section */}
        <div className="footer-section mb-10 md:mb-0">
          <a href="/">
            {" "}
            <img
              className="train-logo footer-logo"
              src={Trainlogo}
              alt="Train Logo pe-6 md:ps-0"
            />
          </a>
          <p className="footer-text">E-Ticketing App: Lagos - Ibadan</p>
          <div className="social-icons">
            <img
              className="social-icon cursor-not-allowed"
              src={facebook}
              alt="Facebook"
            />
            <img
              className="social-icon cursor-not-allowed"
              src={instagram}
              alt="Instagram"
            />
            <img
              className="social-icon cursor-not-allowed"
              src={twitter}
              alt="Twitter"
            />
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="footer-section footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/contactus">Contact</a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-not-allowed hover:!text-gray-400"
                  onClick={(e) => e.preventDefault()}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-grey cursor-not-allowed  hover:!text-gray-400"
                  onClick={(e) => e.preventDefault()}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Tickets and Timetables</h3>
            <ul>
              <li>
                <a href="/timetable">Train Timetables</a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:!text-gray-400 cursor-not-allowed notlink"
                  onClick={(e) => e.preventDefault()}
                >
                  Live Departures & Arrivals
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Lagos</h3>
            <ul>
              <li>Trains to Ebute Metta</li>
              <li>Trains to Abeokuta</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Ibadan</h3>
            <ul>
              <li>Trains to Agege</li>
              <li>Trains to Agbado</li>
              <li>Trains to Orni-Adio</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>Copyright 2024. All Rights Reserved</p>
        <p>Designed and Developed by Michael Idioha and DevComs</p>
      </div>
    </footer>
  );
};

export default Footer;

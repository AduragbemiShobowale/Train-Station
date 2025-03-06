import React from "react";
import Trainlogo from "../assets/icon/TrainLogo.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/instagram.png";
import twitter from "../assets/icon/twitter.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="mainCons">
      <div className="main">
        <div className="mainCon1">
          <img className="Trainlogo" src={Trainlogo} alt="" />
          <p className="Mtab">E-Ticketing App: Lagos - Ibadan</p>
          <div className="HGsgimg">
            <img className="Facebook" src={facebook} alt="" />
            <img className="instagram" src={instagram} alt="" />
            <img className="Twitter" src={twitter} alt="" />
          </div>
        </div>

        <section className="mainCon2">
          {/* <section className="locations"> */}
          <div className="locale">
            <div className="Company">
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>FAQs</li>
                <li>Contact</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="tickets">
              <h2>Tickets and Timetables</h2>
              <ul>
                <li>Train Timetables</li>
                <li>Train timrtables</li>
                <li>Live Departures & Arrivals</li>
              </ul>
            </div>
            <div className="lagos">
              <h3>Lagos</h3>
              <ul>
                <li>Trains to Ebute Metta</li>
                <li>Trains to Abookuta</li>
              </ul>
            </div>
            <div className="ibadan">
              <h3>Ibadan</h3>
              <ul>
                <li>Trains to Agege</li>
                <li>Trains to Agbado</li>
                <li>Trains to Orni-Adio</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright 2024. All Rights Reserved</p>
        <p>Designed by Demonic Affairs</p>
      </div>
    </div>
  );
};

export default Footer;

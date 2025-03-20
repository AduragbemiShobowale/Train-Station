import React from "react";
import RailwayCompanion from "../../components/RailwayCompanion";
import "./Ticket.css";
import businessClassImg from "../../assets/icon/businessClass.png";
import durationIcon from "../../assets/icon/Frame 1000003455.png";
import qrCode from "../../assets/icon/bi_qr-code.png";
import leftImg from "../../assets/icon/left.png";
import rightImg from "../../assets/icon/right.png";
import ticketData from "./ticketData";

const Ticket = () => {
  return (
    <div>
      <div className="relative w-full h-22 bg-[#006B14]">
        <h2 className="ticketHeader">My Tickets</h2>
      </div>

      {ticketData.length === 0 ? (
        <p className="noTicketMessage">No tickets available</p>
      ) : (
        ticketData.map((ticket) => (
          <div key={ticket._id} className="genTicketInfo">
            <div className="topTicketInfo">
              <div className="trainInfo">
                <div className="train-information">
                  <img
                    src={businessClassImg}
                    alt="Train Class"
                    className="classImg"
                  />
                  <div>
                    <h5>{ticket.train.route}</h5>
                    <p className="grey">
                      Train No - {ticket.train.trainNumber} | PNR No:{" "}
                      {ticket.PNRNo}
                    </p>
                  </div>
                </div>
                <p className="activeText">{ticket.status}</p>
              </div>

              <div className="stationInfo">
                <div className="leftInfo">
                  <h5>{ticket.train.departure.time}</h5>
                  <div className="stationLocation">
                    <p className="grey">{ticket.train.departure.station}</p>
                    <p className="grey">{ticket.train.departure.location}</p>
                  </div>
                  <p className="grey">Departure Date: {ticket.train.departure.date}</p>
                </div>
                <div className="middleInfo">
                  <div className="duration">
                    <div className="newbie">
                      <img src={leftImg} alt="" className="leftImg" />
                      <h6>0 hrs 24 mins</h6>
                      <img src={rightImg} alt="" className="rightImg" />
                    </div>

                    <img
                      src={durationIcon}
                      alt="Duration"
                      className="durationIcon"
                    />
                  </div>
                  <p className="classText1">{ticket.classType}</p>
                </div>
                <div className="rightInfo">
                  <h5>{ticket.train.arrival.time}</h5>
                  <div className="stationLocation">
                    <p className="grey">{ticket.train.arrival.station}</p>
                    <p className="grey">{ticket.train.arrival.location}</p>
                  </div>
                  <p className="grey">Arrival Date: {ticket.train.arrival.date}</p>
                </div>
              </div>

              <hr />

              <div className="bottomTicketInfo">
                <div>
                  {ticket.passengers.map((passenger, index) => (
                    <div key={index}>
                      <h5>Passenger: {passenger.name}</h5>
                      <p className="grey">
                        NIN: ****{passenger.nin.slice(-4)} | Contact No:{" "}
                        {passenger.phone} | Type: {passenger.type}
                      </p>
                    </div>
                  ))}
                  <p className="grey">
                    Coach/Seat No: {ticket.coach}/{ticket.seats} |{" "}
                    <span>Price: ₦{ticket.totalPrice}</span>
                  </p>
                </div>
                <div>
                  <img src={qrCode} alt="QR Code" className="qrCode" />
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <RailwayCompanion />
    </div>
  );
};

export default Ticket;

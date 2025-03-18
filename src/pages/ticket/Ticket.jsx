// src/pages/Ticket.jsx (or TicketList.jsx)
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RailwayCompanion from "../../components/RailwayCompanion";

// Icons & images
import businessClassImg from "../../assets/icon/businessClass.png";
import durationIcon from "../../assets/icon/Frame 1000003455.png";
import qrCode from "../../assets/icon/bi_qr-code.png";
import leftImg from "../../assets/icon/left.png";
import rightImg from "../../assets/icon/right.png";
import NoTicketFound from "../../components/NoTicketFound";
import "./Tickets.css";

const Ticket = () => {
  const [tickets, setTickets] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllTickets();
  }, []);

  const fetchAllTickets = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/v1/ticket", {
        withCredentials: true,
      });

      if (Array.isArray(response.data)) {
        setTickets(response.data);
      } else {
        // If the server returns something else, treat that as an error
        setTickets([]);
        setError("Unexpected response format from server");
      }
    } catch (err) {
      console.error("Error fetching tickets:", err);
      setError("Could not fetch tickets. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  console.log(tickets);

  // 4) If tickets is null or empty array after loading,
  //    that means we have no tickets
  if (!tickets || tickets.length === 0) {
    return (
      <div>
        <div className="relative w-full h-22 bg-[#006B14]">
          <h2 className="ticketHeader">My Tickets</h2>
        </div>
        <NoTicketFound />
        <RailwayCompanion />
      </div>
    );
  }

  // 5) Otherwise, render the list of tickets
  return (
    <div>
      <div className="relative w-full h-22 bg-[#006B14]">
        <h2 className="ticketHeader">My Tickets</h2>
      </div>

      {tickets.map((booking) => (
        <div key={booking._id} className="genTicketInfo">
          <div className="topTicketInfo">
            <div className="trainInfo">
              <div className="train-information">
                <img
                  src={businessClassImg}
                  alt="Train Class"
                  className="classImg"
                />
                <div>
                  <h5>{booking.train?.route}</h5>
                  <p>
                    Train No - {booking.train?.trainNumber} | Booking ID:{" "}
                    {booking.bookingId}
                  </p>
                </div>
              </div>
              <p className="activeText">{booking.status}</p>
            </div>

            <div className="stationInfo">
              <div className="leftInfo">
                <h5>{booking.train?.departure?.time}</h5>
                <div className="stationLocation">
                  <p>{booking.train?.departure?.station}</p>
                  <p>{booking.train?.departure?.street}</p>
                </div>
                <p>Departure Date: {booking.train?.departure?.date}</p>
              </div>
              <div className="middleInfo">
                <div className="duration">
                  <div className="newbie">
                    <img src={leftImg} alt="" className="leftImg" />
                    <h6>{booking.train?.duration}</h6>
                    <img src={rightImg} alt="" className="rightImg" />
                  </div>
                  <img
                    src={durationIcon}
                    alt="Duration"
                    className="durationIcon"
                  />
                </div>
                <p className="classText1">{booking.classType}</p>
              </div>
              <div className="rightInfo">
                <h5>{booking.train?.arrival?.time}</h5>
                <div className="stationLocation">
                  <p>{booking.train?.arrival?.station}</p>
                  <p>{booking.train?.arrival?.street}</p>
                </div>
                <p>Arrival Date: {booking.train?.arrival?.date}</p>
              </div>
            </div>

            <hr />

            <div className="bottomTicketInfo">
              <div>
                {booking.passengers?.map((passenger, index) => (
                  <div key={index}>
                    <h5>Passenger: {passenger.name}</h5>
                    <p>
                      NIN: ****{passenger.nin.slice(-4)} | Contact No:{" "}
                      {passenger.phone} | Type: {passenger.type}
                    </p>
                  </div>
                ))}
                <p>
                  Coach/Seat No: {booking.coach}/
                  {Array.isArray(booking.seats)
                    ? booking.seats.join(", ")
                    : booking.seats}{" "}
                  | <span>Price: ₦{booking.totalPrice}</span>
                </p>
              </div>
              <div>
                <img src={qrCode} alt="QR Code" className="qrCode" />
              </div>
            </div>
          </div>
        </div>
      ))}

      <RailwayCompanion />
    </div>
  );
};

export default Ticket;

import React, { useEffect, useState } from "react";
import axios from "axios";
import RailwayCompanion from "../../components/RailwayCompanion";

// Icons & images
import FirstClassIcon from "../../assets/icon/firstClass.png";
import BusinessClassIcon from "../../assets/icon/businessClass.png";
import StandardClassIcon from "../../assets/icon/standardClass.png";
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

  // Helper to get the icon for a ticket class
  const getClassIcon = (type) => {
    const icons = {
      "first class": FirstClassIcon,
      "business class": BusinessClassIcon,
      "standard class": StandardClassIcon,
    };
    return icons[type.toLowerCase()] || null;
  };

  // Helper to get class-specific CSS styles
  const getClassStyles = (type) => {
    const styles = {
      "first class": "text-[#18A532] bg-[#E8FFED] border-[#18A532]",
      "business class": "text-[#F4AC00] bg-[#FFF7E3] border-[#F4AC00]",
      "standard class": "text-[#595959] bg-[#EDEDE] border-[#595959]",
    };
    return styles[type.toLowerCase()] || "";
  };

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
                {/* Using the getClassIcon function to determine which icon to display */}
                <img
                  src={getClassIcon(booking.classType)}
                  alt="Train Class"
                  className="classImg w-[20%] h-[20%]"
                />
                <div>
                  <h5 className="trainRack">{booking.train?.route}</h5>
                  <p className="trainRail">
                    Train No - {booking.train?.trainNumber} | Booking ID:{" "}
                    {booking.bookingId}
                  </p>
                </div>
              </div>
              <p className="activeText">{booking.status}</p>
            </div>

            <div className="stationInfo">
              <div className="leftInfo">
                <h5 className="trainRack">{booking.train?.departure?.time}</h5>
                <div className="stationLocation">
                  <p className="trainRail">
                    {booking.train?.departure?.station}
                  </p>
                  <p className="trainRail">
                    {booking.train?.departure?.street}
                  </p>
                </div>
                <p className="trainRail">
                  Departure Date: {booking.train?.departure?.date}
                </p>
              </div>
              <div className="middleInfo">
                <div className="duration">
                  <div className="newbie">
                    <img src={leftImg} alt="" className="leftImg" />
                    <h6 className="trainRoad">{booking.train?.duration}</h6>
                    <img src={rightImg} alt="" className="rightImg" />
                  </div>
                  <img
                    src={durationIcon}
                    alt="Duration"
                    className="durationIcon"
                  />
                </div>
                <p
                  className={`classText1 font-bold text-[10px] py-3 rounded-4xl lg:text-[16.53px] ${getClassStyles(
                    booking.classType
                  )}`}
                >
                  {booking.classType}
                </p>
              </div>
              <div className="rightInfo">
                <h5 className="trainRack">{booking.train?.arrival?.time}</h5>
                <div className="stationLocation">
                  <p className="trainRail">{booking.train?.arrival?.station}</p>
                  <p className="trainRail">{booking.train?.arrival?.street}</p>
                </div>
                <p className="trainRail">
                  Arrival Date: {booking.train?.arrival?.date}
                </p>
              </div>
            </div>

            <hr />

            <div className="bottomTicketInfo">
              <div>
                {booking.passengers?.map((passenger, index) => (
                  <div key={index}>
                    <h5 className="trainRack">Passenger: {passenger.name}</h5>
                    <p className="trainRail">
                      NIN: ****{passenger.nin.slice(-4)} | Contact No:{" "}
                      {passenger.phone} | Type: {passenger.type}
                    </p>
                  </div>
                ))}
                <p className="trainRail">
                  Coach/Seat No: {booking.coach}/
                  {Array.isArray(booking.seats)
                    ? booking.seats.join(", ")
                    : booking.seats}{" "}
                  |{" "}
                  <span className="trainBounce">
                    Price: ₦{booking.totalPrice}
                  </span>
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

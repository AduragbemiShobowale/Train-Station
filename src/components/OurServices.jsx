import React from "react";
import ServiceCard from "../components/ServiceCard";
import ModernFleet from "../assets/icon/modernFleet.png";
import EasyBooking from "../assets/icon/exportCalender.png";
import SecuritySafety from "../assets/icon/security.png";
import StationFacility from "../assets/icon/station.png";

const services = [
  {
    title:
      "Experience comfort in our modern air-conditioned trains with spacious seating.",
    icon: ModernFleet,
    names: "Modern Fleet",
  },
  {
    title: "Book your tickets anytime,anywhere. Use our website or mobile app.",
    icon: EasyBooking,
    names: "Easy Booking",
  },
  {
    title: "Travel with confidence knowing your security is our top priority.",
    icon: SecuritySafety,
    names: "Security & Safety",
  },
  {
    title:
      "Everything you need for a pleasant and convenient travel experience.",
    icon: StationFacility,
    names: "Station Facility",
  },
];

const Services = () => {
  return (
    <section className=" mx-auto pt-20 text-center bg-[#F0F7F6]">
      <h2 className="md:text-[52px] text-[28px] font-bold text-center">
        Discover our Services
      </h2>
      <p className="text-gray-600 text-center text-[22px] mb-3 mx-auto px-5 pb-5 max-w-3xl ">
        Experience a new standard of rail travel with our comprehesive range of
        services designed for your comfort and convenience.
      </p>
      <div className=" grid grid-cols-1 item-center md:grid-cols-4 gap-10 max-w-6xl mx-auto px-[46.7px] md:px-5">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

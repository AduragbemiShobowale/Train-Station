import React from "react";

const ServiceCard = ({ title, icon, names }) => {
  return (
    <div className="bg-white shadow-md rounded-lg  mb-12 gap-3  flex flex-col text-center cursor-pointer">
      <img src={icon} alt={names} className="w-12 h-12 mx-auto mb-2 my-10"/>
      <h3 className="text-lg font-semibold ">{names}</h3>
      <p className="text-gray-600 text-base  p-5">{title}</p> 
    </div>
  );
};

export default ServiceCard;

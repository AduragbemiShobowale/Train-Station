import React from "react";

const ServiceCard = ({ title, icon, names }) => {
  return (
    <div className="bg-white shadow-md rounded-lg  mb-12 gap-3  flex flex-col text-center cursor-pointer">
      <img src={icon} alt={names} className="w-12 h-12 mx-auto mb-2 my-10" />
      <h3 className="text-[22px] md:text-[26.45px] font-semibold ">{names}</h3>
      <p className="text-gray-600 text-[14px] md:text-[17.71px]  p-5">
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;

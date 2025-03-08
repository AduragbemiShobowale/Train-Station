import React from "react";

const FindMyTrain = () => {
  return (
    <div className="w-[90%] lg:w-[100%] max-w-6xl px-6 py-7 flex flex-col md:flex-row items-center gap-4 bg-[#006B14] shadow-lg rounded-lg mx-auto  my-6">
      {/* Originating Station */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-white font-medium">From</label>
        <select className="border p-2 rounded w-full bg-[#18A532] text-white">
          <option className="bg-[#18A532] text-white">
            Select Originating Station
          </option>
        </select>
      </div>

      {/* Destination Station */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-white font-medium">To</label>
        <select className="border p-2 rounded w-full bg-[#18A532] text-white">
          <option className="bg-[#18A532] text-white">
            Select Destination Station
          </option>
        </select>
      </div>

      {/* Date Picker */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-white font-medium">Date</label>
        <input
          type="date"
          className="border p-2 rounded w-full bg-[#18A532] text-white"
        />
      </div>

      {/* Submit Button */}
      <button className="bg-white text-[#18A532] font-semibold px-6 py-2 rounded w-full md:w-[30%] lg:w-[20%] md:mt-5">
        <a href="/searchTrain">Find My Train</a>
      </button>
    </div>
  );
};

export default FindMyTrain;

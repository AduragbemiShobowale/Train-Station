import React from "react";

const FindTrain = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 w-[90%] md:w-4/5 lg:w-3/5 px-7 py-7 flex flex-col md:flex-row items-center gap-4 bg-white shadow-lg rounded-lg">
      {/* Originating Station */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-gray-600 font-medium">From</label>
        <select className="border p-2 rounded w-full">
          <option>Select Originating Station</option>
        </select>
      </div>

      {/* Destination Station */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-gray-600 font-medium">To</label>
        <select className="border p-2 rounded w-full">
          <option>Select Destination Station</option>
        </select>
      </div>

      {/* Date Picker */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-gray-600 font-medium">Date</label>
        <input type="date" className="border p-2 rounded w-full" />
      </div>

      {/* Submit Button */}
      <button className="bg-green-600 text-white px-6 py-2 rounded w-full md:w-[30%] md:mt-5">
        Find My Train
      </button>
    </div>
  );
};

export default FindTrain;

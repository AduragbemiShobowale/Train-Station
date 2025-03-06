import React from "react";

const Stats = () => {
  return (
    <section className="bg-[#006B14] flex justify-center items-center mx-5 md:mx-0">
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-15 flex flex-col md:flex-row justify-evenly items-center text-white">
        <div className="flex flex-col items-center text-center p-4 md:w-1/3 md:flex-row md:items-center justify-center gap-3">
          <span className="block text-[36px] md:text-[50px] font-bold mb-2">
            100k+
          </span>
          <span className="text-[20px] md:text-[20px] md:w-19 md:text-start">
            Happy Customers
          </span>
        </div>
        <div className="flex flex-col items-center text-center p-4 md:w-1/3 md:flex-row md:items-center justify-center gap-3">
          <span className="block text-[36px] md:text-[50px] font-bold mb-2">
            140+
          </span>
          <span className="text-[20px] md:text-[20px] md:w-19 md:text-start">
            Routes Covered
          </span>
        </div>
        <div className="flex flex-col items-center text-center p-4 md:w-1/3 md:flex-row md:items-center justify-center gap-3">
          <span className="block text-[36px] md:text-[50px] font-bold mb-2">
            140+
          </span>
          <span className="text-[20px] md:text-[20px] md:w-19 md:text-start">
            Routes Covered
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stats;

import React from "react";
import notFound from "../../assets/icon/Group 26795.png";

const NotFound = () => {
  return (
    <section className="flex  items-center justify-center text-center p-2">
      <div className="flex flex-col items-center">
        <img src={notFound} alt="Not Found" className="w-70 md:w-86" />
        <h2 className="font-semibold text-3xl pt-3 mb-3">Not Found</h2>
      </div>
    </section>
  );
};

export default NotFound;

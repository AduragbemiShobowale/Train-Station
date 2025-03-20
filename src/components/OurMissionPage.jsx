import React from "react";
import trainImage from "../assets/image/Frame 1618869461.png";
import checkIcon from "../assets/icon/Vector.png";

const OurMission = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-15 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-auto lg:max-w-[350px]">
        <img
            src={trainImage}
            alt="Train"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:flex-1 lg:flex lg:flex-col gap-4">
          <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At NRC Train Booking, our mission is to modernize rail travel in
            Nigeria with a secure, seamless, and user-friendly experience that
            makes train travel accessible for everyone.
          </p>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-col space-y-4 lg:flex lg:gap-4">
            <div className="flex items-start space-x-2">
              <img src={checkIcon} alt="Check icon" className="w-5 h-5 mt-1" />
              <p className="text-gray-700">
                <strong>Enhance Accessibility:</strong> Making train travel easy
                and available to all passengers across Nigeria, from urban
                cities to rural areas.
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <img src={checkIcon} alt="Check icon" className="w-5 h-5 mt-1" />
              <p className="text-gray-700">
                <strong>Improve Efficiency:</strong> Reducing wait times,
                eliminating booking queues, and ensuring real-time train
                availability updates.
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <img src={checkIcon} alt="Check icon" className="w-5 h-5 mt-1" />
              <p className="text-gray-700">
                <strong>Empowering Users:</strong> Providing our users with the
                knowledge and tools to grow their businesses and expand their
                reach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

import React from "react";
import LagosImage from "../assets/image/Frame 40970.png";
import IbadanImage from "../assets/image/Frame 40971.png";
import AbeokutaImage from "../assets/image/Frame 40972.png";
const destinations = [
  {
    name: "Lagos",
    visitors: "20k visitors daily",
    image: LagosImage,
  },
  {
    name: "Ibadan",
    visitors: "14k visitors daily",
    image: IbadanImage,
  },
  {
    name: "Abeokuta",
    visitors: "15k visitors daily",
    image: AbeokutaImage,
  },
];

function Destinations() {
  return (
    <section className="px-4 md:px-12  py-10 bg-gray-200 ">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Popular Destinations
        </h2>
        <p className="text-gray-600 text-center mt-5 justify-center max-w-3xl mx-auto">
          Discover the beauty and diversity of Nigeria through our extensive
          rail network. From bustling city centers to cultural landmarks, our
          trains connect you to the nation’s most captivating destinations.
        </p>
      </div>

      <div className="grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 cursor-pointer max-w-6xl mx-auto">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative text-white bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <img
              src={destination.image}
              alt=" "
              className="w-full h-94 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 right-0 text-white-900">
              <h3 className="text-lg font-bold text-white-900">
                {destination.name}
              </h3>
              <p className="text-white-900 font-thin">{destination.visitors}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;

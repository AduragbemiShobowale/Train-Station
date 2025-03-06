import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getTestimonials } from "./Testimonials";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container py-10 bg-gray-100">
      <div className=" flex flex-col justify-center gap-4 items-center text-center">
        <h2 className="text-center text-4xl md:text-3xl font-bold">
          Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-6 lg:mx-[320px]">
          See what travelers across Nigeria have to say about their experience
          with NRC Train Booking.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // Show 2 cards on tablets
            1024: { slidesPerView: 3 }, // Show 3 cards on larger screens
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {getTestimonials().map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white shadow-lg rounded-lg p-6 mx-3 flex flex-col justify-between mb-10">
                <p className="text-gray-700 flex-1">{item.testimonial}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={item.image}
                    alt={item.fullName}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="ml-3 font-semibold">{item.fullName}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

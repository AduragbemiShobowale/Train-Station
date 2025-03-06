import React from "react";
import Phone from "../../assets/icon/phoneContact.png";
import Email from "../../assets/icon/emailContact.png";
import Instagram from "../../assets/icon/instagramContact.png";
import Address from "../../assets/icon/addressContact.png";
import Twitter from "../../assets/icon/twiitterVector.png";
import Instag from "../../assets/icon/instagramVector.png";
import Linkedin from "../../assets/icon/linkedInVector.png";
import Facebook from "../../assets/icon/facebookVector.png";

const ContactSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-col lg:flex-row gap-10">
      {/* Contact Info Section */}
      <div className="bg-[#F3FAF6] p-6 md:p-10 rounded-lg flex flex-col w-full md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-800 mb-4 text-left md:text-left">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-6 text-[14px] md:text-[16px] text-left md:text-left">
          Fill up the form and our team will get back to you within 24 hours.
        </p>

        {/* Contact Details */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Phone & Email */}
          <div className="flex md:flex-row gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <img
                src={Phone}
                alt="Phone"
                className="w-8 h-8 md:w-auto md:h-auto"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600 text-sm">07074964453</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={Email}
                alt="Email"
                className="w-8 h-8 md:w-auto md:h-auto"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600 text-sm">info@gsds.com.ng</p>
              </div>
            </div>
          </div>

          {/* Row 2: Instagram & Address */}
          <div className="flex md:flex-row gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <img
                src={Instagram}
                alt="Instagram"
                className="w-8 h-8 md:w-auto md:h-auto"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Instagram</h3>
                <p className="text-gray-600 text-sm">info_nrc</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={Address}
                alt="Address"
                className="w-8 h-8 md:w-auto md:h-auto"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600 text-sm">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full my-6 text-[#A7A7A7]" />

        {/* Social Media Icons */}
        <div className="flex justify-start gap-4 pt-5">
          <img src={Twitter} alt="Twitter" className="w-6 h-6" />
          <img src={Instag} alt="Instagram" className="w-6 h-6" />
          <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
          <img src={Facebook} alt="Facebook" className="w-6 h-6" />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 mx-auto">
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-3 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 p-3 rounded w-full"
          />
          <textarea
            placeholder="Message"
            className="border border-gray-300 p-3 rounded w-full h-32"
          ></textarea>
          <button className="bg-green-600 text-white py-3 px-6 rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;

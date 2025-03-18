import React, { useState } from "react";
import Phone from "../../assets/icon/phoneContact.png";
import Email from "../../assets/icon/emailContact.png";
import Instagram from "../../assets/icon/instagramContact.png";
import Address from "../../assets/icon/addressContact.png";
import Twitter from "../../assets/icon/twiitterVector.png";
import Instag from "../../assets/icon/instagramVector.png";
import Linkedin from "../../assets/icon/linkedInVector.png";
import Facebook from "../../assets/icon/facebookVector.png";

const ContactSection = () => {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mldjdqno"; // Your Formspree endpoint

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }

      // Reset form and errors
      e.target.reset();
      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    // Name validation
    if (!formValues.name.trim()) {
      newErrors.name = "Please enter your full name";
      isValid = false;
    }

    // Email validation
    if (!formValues.email.trim()) {
      newErrors.email = "Please enter your email address";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation
    if (!formValues.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formValues.phone)) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits)";
      isValid = false;
    }

    // Message validation
    if (!formValues.message.trim()) {
      newErrors.message = "Please enter your message";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Restrict phone input to numbers only
    if (name === "phone") {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    // Trigger validation for the changed field
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let newError = "";

    switch (fieldName) {
      case "name":
        if (!value.trim()) {
          newError = "Please enter your full name";
        }
        break;
      case "email":
        if (!value.trim()) {
          newError = "Please enter your email address";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newError = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (!value.trim()) {
          newError = "Please enter your phone number";
        } else if (!/^\d{10,15}$/.test(value)) {
          newError = "Please enter a valid phone number (10-15 digits)";
        }
        break;
      case "message":
        if (!value.trim()) {
          newError = "Please enter your message";
        }
        break;
      default:
        break;
    }

    setErrors(prev => ({
      ...prev,
      [fieldName]: newError
    }));
  };

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
        <form onSubmit={handleSubmit} method="POST" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className={`border border-gray-300 p-3 rounded w-full ${
                errors.name ? "border-red-500" : ""
              }`}
              value={formValues.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`border border-gray-300 p-3 rounded w-full ${
                errors.email ? "border-red-500" : ""
              }`}
              value={formValues.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className={`border border-gray-300 p-3 rounded w-full ${
              errors.phone ? "border-red-500" : ""
            }`}
            value={formValues.phone}
            onChange={handleChange}
            required
            onKeyPress={(e) => {
              const allowedKeys = [
                "Backspace",
                "Delete",
                "ArrowLeft",
                "ArrowRight",
              ];
              if (allowedKeys.includes(e.key)) return;
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}

          <textarea
            name="message"
            placeholder="Message"
            className={`border border-gray-300 p-3 rounded w-full h-32 ${
              errors.message ? "border-red-500" : ""
            }`}
            value={formValues.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}

          <button
            disabled={isSubmitting}
            className="bg-green-600 text-white py-3 px-6 rounded w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
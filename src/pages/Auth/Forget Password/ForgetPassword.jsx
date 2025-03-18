import React, { useState } from "react";
import forgotPasswordImage from "../../../assets/image/signUp.png"; // Replace with your actual image path
import trainLogo from "../../../assets/icon/TrainLogo.png";
import axios from "axios";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://train-station-backend.onrender.com/api/v1/auth/forgot-password",
        { email: formData.email }
      );

      if (response.status === 200) {
        setSuccessMessage(
          "Password reset link has been sent to your email address."
        );
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors((prev) => ({
          ...prev,
          general: "Failed to send password reset link. Please try again.",
        }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row-reverse relative forgot-password register">
      {/* Image Background for Desktop */}
      <div className="lg:w-1/2 hidden lg:block relative">
        <img
          src={forgotPasswordImage}
          alt="Forgot Password"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Main Content Container */}
      <main className="flex flex-col justify-between lg:w-1/2 bg-white register">
        {/* Header with Logo */}
        <header className="p-5 lg:p-8 bg-white lg:hidden">
          <a href="/">
            <img src={trainLogo} alt="NRC Logo" className="h-10" />
          </a>
        </header>
        <header className="p-5 lg:p-8 lg:absolute left-[50%] hidden lg:block">
          <a href="/">
            <img src={trainLogo} alt="NRC Logo" className="h-10" />
          </a>
        </header>

        {/* Form Container */}
        <div className="p-8 lg:p-12 mt-15 bg-white w-[95%] md:w-[80%] md:mt-60 lg:mt-35 mx-auto lg:w-full rounded-lg lg:rounded-none">
          <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
          <p className="text-gray-600 mb-8">
            Enter your email address to reset your password.
          </p>

          {/* Display general success message */}
          {successMessage && (
            <p className="text-green-500 text-sm mb-4">{successMessage}</p>
          )}

          {/* Display general error message */}
          {errors.general && (
            <p className="text-red-500 text-sm mb-4">{errors.general}</p>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-green-500 text-white py-3 rounded-md font-medium transition duration-200 ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-600"
              }`}
            >
              {isLoading ? "Sending..." : "Reset"}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-4">
            <span className="text-gray-600">Remember your password? </span>
            <a href="/signin" className="text-green-500 hover:underline">
              Sign In
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgetPassword;

import React from "react";
import forgotPasswordImage from "../../../assets/image/signUp.png"; // Replace with your actual image path
import trainLogo from "../../../assets/icon/TrainLogo.png";
import { LuEyeOff } from "react-icons/lu";
import "./ForgetPassword.css";

const ForgetPassword = () => {
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

          {/* Form Fields */}
          <form className="space-y-6">
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
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition duration-200"
            >
              Reset
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account? </span>
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

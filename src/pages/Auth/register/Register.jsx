import React from "react";
import signUpImage from "../../../assets/image/signUp.png";
import trainLogo from "../../../assets/icon/TrainLogo.png";
import { LuEyeOff } from "react-icons/lu";
import "./Register.css";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side: Form Container */}
      <div className="w-full lg:w-1/2 ">
        {/* Mobile Logo */}
        <div className="lg:hidden bg-white">
          <img src={trainLogo} alt="NRC Logo" className="pl-4" />
        </div>

        {/* Form Section */}
        <section className="form-section bg-white p-4 ">
          <div className="text-left rounded-t-lg lg:text-left">
            <h1 className="text-2xl font-bold mt-5">Welcome to NRC</h1>
            <p className="text-sm text-gray-600 my-4">
              Fill in the details below to create a new account
            </p>
          </div>

          <form className="rounded-b-lg">
            {/* Grid Layout for Form Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Gender</label>
                <select className="p-2 border border-gray-300 rounded-md">
                  <option>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">
                  Identification Type
                </label>
                <select className="p-2 border border-gray-300 rounded-md">
                  <option>Select Identification type</option>
                  <option>BVN</option>
                  <option>NIN</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">ID Number</label>
                <input
                  type="text"
                  placeholder="Enter ID number"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {/* Password Input */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-sm text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="p-2 border border-gray-300 rounded-md pr-10" /* Add padding for icon */
                />
                <LuEyeOff className="eyeIconPassword absolute right-3 top-10 text-gray-500 cursor-pointer" />
              </div>

              {/* Confirm Password Input */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-sm text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="p-2 border border-gray-300 rounded-md pr-10" /* Add padding for icon */
                />
                <LuEyeOff className="eyeIconConfirmPassword absolute right-3 top-10 text-gray-500 cursor-pointer" />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-2 mt-4">
              <input type="checkbox" className="mt-1" />
              <label className="text-sm text-gray-600">
                By proceeding with the registration, I confirm that I have read
                and accept the{" "}
                <a href="#" className="text-black underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-black underline">
                  Terms of Service
                </a>
                .
              </label>
            </div>

            {/* Sign Up Button */}
            <button className="w-full bg-green-600 text-white py-3 rounded-md mt-6 hover:bg-green-700">
              Sign Up
            </button>

            {/* Sign In Text */}
            <p className="text-sm text-center mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-green-600">
                Sign in
              </a>
            </p>
          </form>
        </section>
      </div>

      {/* Right Side: Image Container (Hidden on Mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={signUpImage}
          alt="Train Image"
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-8 left-8">
          <img src={trainLogo} alt="NRC Logo" className="h-12" />
        </div>
      </div>
    </div>
  );
};

export default Register;

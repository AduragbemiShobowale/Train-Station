import React from "react";
import signUpImage from "../../../assets/image/signUp.png";
import trainLogo from "../../../assets/icon/TrainLogo.png";
import { LuEyeOff } from "react-icons/lu";
import "./Login.css";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side: Form Container */}
      <div className="w-full lg:w-1/2 ">
        {/* Mobile Logo */}
        <div className="lg:hidden bg-white">
          <img src={trainLogo} alt="NRC Logo" className="pl-4" />
        </div>

        {/* Form Section */}
        <section className="form-section2 mt-10 p-6 bg-white p-4">
          <div className="text-left rounded-t-lg lg:text-left">
            <h1 className="text-2xl font-bold mt-5">Welcome Back</h1>
            <p className="text-sm text-gray-600 my-4">Sign in to continue</p>
          </div>

          <form className="rounded-b-lg">
            {/* Grid Layout for Form Fields */}

            <div className="grid grid-cols-1 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 mb-4">
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
            </div>

            <p>Forgot password?</p>

            {/* Sign In Button */}
            <button className="w-full bg-green-600 text-white py-3 rounded-md mt-6 hover:bg-green-700">
              Sign In
            </button>

            {/* Sign In Text */}
            <p className="text-sm text-center mt-6">
              Already have an account?{" "}
              <a href="/register" className="text-green-600">
                Sign Up
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

export default Login;

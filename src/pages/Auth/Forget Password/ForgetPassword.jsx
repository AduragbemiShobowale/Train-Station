import React from "react";
import signUpImage from "../../../assets/image/signUp.png";
import trainLogo from "../../../assets/icon/TrainLogo.png";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side: Form Container */}
      <div className="w-full lg:w-1/2 ">
        {/* Mobile Logo */}
        <div className="lg:hidden bg-white">
          <img src={trainLogo} alt="NRC Logo" className="pl-4" />
        </div>

        {/* Form Section */}
        <section className="form-section1 mt-10 p-6 bg-white p-4">
          <div className="text-left rounded-t-lg lg:text-left">
            <h1 className="text-2xl font-bold mt-5">Forgot Password</h1>
            <p className="text-sm text-gray-600 my-4">
              Enter your email address to reset your password.
            </p>
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

            {/* Sign In Button */}
            <button className="w-full bg-green-600 text-white py-3 rounded-md mt-6 hover:bg-green-700">
              Reset
            </button>

            {/* Sign In Text */}
            <p className="text-sm text-center mt-6">
              Don't have an account?
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

export default ForgetPassword;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import loginImage from "../../../assets/image/signUp.png";
import trainLogo from "../../../assets/icon/TrainLogo.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import "./ResetPassword.css";
import { API_URLS } from "./config";
import axios from "axios";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "Please enter your new password";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      // Make API call to reset password
      const response = await axios.put(API_URLS.resetPassword(resetToken), {
        password: formData.newPassword,
      });

      if (response.status === 200) {
        setResetSuccess(true);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setErrors((prev) => ({
          ...prev,
          general: err.response.data.message,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          general: "Password reset failed. Please try again.",
        }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (resetSuccess) {
    return (
      <div className="success-message min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold mb-4 text-green-500">
            Password Reset Successful
          </h2>
          <p className="text-gray-600 mb-6">
            Your password has been updated. You can now login with your new
            password.
          </p>
          <a
            href="/signin"
            className="text-green-500 hover:underline font-medium"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row-reverse relative register">
      {/* Left Side Image */}
      <div className="lg:w-1/2 hidden lg:block relative">
        <img
          src={loginImage}
          alt="Train"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <main className="flex flex-col justify-between lg:w-1/2 bg-white register">
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

        <div className="p-8 lg:p-12 bg-white w-[95%] md:w-[80%] mx-auto mt-12 lg:w-full lg:mt-29 rounded-lg lg:rounded-none">
          <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
          <p className="text-gray-600 mb-4">Enter your new password</p>

          {errors.general && (
            <p className="text-red-500 text-sm mb-4">{errors.general}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 ${
                    errors.newPassword ? "border-red-500" : ""
                  }`}
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={toggleNewPasswordVisibility}
                >
                  {showNewPassword ? (
                    <LuEye className="w-5 h-5 text-gray-400" />
                  ) : (
                    <LuEyeOff className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.newPassword}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <LuEye className="w-5 h-5 text-gray-400" />
                  ) : (
                    <LuEyeOff className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition duration-200 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Loading..." : "Reset Password"}
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-gray-600">Remember your password? </span>
            <a href="/signin" className="text-green-500 hover:underline">
              Login
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;

import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import loginImage from "../../../assets/image/signUp.png";
import trainLogo from "../../../assets/icon/TrainLogo.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import "./Login.css";

const Login = () => {
  const { login } = useAuth(); // get the login function from context
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); // for loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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

    // Password validation
    if (!formData.password) {
      newErrors.password = "Please enter your password";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
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
      // Call the login function from AuthContext
      const data = await login(formData);

      if (data.success) {
        // If login is successful, redirect
        navigate("/");
      } else {
        // If the server returned success: false
        setErrors((prev) => ({
          ...prev,
          general: data.message || "Login failed",
        }));
      }
    } catch (err) {
      // If an error is thrown from the context (e.g., network error)
      setErrors((prev) => ({
        ...prev,
        general: err.message,
      }));
    } finally {
      setIsLoading(false);
    }
  };

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

        <div className="p-8 lg:p-12 bg-white w-[95%] md:w-[80%] mx-auto mt-12 lg:w-full rounded-lg lg:rounded-none">
          <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
          <p className="text-gray-600 mb-4">Sign in to continue</p>

          {/* Display any general error message */}
          {errors.general && (
            <p className="text-red-500 text-sm mb-4">{errors.general}</p>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
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

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <LuEye className="w-5 h-5 text-gray-400" />
                  ) : (
                    <LuEyeOff className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm text-green-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition duration-200 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <a href="/signup" className="text-green-500 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;

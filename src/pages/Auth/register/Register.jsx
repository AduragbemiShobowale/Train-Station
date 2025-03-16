import React, { useState } from "react";
import signUpImage from "../../../assets/image/signUp.png";
import trainLogo from "../../../assets/icon/TrainLogo.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import "./Register.css";
import axios from "axios";

const Register = () => {
  // State for form values
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    identificationType: "",
    idNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};

    // Required fields check
    [
      "firstName",
      "lastName",
      "phoneNumber",
      "dateOfBirth",
      "gender",
      "identificationType",
      "idNumber",
      "email",
      "password",
      "confirmPassword", // Ensure confirmPassword is also required
    ].forEach((field) => {
      if (!formValues[field]) {
        newErrors[field] = `Please enter your ${field}`;
      }
    });

    // Email format validation
    if (
      formValues.email &&
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone number format validation
    if (formValues.phoneNumber && !/^\d{10,15}$/.test(formValues.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    // ID number format validation
    if (formValues.idNumber && !/^\d{11}$/.test(formValues.idNumber)) {
      newErrors.idNumber = "ID number must be 11 digits";
    }

    // Password strength validation
    if (
      formValues.password &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formValues.password
      )
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    // Confirm password validation
    if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://train-station-backend.onrender.com/api/v1/auth/register",
        {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          phoneNumber: formValues.phoneNumber,
          dateOfBirth: formValues.dateOfBirth,
          gender: formValues.gender,
          identificationType: formValues.identificationType,
          idNumber: formValues.idNumber,
          email: formValues.email,
          password: formValues.password,
        }
      );

      if (response.status === 201) {
        window.location.href = "/signin";
      }
    } catch (error) {
      // Debug: log the error response
      console.error("Registration failed:", error.response);

      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors((prev) => ({
          ...prev,
          general: "Registration failed. Please try again.",
        }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row-reverse relative register pb-10 lg:pb-0">
      {/* Image Background for Desktop */}
      <div className="lg:w-1/2 hidden lg:block relative">
        <img
          src={signUpImage}
          alt="Train"
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
        <div className="p-8 lg:p-12 bg-white w-[95%] mx-auto mt-12 lg:w-full rounded-lg lg:rounded-none">
          <h1 className="text-3xl font-bold mb-4">Welcome to NRC</h1>
          <p className="text-gray-600 mb-8">
            Fill the information below to create a new account
          </p>

          {/* General Error Message */}
          {errors.general && (
            <p className="text-red-500 text-sm mb-4">{errors.general}</p>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Phone Number & Date of Birth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
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
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.phoneNumber ? "border-red-500" : ""
                  }`}
                  placeholder="Enter phone number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dateOfBirth"
                  value={formValues.dateOfBirth}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.dateOfBirth ? "border-red-500" : ""
                  }`}
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>
            </div>

            {/* Gender & Identification Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formValues.gender}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.gender ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="idType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Identification Type
                </label>
                <select
                  id="idType"
                  name="identificationType"
                  value={formValues.identificationType}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.identificationType ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select identification type</option>
                  <option value="NIN">NIN</option>
                  <option value="National ID">National ID</option>
                  <option value="International Passport">
                    International Passport
                  </option>
                  <option value="Driver's License">Driver's License</option>
                </select>
                {errors.identificationType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.identificationType}
                  </p>
                )}
              </div>
            </div>

            {/* ID Number & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="idNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  ID Number
                </label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={formValues.idNumber}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.idNumber ? "border-red-500" : ""
                  }`}
                  placeholder="Enter ID number"
                />
                {errors.idNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.idNumber}</p>
                )}
              </div>
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
                  value={formValues.email}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3"
                    onClick={togglePasswordVisibility}
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
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 ${
                      errors.confirmPassword ? "border-red-500" : ""
                    }`}
                    placeholder="Confirm password"
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
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-green-500 text-white py-3 rounded-md font-medium transition duration-200 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-600"
              }`}
            >
              {isSubmitting ? "Loading..." : "Sign Up"}
            </button>
          </form>
          {/* Footer with Sign In Link */}
          <footer className="p-8 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <a href="/signin" className="text-green-500 hover:underline">
              Sign in
            </a>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Register;

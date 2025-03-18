// PassChange.jsx
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../contexts/AuthContext"; // Import AuthContext
import axios from "axios";

const PassChange = ({ isOpen, onClose }) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { auth } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.put("/api/v1/auth/update-password", {
        currentPassword,
        newPassword,
      });

      if (response.data.success) {
        // Password updated successfully
        setCurrentPassword("");
        setNewPassword("");
        onClose();
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to update password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-start md:items-center md:pt-0 z-10 px-4">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-[90%] md:w-[450px] relative mt-50 lg:mt-30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <IoClose className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Modal Heading */}
        <h1 className="text-lg md:text-2xl font-bold mb-2 text-left">
          Change Password
        </h1>
        <p className="text-gray-600 mb-6 text-left text-sm md:text-base">
          Enter new password details below.
        </p>

        {error && <div className="text-red-500 text-sm mb-3">{error}</div>}

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Current Password Field */}
          <div>
            <label
              htmlFor="current-password"
              className="block text-sm font-medium text-gray-700"
            >
              Current Password
            </label>
            <div className="relative mt-1">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="current-password"
                className="w-full border rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter current password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                aria-label="Toggle password visibility"
              >
                {showCurrentPassword ? (
                  <LuEye className="w-5 h-5" />
                ) : (
                  <LuEyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* New Password Field */}
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <div className="relative mt-1">
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                className="w-full border rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter new password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                aria-label="Toggle password visibility"
              >
                {showNewPassword ? (
                  <LuEye className="w-5 h-5" />
                ) : (
                  <LuEyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white py-3 rounded-md font-medium hover:bg-green-600 transition duration-200"
          >
            {loading ? "Updating..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PassChange;

// config.js
const API_BASE_URL =
  import.meta.env.VITE_REACT_APP_API_URL ||
  "https://train-station-backend.onrender.com";

export const API_URLS = {
  forgotPassword: `${API_BASE_URL}/api/v1/auth/forgot-password`,
  resetPassword: (token) =>
    `${API_BASE_URL}/api/v1/auth/reset-password/${token}`,
};

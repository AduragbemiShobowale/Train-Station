// src/contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// Set up an Axios interceptor to attach the token on every request
axios.interceptors.request.use(
  (config) => {
    const authCookie = Cookies.get("auth");
    console.log("authCookie is:", authCookie); // <-- Add this

    if (authCookie) {
      const authData = JSON.parse(authCookie);
      console.log("Parsed authData is:", authData); // <-- And this

      if (authData.token) {
        config.headers.Authorization = `Bearer ${authData.token}`;
      }
    }

    console.log("Outgoing request headers:", config.headers);
    return config;
  },
  (error) => Promise.reject(error)
);

// Create the context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1️⃣ Read the 'auth' cookie synchronously before the first render
  const [auth, setAuth] = useState(() => {
    const data = Cookies.get("auth");
    return data
      ? JSON.parse(data) // e.g. { success, token, user: { id, firstName, lastName, email }, ... }
      : { user: null, token: "", success: false, message: "" };
  });

  // Log auth state changes for debugging
  useEffect(() => {
    console.log("Auth state changed:", auth);
  }, [auth]);

  // 2️⃣ Optionally set a base URL for axios
  useEffect(() => {
    axios.defaults.baseURL =
      import.meta.env.VITE_REACT_APP_API_URL ||
      "https://train-station-backend.onrender.com";
  }, []);

  // 3️⃣ Attach token to axios defaults when it changes (for consistency)
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = auth?.token
      ? `Bearer ${auth.token}`
      : "";
    console.log(
      "Axios default header:",
      axios.defaults.headers.common["Authorization"]
    );
  }, [auth?.token]);

  // 4️⃣ Login function
  const login = async (formData) => {
    try {
      // e.g. POST /api/v1/auth/login
      const { data } = await axios.post("/api/v1/auth/login", formData);

      if (data?.success) {
        // Build a new auth object from the response
        const newAuth = {
          success: data.success,
          token: data.token,
          user: data.user, // e.g. { id, firstName, lastName, email }
        };

        // Update state
        setAuth(newAuth);

        // Save to cookie (7 days)
        Cookies.set("auth", JSON.stringify(newAuth), {
          expires: 7,
          path: "/",
          sameSite: "lax",
          secure: false, // Set to true if using HTTPS
        });
        return newAuth;
      } else {
        // If the server responded with success: false
        return data;
      }
    } catch (error) {
      console.error("Login error:", error?.response?.data?.message);
      throw new Error(
        error?.response?.data?.message || "An error occurred while logging in"
      );
    }
  };

  // 5️⃣ Signup function
  const signup = async (formData) => {
    try {
      // e.g. POST /api/v1/auth/register
      const { data } = await axios.post("/api/v1/auth/register", formData);
      return data; // Decide if you want to auto-login or not
    } catch (error) {
      console.error("Signup error:", error?.response?.data?.message);
      throw new Error(
        error?.response?.data?.message || "An error occurred while signing up"
      );
    }
  };

  // 6️⃣ Logout function
  const logout = () => {
    Cookies.remove("auth"); // Remove the cookie
    setAuth({ user: null, token: "", success: false, message: "" });
  };

  return (
    <AuthContext.Provider value={{ auth, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access AuthContext
export const useAuth = () => useContext(AuthContext);

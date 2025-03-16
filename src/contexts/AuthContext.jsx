import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// Create the context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1️⃣ Read the 'auth' cookie *synchronously* before the first render
  const [auth, setAuth] = useState(() => {
    const data = Cookies.get("auth");
    return data
      ? JSON.parse(data) // e.g. { success, token, user: {id, firstName, lastName, email}, ... }
      : { user: null, token: "", success: false, message: "" };
  });

  // 2️⃣ Optionally set a base URL for axios (if you want)
  //    Adjust to your actual environment or remove if not needed
  useEffect(() => {
    axios.defaults.baseURL =
      import.meta.env.VITE_REACT_APP_API_URL ||
      "https://train-station-backend.onrender.com";
  }, []);

  // 3️⃣ Attach token to all axios requests when it changes
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = auth?.token
      ? `Bearer ${auth.token}`
      : "";
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
          user: data.user, // e.g. {id, firstName, lastName, email}
        };

        // Update state
        setAuth(newAuth);

        // Save to cookie (7 days)
        Cookies.set("auth", JSON.stringify(newAuth), { expires: 7 });
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

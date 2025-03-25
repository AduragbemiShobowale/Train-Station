import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const stations = [
  "Mobolaji Johnson Station",
  "Babatunde Raji Fashola Station",
  "Lateef Kayode Jakande Station",
  "Professor Yemi Osinbajo Station",
  "Olu Fumilayo Ransome Kuti Station",
  "Professor Wole Soyinka Station",
  "Aremo Olusegun Osoba Station",
  "Ladoke Akintola Station",
  "Obafemi Awolowo Station",
];

const FindTrain = ({ onSearch, onError }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  // States for form fields
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  // Error messages for each field
  const [errors, setErrors] = useState({
    origin: "",
    destination: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Filter out the chosen origin from the destination list
  const filteredDestinations = stations.filter((station) => station !== origin);

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
    setErrors((prev) => ({ ...prev, origin: "" }));
    if (e.target.value === destination) {
      setDestination("");
    }
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
    setErrors((prev) => ({ ...prev, destination: "" }));
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setErrors((prev) => ({ ...prev, date: "" }));
  };

  const handleFindTrain = async () => {
    // 1. Check if user is authenticated
    if (!auth?.user) {
      onError?.("Please sign in before searching for trains.");
      navigate("/signin");
      return;
    }

    // 2. Validate fields
    const newErrors = { origin: "", destination: "", date: "" };
    if (!origin) newErrors.origin = "Please select the originating station";
    if (!destination)
      newErrors.destination = "Please select the destination station";
    if (!date) newErrors.date = "Please confirm the date of journey";
    setErrors(newErrors);

    if (newErrors.origin || newErrors.destination || newErrors.date) {
      return;
    }

    // Set loading state
    setIsLoading(true);

    try {
      // console.log(
      //   "handleFindTrain called — about to POST /api/v1/trains/search"
      // );
      const response = await axios.post("/api/v1/trains/search", {
        fromStation: origin,
        toStation: destination,
        date,
      });

      // Pass the fetched trains to the parent via onSearch, if provided
      onSearch?.(response.data);
      // onError?.(""); // Clear any previous error

      // Navigate to /searchTrain and pass the results and search criteria in state
      navigate("/searchTrain", {
        state: {
          searchResults: response.data,
          criteria: { origin, destination, date },
        },
      });
    } catch (error) {
      console.error("Error searching trains:", error);
      onError?.(
        error.response?.data?.message ||
          "Something went wrong while searching for trains."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-[18rem] md:top-[24rem] left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[88%] max-w-7xl px-6 py-7 flex flex-col md:flex-row items-center gap-4 bg-white shadow-lg rounded-lg">
      {/* Originating Station */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-gray-600 font-medium">From</label>
        <select
          className="border p-2 rounded w-full hover:cursor-pointer"
          value={origin}
          onChange={handleOriginChange}
        >
          <option value="">Select Originating Station</option>
          {stations.map((station) => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>
        {errors.origin && (
          <p className="text-red-500 text-sm">{errors.origin}</p>
        )}
      </div>

      {/* Destination Station */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-gray-600 font-medium">To</label>
        <select
          className="border p-2 rounded w-full hover:cursor-pointer"
          value={destination}
          onChange={handleDestinationChange}
          disabled={!origin}
        >
          <option value="">Select Destination Station</option>
          {filteredDestinations.map((station) => (
            <option key={station} value={station}>
              {station}
            </option>
          ))}
        </select>
        {errors.destination && (
          <p className="text-red-500 text-sm">{errors.destination}</p>
        )}
      </div>

      {/* Date Picker */}
      <div className="flex flex-col w-full md:w-1/4">
        <label className="text-gray-600 font-medium">Date</label>
        <input
          type="date"
          className="border p-2 rounded w-full hover:cursor-pointer"
          value={date}
          onChange={handleDateChange}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      {/* Submit Button */}
      <button
        className="bg-green-600 text-white px-6 py-2 rounded w-full md:w-[30%] md:mt-5 hover:cursor-pointer"
        onClick={handleFindTrain}
        disabled={isLoading}
      >
        {isLoading ? "Searching..." : "Find My Train"}
      </button>
    </div>
  );
};

export default FindTrain;

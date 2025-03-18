// src/components/FindMyTrain.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
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

const FindMyTrain = ({ initialCriteria, onSearch, onError }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form fields with initialCriteria if provided
  const [origin, setOrigin] = useState(initialCriteria?.origin || "");
  const [destination, setDestination] = useState(
    initialCriteria?.destination || ""
  );
  const [date, setDate] = useState(initialCriteria?.date || "");
  const [errors, setErrors] = useState({
    origin: "",
    destination: "",
    date: "",
  });

  // Update fields if initialCriteria changes
  useEffect(() => {
    if (initialCriteria) {
      setOrigin(initialCriteria.origin);
      setDestination(initialCriteria.destination);
      setDate(initialCriteria.date);
    }
  }, [initialCriteria]);

  // Filter out the selected origin from the destination list
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
    // Check if user is authenticated
    if (!auth?.user) {
      onError("Please sign in before searching for trains.");
      navigate("/signin");
      return;
    }

    // Validate fields
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

    // Make the API call to your backend
    try {
      console.log(
        "handleFindTrain called — about to POST /api/v1/trains/search"
      );
      const response = await axios.post("/api/v1/trains/search", {
        fromStation: origin,
        toStation: destination,
        date,
      });
      onSearch(response.data); // Update the parent state with fetched trains
      // onError(""); // Clear any previous error
    } catch (error) {
      console.error("Error searching trains:", error);
      onError(
        error.response?.data?.message ||
          "Something went wrong while searching for trains."
      );
    } finally {
      setIsLoading(false); // Clear loading state regardless of success/failure
    }
  };

  return (
    <div className="w-[90%] lg:w-[100%] max-w-6xl px-6 py-7 flex flex-col md:flex-row items-center gap-4 bg-[#006B14] shadow-lg rounded-lg mx-auto my-6">
      {/* Originating Station */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-white font-medium">From</label>
        <select
          className="border p-2 rounded w-full bg-[#18A532] text-white"
          value={origin}
          onChange={handleOriginChange}
        >
          <option className="bg-[#18A532] text-white" value="">
            Select Originating Station
          </option>
          {stations.map((station) => (
            <option
              key={station}
              value={station}
              className="bg-[#18A532] text-white"
            >
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
        <label className="text-white font-medium">To</label>
        <select
          className="border p-2 rounded w-full bg-[#18A532] text-white"
          value={destination}
          onChange={handleDestinationChange}
          disabled={!origin}
        >
          <option className="bg-[#18A532] text-white" value="">
            Select Destination Station
          </option>
          {filteredDestinations.map((station) => (
            <option
              key={station}
              value={station}
              className="bg-[#18A532] text-white"
            >
              {station}
            </option>
          ))}
        </select>
        {errors.destination && (
          <p className="text-red-500 text-sm">{errors.destination}</p>
        )}
      </div>

      {/* Date Picker */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-white font-medium">Date</label>
        <input
          type="date"
          className="border p-2 rounded w-76 bg-[#18A532] text-white mx-auto"
          value={date}
          onChange={handleDateChange}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      {/* Submit Button */}
      <button
        className="bg-white text-[#18A532] hover:text-white hover:bg-[#18A532] font-semibold px-6 py-2 rounded w-full md:w-[30%] lg:w-[20%] md:mt-5"
        onClick={handleFindTrain}
        disabled={isLoading}
      >
        {isLoading ? "Searching..." : "Find My Train"}
      </button>
    </div>
  );
};

export default FindMyTrain;

// src/pages/SearchTrain.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FindMyTrain from "./FindMyTrain";
import TrainBooking from "./TrainBooking";
import NotFound from "../faq/NotFound";

const SearchTrain = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const [initialCriteria, setInitialCriteria] = useState(null);

  // If the user navigated from the homepage, read the passed state
  useEffect(() => {
    if (location.state) {
      if (location.state.searchResults) {
        setSearchResults(location.state.searchResults);
      }
      if (location.state.criteria) {
        setInitialCriteria(location.state.criteria);
      }
    }
  }, [location.state]);

  return (
    <div>
      {/* The search form on this page is pre-populated if criteria exist */}
      <FindMyTrain
        initialCriteria={initialCriteria}
        onSearch={setSearchResults}
        onError={setError}
      />
      {/* Display the train booking results */}
      <TrainBooking trains={searchResults} />
      {error && <NotFound />}
    </div>
  );
};

export default SearchTrain;

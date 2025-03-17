// src/pages/SearchTrain.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FindMyTrain from "./FindMyTrain";
import TrainBooking from "./TrainBooking";
import NotFound from "../faq/NotFound";

const SearchTrain = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState(null); // Use null to indicate no results yet
  const [error, setError] = useState("");
  const [initialCriteria, setInitialCriteria] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

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
      {/* Pre-populated search form */}
      <FindMyTrain
        initialCriteria={initialCriteria}
        onSearch={(results) => {
          console.log("Search Results:", results); // Debugging
          if (results && results.length > 0) {
            setSearchResults(results);
            setError(""); // Reset error
          } else {
            setSearchResults(null); // Set to null for no results
            setError("No trains found"); // Set error if empty results
          }
        }}
        onError={(errMsg) => {
          console.error("Search Error:", errMsg);
          setError(errMsg);
          setSearchResults(null); // Clear previous search results if an error occurs
        }}
      />
      
      {/* Loading state */}
      {isLoading && <div className="loading">Searching for trains...</div>}
      
      {/* Results or error */}
      {!isLoading && (
        <>
          {error ? (
            <NotFound message={error} />
          ) : searchResults !== null && searchResults.length > 0 ? (
            <TrainBooking trains={searchResults} />
          ) : (
            <NotFound />
          )}
        </>
      )}
    </div>
  );
};

export default SearchTrain;
import React, { useState } from "react";
import "./FaqPage.css";
import { CiSearch } from "react-icons/ci";
import FaqFile from "./FaqFile";
import RailwayCompanion from "../../components/RailwayCompanion";
import NotFound from "./NotFound";

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="majorPage md:pt-32 lg:pt-12">
        <div className="pageText ">
          <h1 className="FAQ">Frequently Asked Questions</h1>
          <p className="help">Have Questions? We are here to help.</p>

          <div className="search mx-auto md:w-[32%] lg:w-[60%]">
            <input
              className="py-2 px-11"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <CiSearch className="searchIcon" />
          </div>
        </div>
      </div>

      {/* Pass the search term to FaqFile instead of filtering here */}
      <FaqFile searchQuery={searchTerm} />

      <RailwayCompanion />
    </div>
  );
};

export default FaqPage;

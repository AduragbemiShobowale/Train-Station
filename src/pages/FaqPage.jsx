import React from "react";
import "../pages/FaqPage.css";
import { CiSearch } from "react-icons/ci";

const FaqPage = () => {
  return (
    <div>
      <div className="majorPage md:pt-32 lg:pt-12">
        <div className="pageText ">
          <h1 className="FAQ">Frequently Asked Questions</h1>
          <p className="help">Have Questions? We are here to help.</p>

          {/* -----------------Search----------------------------------------------- */}

          <div className="search mx-auto md:w-[32%] lg:w-[60%]">
            <input className="py-2 px-11" type="text" placeholder="Search..." />
            <CiSearch className="searchIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;

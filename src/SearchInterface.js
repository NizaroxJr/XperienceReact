import React from "react";
import "./SearchInterface.css";

const SearchInterface = ({
  searchKeyword,
  handleSearchKeywordChange,
  handleFilterChange,
}) => {
  return (
    <div className="search-interface">
      <input
        type="text"
        placeholder="Search..."
        value={searchKeyword}
        onChange={handleSearchKeywordChange}
      />
      <select onChange={handleFilterChange} name="rating">
        <option value="">All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
        <option value="1">1 Star</option>
      </select>
      <select onChange={handleFilterChange} name="version">
        <option value="">All Versions</option>
        <option value="v1.0">v1.0</option>
        <option value="V1.1">v1.1</option>
        <option value="v1.2.1">v1.2.1</option>
      </select>
      <select onChange={handleFilterChange} name="country">
        <option value="">All Countries</option>
        <option value="US">USA</option>
        <option value="Japan">Japan</option>
        <option value="Russia">Russia</option>
        <option value="Germany">Germany</option>
        <option value="Australia">Australia</option>
      </select>
    </div>
  );
};

export default SearchInterface;

import React, { useState, useEffect } from "react";
import SearchInterface from "./SearchInterface";
import FilterOptionsPane from "./FilterOptionsPane";
import ReviewList from "./ReviewList";
import "./App.css";
import reviewsData from "./review.js";

const App = () => {
  const [selectedApp, setSelectedApp] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    rating: "",
    version: "",
    country: "",
  });
  const [reviews, setReviews] = useState([]);

  // Handle app selection change
  const handleAppSelection = (event) => {
    setSelectedApp(event.target.value);
  };

  // Handle sort order change
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Handle search keyword change
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  // Fetch reviews based on selected app, sort order, and filters
  useEffect(() => {
    let filteredReviews = reviewsData;

    // Filter the reviews based on the selected app
    if (selectedApp) {
      filteredReviews = filteredReviews.filter(
        (review) => review.appId === selectedApp
      );
    }

    // Filter the reviews based on the search keyword
    if (searchKeyword) {
      const keyword = searchKeyword.toLowerCase();
      filteredReviews = filteredReviews.filter(
        (review) =>
          review.reviewHeading.toLowerCase().includes(keyword) ||
          review.reviewText.toLowerCase().includes(keyword) ||
          review.reviewUserName.toLowerCase().includes(keyword)
      );
    }

    // Filter the reviews based on the selected country
    if (filterOptions.country) {
      filteredReviews = filteredReviews.filter(
        (review) => review.countryName === filterOptions.country
      );
    }

    // Filter the reviews based on the selected version
    if (filterOptions.version) {
      filteredReviews = filteredReviews.filter(
        (review) => review.version === filterOptions.version
      );
    }

    // Filter the reviews based on the selected rating
    if (filterOptions.rating) {
      filteredReviews = filteredReviews.filter(
        (review) => review.rating === filterOptions.rating
      );
    }

    // Sort the reviews based on the selected sort order
    if (sortOrder === "newest") {
      filteredReviews.sort((a, b) => b.reviewDate.localeCompare(a.reviewDate));
    } else if (sortOrder === "oldest") {
      filteredReviews.sort((a, b) => a.reviewDate.localeCompare(b.reviewDate));
    }

    setReviews(filteredReviews);
  }, [selectedApp, sortOrder, searchKeyword, filterOptions]);

  return (
    <div className="app">
      <header>
        <select value={selectedApp} onChange={handleAppSelection}>
          <option value="">Select App</option>
          <option value="app1">App 1</option>
          <option value="app2">App 2</option>
          {/* Add other app options dynamically */}
        </select>
      </header>
      <div className="main-content">
        {/* Search Interface */}
        <SearchInterface
          searchKeyword={searchKeyword}
          handleSearchKeywordChange={handleSearchKeywordChange}
          handleFilterChange={handleFilterChange}
        />
        {/* Filter Options Pane */}
        <FilterOptionsPane
          handleSortOrderChange={handleSortOrderChange}
          handleFilterChange={handleFilterChange}
        />
        {/* Review List */}
        <ReviewList reviews={reviews} />
      </div>
      <footer></footer>
    </div>
  );
};

export default App;

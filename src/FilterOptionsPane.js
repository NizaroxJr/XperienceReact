import React from "react";
import "./FilterOptionsPane.css";

const FilterOptionsPane = ({ handleSortOrderChange }) => {
  return (
    <aside className="filter-options-pane">
      <label>
        Sort By:
        <select onChange={handleSortOrderChange} name="sortOrder">
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </label>
      {/* Add additional filter options */}
    </aside>
  );
};

export default FilterOptionsPane;

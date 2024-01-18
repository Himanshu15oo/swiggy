import React from "react";

function Filter() {
  return (
    <div className="filter-container">
      <div className="filter-header">
        Restaurants with online food delivery in Pune
      </div>
      <div className="filter-btn-container">
        <div className="filter-btn">
          Filter
          <span className="filter-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </span>
        </div>
        <div className="filter-list">
          <ul>
            <li>
              <input type="text" />
            </li>
            <li>
              <input type="text" />
            </li>
            <li>
              <input type="text" />
            </li>
            <li>
              <input type="text" />
            </li>
          </ul>
        </div>
        <div className="filter-btn">
          Sort By
          <span className="filter-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="filter-btn">Fast Delivery</div>
        <div className="filter-btn">Pure Veg</div>
        <div className="filter-btn">Non Veg</div>
        <div className="filter-btn">Offer</div>
      </div>
    </div>
  );
}

export default Filter;

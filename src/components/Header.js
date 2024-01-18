import React from "react";
import logo from "/Users/himanshu/Desktop/swiggy/src/logo.png";

function Header() {
  return (
    <div className="header">
      <img className="img" src={logo} alt="logo" />
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search for restaurant and food"
        />
        <span className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Header;

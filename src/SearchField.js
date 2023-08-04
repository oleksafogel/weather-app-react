import React from "react";
import "./SearchField.css";

export default function SearchField() {
  return (
    <div className="SearchField">
      <form className="searchForm">
        <button className="currentLocationButton">
          <i className="fa-solid fa-location-pin currentLocationPin"></i>
        </button>
        <input
          className="cityInput"
          type="text"
          placeholder="Type in your city"
          autoComplete="off"
          autoFocus="on"
        />
        <input type="submit" className="searchButton" value="Search" />
      </form>
    </div>
  );
}

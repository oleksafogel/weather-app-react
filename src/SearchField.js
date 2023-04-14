import React from "react";
import "./SearchField.css";

export default function SearchField() {
  return (
    <div className="SearchField">
      <form className="SearchForm">
        <button className="CurrentLocationButton">
          <i className="fa-solid fa-location-pin CurrentLocationPin"></i>
        </button>
        <input
          className="CityInput"
          type="text"
          placeholder="Type in your city"
          autoComplete="off"
          autoFocus="on"
        />
        <input type="submit" className="SearchButton" value="Search" />
      </form>
    </div>
  );
}

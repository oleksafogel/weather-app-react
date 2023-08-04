import React from "react";
import "./CurrentLocation.css";

export default function CurrentLocation() {
  let currentLocationData = {
    city: "Paris",
    country: "France",
    lastUpdated: "Tuesday 10:00",
  };

  return (
    <div className="CurrentLocation">
      <div className="currentocationInfo">
        <h1>
          <span>{currentLocationData.city}</span>,{" "}
          <span>{currentLocationData.country}</span>
        </h1>
      </div>
      <div className="currentLocationDateTime">
        <p>Last updated at: {currentLocationData.lastUpdated}</p>
      </div>
    </div>
  );
}

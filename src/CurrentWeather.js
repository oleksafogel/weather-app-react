import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let currentWeatherData = {
    description: "Sunny",
    temp: 23,
    feelsLike: 23,
    humidity: 30,
    wind: 17,
  };

  return (
    <div className="CurrentWeather">
      <div className="CurrentWeatherDescription">
        {currentWeatherData.description}
      </div>
      <div className="CurrentTemp">
        <span className="CurrentTempNumber">{currentWeatherData.temp}</span> °C
      </div>
      <div className="CurrentWeatherDetails">
        Feels like: <span>{currentWeatherData.feelsLike}°C</span>
        <br />
        Humidity: <span>{currentWeatherData.humidity}</span>%<br />
        Wind: <span>{currentWeatherData.wind} km/h</span>
      </div>
    </div>
  );
}

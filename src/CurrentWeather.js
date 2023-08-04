import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [currentWeatherData, setCurrentWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setCurrentWeatherData({
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed
    });

    setReady(true);
  }

  const apiKey = "ab34b6cfb76f0e4bt38a1d0d31751o81";
  let query = "Paris";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  if (ready) {
    return (
      <div className="CurrentWeather">
        <div className="currentWeatherDescription">
          {currentWeatherData.description}
        </div>
        <div className="currentTemp">
          <span className="currentTempNumber">{Math.round(currentWeatherData.temperature)}</span> °C
        </div>
        <div className="currentWeatherDetails">
          Feels like: <span>{Math.round(currentWeatherData.feelsLike)}°C</span>
          <br />
          Humidity: <span>{currentWeatherData.humidity}</span>%<br />
          Wind: <span>{Math.round(currentWeatherData.wind)} km/h</span>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>
  }
}

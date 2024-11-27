import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Pretoria</h1>
      <ul>
        <li>Wednesday 02:02</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          6℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

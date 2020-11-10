import React from "react"
import getWeatherIcon from "../data/weatherIcons"


function CurrentWeatherDisplay(props) {
  const {city, lat, long, currentWeather, currentDisplay} = props
  let currentWeatherIcon = getWeatherIcon(currentWeather.iconId)
  
  return (
    <div className="current-weather-display" style={{display:currentDisplay}}> 
      <div className="current-title">Current weather:</div>
      <div className="current-main">
        <div className="current-temp">{currentWeather.temp}°C</div>
        <div className="current-weather">
          <div className="current-icon">{currentWeatherIcon}</div>
          
          <div className="current-description">{currentWeather.description}</div>
          <div className="current-humidity">Humidity: {currentWeather.humidity}%</div>
          <div className="current-pressure">Pressure: {currentWeather.pressure}hPa</div>
          <div className="current-sunrise">Sunrise: {currentWeather.sunrise}</div>
          <div className="current-sunset">Sunset: {currentWeather.sunset}</div>
        </div>
      </div>
      <div className="current-place">
        <div className="current-lat-long">Latitude: {lat}, Longitude: {long}</div>
        <div className="current-city">{city}</div>
      </div>
  

    </div>
  )
}

export default CurrentWeatherDisplay
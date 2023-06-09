import React, { useState } from 'react'
import weatherIcons from "../../weatherIcons"
import CurrentWeather from "./CurrentWeather"

function CurrentWeatherContainer(props) {
  const Weather = props.weather ? weatherIcons[props.weather] : null;


  return (
    <div className="weather-container">
      {props.weather ? <Weather /> : null}
      {/* conditionally render Weather and leave blank if no weather available */}
      <CurrentWeather condition={props.weather} temp={props.temp}/>
    </div>
  )
}

export default CurrentWeatherContainer
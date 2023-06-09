import React from 'react'
import weatherIcons from "../weatherIcons"
import "./WeatherBtn.css"


function WeatherBtn(props) {
  console.log("props.weather", props.weather)
  let Weather = weatherIcons[props.weather["weather"]]
  return (
    <button className="weather-btn" onClick={() => props.clickHandler(props.value)}>
      {/* your button will pass in the props.value which is the index of the while loop */}
      <span>{props.date}</span>
      <Weather className="weather-icon"/>
    </button>
  )
}

export default WeatherBtn
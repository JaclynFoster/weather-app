import React from 'react'
import WeatherBtn from "./WeatherBtn"

function Header(props) {
  let allWeather = [
    {weather: "sunny", temp:90},
    {weather: "windy", temp:80},
    {weather: "rain", temp:65},
    {weather: "snow", temp:30},
    {weather: "lightning", temp:40},
    {weather: "cloudy", temp:55},
    {weather: "rain", temp:32},
    {weather: "sunny", temp:100},
  ]

  function clickHandler2(index) {
    // pass in index value as a parameter
     props.setWeather(allWeather[index])
    // then setWeather state takes in allWeather object
  }
  
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let currentDay = (new Date()).getDay()
  let index = 0
  let buttons = []
  while (index < 7) {
    const weather = allWeather[index]
    const weekday = days[index]
    console.log("weather", weather)
    let day = index + currentDay
    if (day > 6) {
      day -= 7
    }
    buttons.push(<WeatherBtn key={index} value={index} clickHandler={clickHandler2} weather={weather} date={weekday}/>)
    index++
  }

  return (
    <nav>
      {buttons}
    </nav>
  )
}

export default Header
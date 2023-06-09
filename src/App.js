import './App.css';
import Header from "./components/Header";
import CurrentWeatherContainer from "./components/CurrentWeather/CurrentWeatherContainer";
import { useState } from 'react';

function App() {
 const [weather, setWeather] = useState({weather: "", temp: ""})
//  


  return (
    <div className="App">
      <Header setWeather={setWeather} weather={weather}/>
      <img src="./images/Bliss.jpg" alt="bliss" className="image"/>
      <CurrentWeatherContainer weather={weather["weather"]} temp={weather["temp"]}/>
    </div>
  );
}

export default App;

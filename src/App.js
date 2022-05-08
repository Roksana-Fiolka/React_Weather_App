import React, { useState } from "react";
//import axios from "axios";


const api = {

  key: "72a0f43746b2a28492dcc90658b8f1ac",
  base: "https://api.openweathermap.org/data/2.5/"

}


function App() {

const [query, setQuery] = useState('');
const [weather, setWeather] = useState({}); //equals to empty object

//fetch to get weather
const search = evt => {
 if (evt.key === "Enter") {
   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) //sends get request
   .then(res => res.json()) //json promise to get response
   .then(result => {
     setWeather(result);
     setQuery('');
     console.log(result);
   });
 }


}
  return (
    <div className="app">

<div className="search">
<input
          type="text"
          className="search-bar"
          placeholder="City name"
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          
          />
</div>
{(typeof weather.main != "undefined") ? (

      <div className="container">
        <div className="top">
          <div className="location">
   <div>
   {weather.name}
          </div>
          <div className="temperature">
            <h1> {Math.round(weather.main.temp)}°C</h1>
          </div>
          <div className="weather">
            <p>{weather.weather[0].main}</p>
          </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>{Math.round(weather.main.feels_like)}°C</p>
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <p>{weather.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="clouds">
              <p>{weather.clouds.all}%</p>
              <p>Clouds</p>
            </div>
  
          </div>
          </div>
            
        </div>
                ) : ('')}

      </div>
      
  );
}

export default App;

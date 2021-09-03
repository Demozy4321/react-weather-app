import { useState } from 'react';
import './App.css';

function App() {

  const api = {
    key:"5b3cb15072dca54938a19c10cd4d8e02",
    base : "https://api.openweathermap.org/data/2.5/weather?q="
  }

  const [search, setsearch] = useState('');
  const [weather, setweather] = useState({});

  const searchEvent = e => {
    if(e.keyCode ===13 || e.key === "Enter")
    {
      fetch (`${api.base}${search}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setweather(result)
        setsearch('')
        console.log(result);});
    }
  }

  // get date 
  const today = () => {
    var today = new Date();
    return today.toDateString();
  }

  return (
    <div className="App">
      <main>
      <div className="search-box">
            <input type="text" className="search-bar" placeholder="Enter The City Name..." name="" id=""
            onChange={e=>setsearch(e.target.value)}
            value={search}
            onKeyPress={searchEvent} />
          </div>
        {(typeof weather.main != "undefined") ?
            (<div>
          <div className="info-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{today()}</div>
          </div>
          <div className="weather-box">
            <div className="temperature-box">
              {Math.round(weather.main.temp)}° C
            </div>
            <div className="weather">
              {weather.weather[0].main}
            </div>
          </div>
            </div>) : ('') }
      </main>
    </div>
  );
}

export default App;

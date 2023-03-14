import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './component/Card.jsx';
import Search from './component/Search';
import Loader from './component/Loader';

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const getWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=2f68ffb2cb4287e2b5707797001121da`,
      );
      setWeatherInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
    });
  }, []);
  return (
    <div className="App">
      <div className="first">
        <h1>Weather app</h1>
      </div>
      <div>
        <Search getWeather={getWeather} />
      </div>
      <section>{weatherInfo ? <Card weatherInfo={weatherInfo} /> : <Loader />}</section>
    </div>
  );
}

export default App;

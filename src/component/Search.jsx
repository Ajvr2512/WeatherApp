import axios from 'axios';
import React, { useState } from 'react';

const Search = ({ getWeather }) => {
  const [cityName, setCityName] = useState(null);

  const getWeatherCity = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2f68ffb2cb4287e2b5707797001121da`,
      );
      getWeather(response.data[0].lat, response.data[0].lon);
    } catch (error) {
      console.log(error);
    }
  };
  const getWeatherEnter = async (e) => {
    if (e.key === 'Enter') {
      const city = cityName;
      getWeatherCity(city);
      setCityName('');
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setCityName(e.target.value);
  };
  return (
    <div id="form" className="seeker">
      <input
        type="text"
        placeholder="Busca una ciudad"
        value={cityName}
        onChange={handleSearch}
        onKeyDown={getWeatherEnter}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="input-icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Search;

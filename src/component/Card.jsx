import React, { useState } from 'react';
import Loader from './Loader';

const Card = ({ weatherInfo }) => {
  const convertTemp = (temp) => {
    return ((temp * 9) / 5 + 32).toFixed(1);
  };
  const [changeTemp, setChangeTemp] = useState(true);
  const temperature = changeTemp
    ? weatherInfo.main.temp
    : convertTemp(weatherInfo.main.temp);

  return (
    <div className="containerPrincipal">
      {!weatherInfo ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="text">
            <div>
              <h2 className="cambiar F">{temperature}°</h2>
              <ul>
                <li>
                  <strong>Humedad: </strong>
                  {weatherInfo?.main.humidity}%
                </li>
                <li>
                  <strong>Latitud: </strong>
                  {weatherInfo.coord?.lat}
                </li>
                <li>
                  <strong>Longitud: </strong>
                  {weatherInfo.coord?.lon}
                </li>
                <li>
                  <strong>Presion: </strong>
                  {weatherInfo?.main.pressure}
                </li>
              </ul>
            </div>
            <div className="img">
              <img
                src={`https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0].icon}@4x.png`}
                alt="sol"
              />
            </div>
          </div>
          <div className="secondContainer">
            <div>
              <h3 className="city">
                {weatherInfo?.name}, {weatherInfo?.sys.country}
              </h3>
            </div>
            <div>
              <p>
                {weatherInfo?.weather?.[0].main}
                <br />
                {weatherInfo?.weather?.[0].description}
              </p>
            </div>
          </div>
        </div>
      )}
      <section>
        <button className="Button" onClick={() => setChangeTemp(!changeTemp)}>
          Cambiar a {changeTemp ? '°F' : '°C'}
        </button>
      </section>
    </div>
  );
};

export default Card;

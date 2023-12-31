import React, { useEffect, useState } from 'react';
import humidity from '../../assets/humidity.png';
import wind from '../../assets/wind.png';
import axios from 'axios';
import cloud from '../../assets/cloud.png';
import clear from '../../assets/clear.png';
import rain from '../../assets/rain.png';
import drizzle from '../../assets/drizzle.png';
import mist from '../../assets/mist.png';
import './weather.css';

interface WeatherData {
  celcious: number;
  name: string;
  humidity: number;
  speed: number;
  image: string;
}

const Weather2: React.FC = () => {
  const [data, setData] = useState<WeatherData>({
    celcious: 10,
    name: 'london',
    humidity: 10,
    speed: 2,
    image: cloud,
  });

  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleClick = () => {
    if (name !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=cf83f92d235fc7705f8be4b52df838c5&units=metric`;

      axios
        .get(apiUrl)
        .then((res) => {
          let imagePath = cloud;
          if (res.data.weather[0].main === 'Clouds') {
            imagePath = cloud;
          } else if (res.data.weather[0].main === 'Clear') {
            imagePath = clear;
          } else if (res.data.weather[0].main === 'Rain') {
            imagePath = rain;
          } else if (res.data.weather[0].main === 'Drizzle') {
            imagePath = drizzle;
          } else if (res.data.weather[0].main === 'Mist') {
            imagePath = mist;
          } else {
            imagePath = cloud;
          }
          setData({
            ...data,
            celcious: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath,
          });
          setError('');
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setError('Invalid City. Enter a Valid City Name');
          } else {
            setError('');
          }
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="weather">
          <div className="search">
            <input type="text" placeholder="Enter City Name" onChange={(e) => setName(e.target.value)} />
            <button className="search-button" onClick={handleClick}>
              &#128269;
            </button>
          </div>
          <div className="error">
            <p>{error}</p>
          </div>
          <div className="winfo">
            <img src={data.image} alt="weather" className="icon" />
            <h1>{Math.round(data.celcious)}°C</h1>
            <h2>{data.name}</h2>
          </div>
          <div className="details">
            <div className="col">
              <img src={humidity} alt="humidity" />
              <div className="humidity">
                <p>{Math.round(data.humidity)}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="humidity" />
              <div className="wind">
                <p>{Math.round(data.speed)}km/h</p>
                <p>wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather2;
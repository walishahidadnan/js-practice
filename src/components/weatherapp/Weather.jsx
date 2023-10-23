import React from 'react'
import cloud from '../../assets/cloud.png'
import humidity from '../../assets/humidity.png'
import wind from '../../assets/wind.png'
import './weather.css';

const Weather = () => {
  return (
    <div>
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder='Enter City Name' />
                    <button className='search-button'>&#128269;</button>
                </div>
                <div className="winfo">
                    <img src={cloud} alt="weather" className='icon'/>
                    <h1>22°C</h1>
                    <h2>London</h2>
                </div>
                <div className="details">
                    <div className="col">
                        <img src={humidity} alt="humidity" />
                        <div className="humidity">
                            <p>20%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind} alt="humidity" />
                            <div className="wind">
                                <p>2 km/h</p>
                                <p>wind</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
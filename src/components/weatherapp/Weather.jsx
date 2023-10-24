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
                
            </div>
        </div>
    </div>
  )
}

export default Weather
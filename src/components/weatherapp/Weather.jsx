import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import './weather.css';

const Weather = () => {
  return (
    <div>
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder='Enter City Name' />
                    <button className='search-button'><AiOutlineSearch /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
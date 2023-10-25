import React, { useEffect, useState } from 'react'
import humidity from '../../assets/humidity.png'
import wind from '../../assets/wind.png'
import axios from 'axios'
import './weather.css';






const Weather = () => {

    const [data, setData] = useState({
        celcious: 10,
        name: 'london',
        humidity: 10,
        speed: 2, 
        image: ''
    })

    const [ name, setName] = useState('');


    const handleClick = () => {
        if (name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=cf83f92d235fc7705f8be4b52df838c5&units=metric`;

            axios.get(apiUrl)
            
            .then(res => {
                let imagePath = '';
                if(res.data.weather[0].main == "Clouds"){
                    imagePath = "../../assets/cloud.png"
                }
                else if(res.data.weather[0].main == "Clear"){
                    imagePath = "../../assets/clear.png"
                }
                else if(res.data.weather[0].main == "Rain"){
                    imagePath = "../../assets/rain.png"
                }
                else if(res.data.weather[0].main == "Drizzle"){
                    imagePath = "../../assets/drizzle.png"
                }
                else if(res.data.weather[0].main == "Mist"){
                    imagePath = "../../assets/mist.png"
                }else {
                    imagePath = "../../assets/cloud.png"
                }

                
                setData({...data, celcious: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed, image: imagePath })
            })
            .catch( err => console.log(err))
        }
        console.log(data.imagePath)
    }


  return (
    <div>
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder='Enter City Name' onChange={e => setName(e.target.value)} />
                    <button className='search-button' onClick={handleClick}>&#128269;</button>
                </div>
                <div className="winfo">
                    <img src={data.image} alt="weather" className='icon'/>
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
                        </div>`
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
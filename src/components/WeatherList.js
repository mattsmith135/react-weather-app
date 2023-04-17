// Maps over an array of weather data and renders a WeatherCard for each day

import PropTypes from 'prop-types'
import WeatherCard from "./WeatherCard"

const WeatherList = ({ weatherData }) => {
    return (
        <div className='weather-list'>
            {weatherData.map((weatherItem) => 
                <WeatherCard 
                key={weatherItem.id}
                city={weatherItem.cityname} 
                date={weatherItem.dt_txt} 
                temp={weatherItem.main.temp} 
                minTemp={weatherItem.main.temp_min} 
                maxTemp={weatherItem.main.temp_max}
                humidity={weatherItem.main.humidity} 
                windSpeed={weatherItem.wind.speed}
                airPressure={weatherItem.main.pressure}
                />    
            )}
        </div>
    )
}

export default WeatherList

WeatherList.propTypes = {
    weatherData: PropTypes.array.isRequired,
}
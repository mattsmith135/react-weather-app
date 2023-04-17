// Displays the weather data for a single day

const WeatherCard = ({ city, date, temp, minTemp, maxTemp, humidity, windSpeed, airPressure }) => {
    const dateObj = new Date(date);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[dateObj.getDay()];

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[dateObj.getMonth()];
    function addSuffix(day) {
        return day + (day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th');
    }
    const day = addSuffix(dateObj.getDate());
    const formattedDate = `${month} ${day}, ${dateObj.getFullYear()}`

    return (
        <div className='weather-card'>
            <div className='weather-card-left'>
                <div className='weather-card-compartment'>
                    <p className='weather-card__day'>{dayOfWeek}</p>
                    <p className='weather-card__date'>{formattedDate}</p>
                    <p className='weather-card__location'>{city}</p>
                </div>  
                <div className='weather-card-compartment'>
                    <p className='weather-card__temperature'>{temp}°C</p>
                    <p className='weather-card__description'>Description</p>
                </div>
            </div>
            <div className='weather-card-right'>
                <div className='weather-card-compartment'>
                    <div className='measurement'>
                        <p className='measurement__label'>Max Temp</p> 
                        <p className='measurement__reading'>{maxTemp}°C</p>
                    </div>
                    <div className='measurement'>
                        <p className='measurement__label'>Min Temp</p> 
                        <p className='measurement__reading'>{minTemp}°C</p>
                    </div>
                    <div className='measurement'>
                        <p className='measurement__label'>Humidity</p> 
                        <p className='measurement__reading'>{humidity}%</p>
                    </div>
                    <div className='measurement'>
                        <p className='measurement__label'>Wind</p> 
                        <p className='measurement__reading'>{windSpeed} km/h</p>
                    </div>
                    <div className='measurement'>
                        <p className='measurement__label'>Air Pressure</p> 
                        <p className='measurement__reading'>{airPressure} ATM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
import { useState } from 'react'
import Header from './components/Header'
import CityInput from './components/CityInput'
import WeatherList from './components/WeatherList'
import Footer from './components/Footer'

const { REACT_APP_API_KEY } = process.env; 

function App() {
  const [weatherData, setWeatherData] = useState([])

  const fetchCityCoords = async (city) => {
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${REACT_APP_API_KEY}`)
    const data = await res.json()
    console.log(res); 
    console.log(data);  

    return { latitude: data[0].lat, longitude: data[0].lon }
  }

  const fetchWeather = async (city) => {
    let coords = await fetchCityCoords(city)
    let requiredData = []
    const units = 'metric'
    const numberOfDays = 5; 

    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&cnt=${numberOfDays}&units=${units}&appid=${REACT_APP_API_KEY}`)
    const data = await res.json()

    /*
    OpenWeather API returns a list of Javascript objects with info not required by weather application
    The below loop 
    - provides each object with key values pairs for id and cityname
    - collects the important forecast information and pushes it into a new array
    This array is then set as state
    */

    for (let i = 0; i < data.list.length; i++) {
      data.list[i]['id'] = i
      data.list[i]['cityname'] = city
      requiredData.push(data.list[i])
    }
    console.log(requiredData)
    setWeatherData(requiredData)
  }

  return ( 
    <>
      <Header />
      <main>
        <CityInput onSearch={fetchWeather} />
        {weatherData.length > 0 && (<WeatherList weatherData={weatherData} />)}
        
        <div className='gradient'></div>
        <div className='background'></div>
      </main>
      <Footer />
    </>
  )
}

export default App

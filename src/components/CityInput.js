// Renders an input field for the user to enter a city name and calls onSearch when submitted 

import { useState } from 'react'

const CityInput = ({ onSearch }) => {
    const [city, setCity] = useState('') 

    const onSubmit = (e) => {
        e.preventDefault()
        onSearch(city)
    }

    return (
        <div className='form-container'>
            <form className='search-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <input id='search-input' type='text' placeholder='Search your city and let us work our magic.' onChange={(e) => setCity(e.target.value.toLowerCase().trim())} />
                </div>
                <input type='submit' value='Search' className='btn' />
            </form> 
        </div>
        
    )
}

export default CityInput
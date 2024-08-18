import React, { useState } from 'react';
import axios from 'axios';
import Logo from './compo/Logo';
import SearchBox from './compo/SearchBox';
import WeatherDetails from './compo/WeatherDetails';
import Forecast from './compo/Forecast';
import Footer from './compo/Footer';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
            setWeather(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch weather data. Please try again.');
            setWeather(null);
        }
    };

    return (
        <div className="weather-app">
            <Logo />
                <h1>Use our weather app to see the weather around the world</h1>
               
                <SearchBox city={city} setCity={setCity} fetchWeather={fetchWeather} />
            <div className="content">
                {error && <p className="error">{error}</p>}
                {weather && (
                    <div className='border-color'>
                    <div className='weather-details'>
                        <WeatherDetails weather={weather} />
                        <Forecast forecast={weather.forecast} />
                        </div>
                        </div>
                )}
            </div>
            {weather && <Footer weather={weather} />}
        </div>
    );
}

export default App;
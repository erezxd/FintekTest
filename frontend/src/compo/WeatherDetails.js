import React from 'react';

const WeatherDetails = ({ weather }) => (
    <div className="weather-details">
        <div className="weather-info">
            <h2 className='location-name'>{weather.location.name}</h2>
            <p className='location-country'>{weather.location.country}</p>
            <p className='localtime'>
                {new Date(weather.location.localtime).toLocaleDateString()} at {new Date(weather.location.localtime).toLocaleTimeString([], { hour12: false, minute: "2-digit", hour: "2-digit" })}
            </p>
            <div className="temperature">
                <p>{weather.current.temp_c}°</p>
                <p className='temperature-condition'>{weather.current.condition.text}</p>
            </div>
            <div className="extra-details">
                <p><span>Precipitation:</span><br/>{weather.current.precip_mm} mm</p>
                <p><span>Humidity:</span><br/>{weather.current.humidity}%</p>
                <p><span>Wind:</span><br/>{weather.current.wind_kph} km/h</p>
            </div>
        </div>
    </div>
);

export default WeatherDetails;

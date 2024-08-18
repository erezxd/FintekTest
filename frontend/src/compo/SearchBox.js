import React from 'react';

const SearchBox = ({ city, setCity, fetchWeather }) => (
    <div className="search-box">
    <div className="input-button-container">
    <input type="text" placeholder="City name" value={city} onChange={(e) => setCity(e.target.value)} />
    <button onClick={fetchWeather}>Check</button>
    </div>
    </div>
);

export default SearchBox;

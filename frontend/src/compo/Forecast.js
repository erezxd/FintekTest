import React from 'react';

const Forecast = ({ forecast }) => (
    <div className="forecast">
        {forecast.forecastday && (
            <>
                <p><span>13:00</span> <br/>{forecast.forecastday[0].hour[13].temp_c}°</p>
                <p><span>14:00</span> <br/>{forecast.forecastday[0].hour[14].temp_c}°</p>
                <p><span>15:00</span> <br/>{forecast.forecastday[0].hour[15].temp_c}°</p>
                <p><span>16:00</span> <br/>{forecast.forecastday[0].hour[16].temp_c}°</p>
                <p><span>17:00</span> <br/>{forecast.forecastday[0].hour[17].temp_c}°</p>
            </>
        )}
    </div>
);

export default Forecast;

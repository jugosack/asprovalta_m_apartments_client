// // src/Weather.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const apiKey = '1187b904bbdd08dc455f4cf12199c7b6';
//   const city = 'Asprovalta';
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         setWeatherData(response.data);
//       } catch (error) {
//         // eslint-disable-next-line no-console
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchWeatherData();
//   }, [apiUrl]);

//   return (
//     <div>
//       <h2>
//         Weather Forecast for
//         {' '}
//         {city}
//       </h2>
//       {weatherData && (
//         <div>
//           <p>
//             Temperature:
//             {' '}
//             {(weatherData.main.temp - 273.15).toFixed(2)}
//             {' '}
//             °C
//           </p>
//           <p>
//             Description:
//             {' '}
//             {weatherData.weather[0].description}
//           </p>
//           <p>
//             Wind Speed:
//             {' '}
//             {weatherData.wind.speed}
//             {' '}
//             m/s
//           </p>
//           {/* <p>
//             Wind Direction:
//             {' '}
//             {weatherData.wind.deg}
//             °
//           </p>
//           <p>
//             Humidity:
//             {' '}
//             {weatherData.main.humidity}
//             %
//           </p>
//           <p>
//             Pressure:
//             {' '}
//             {weatherData.main.pressure}
//             {' '}
//             hPa
//           </p> */}
//           {/* <p>
//             Visibility:
//             {' '}
//             {weatherData.visibility}
//             {' '}
//             meters
//           </p> */}
//           <p>
//             Sunrise:
//             {' '}
//             {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
//           </p>
//           <p>
//             Sunset:
//             {' '}
//             {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
//           </p>
//           {/* {weatherData.weather.length > 1 && (
//           <div>
//             <p>Additional Conditions:</p>
//             <ul>
//               {weatherData.weather.slice(1).map((condition, index) => (
//                 <li key={condition.description}>{condition.description}</li>
//               ))}
//             </ul>
//           </div>
//           )} */}

//           {weatherData.weather.length > 0 && (
//             <img
//               src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
//               alt={weatherData.weather[0].description}
//             />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;

// // src/Weather.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Weather = () => {
//   const [forecastData, setForecastData] = useState(null);
//   const apiKey = '1187b904bbdd08dc455f4cf12199c7b6';
//   const city = 'Asprovalta';
//   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

//   useEffect(() => {
//     const fetchForecastData = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         setForecastData(response.data);
//       } catch (error) {
//         // eslint-disable-next-line no-console
//         console.error('Error fetching forecast data:', error);
//       }
//     };

//     fetchForecastData();
//   }, [apiUrl]);

//   return (
//     <div>
//       <h2>
//         5-Day Weather Forecast for
//         {' '}
//         {city}
//       </h2>
//       {forecastData && forecastData.list && (
//         <div>
//           {forecastData.list.slice(0, 5).map((forecast) => (
//             <div key={forecast.dt} className="daily-forecast">
//               <p>
//                 Date:
//                 {' '}
//                 {new Date(forecast.dt * 1000).toLocaleDateString()}
//               </p>
//               <p>
//                 Temperature:
//                 {' '}
//                 {(forecast.main.temp - 273.15).toFixed(2)}
//                 {' '}
//                 °C
//               </p>
//               <p>
//                 Description:
//                 {' '}
//                 {forecast.weather[0].description}
//               </p>
//               {forecast.weather.length > 0 && (
//               <img
//                 src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
//                 alt={forecast.weather[0].description}
//               />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/weather.css';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const apiKey = '742d4df3226aeaac7dd26575e526e3cd';
  const city = 'Asprovalta';
  const currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const response = await axios.get(currentWeatherApiUrl);
        setCurrentWeather(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching current weather data:', error);
      }
    };

    const fetchForecastData = async () => {
      try {
        const response = await axios.get(forecastApiUrl);
        setForecastData(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching forecast data:', error);
      }
    };

   
    fetchForecastData();
  }, [currentWeatherApiUrl, forecastApiUrl]);

  const getAbbreviatedDay = (index) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date().getDay();
    const nextDay = (today + index) % 7; // Ensure it doesn't go beyond Saturday
    return daysOfWeek[nextDay];
  };

  return (
    <div className="weather_container">
      {currentWeather && (
        <div className="current_weather">
          <h2 className="current_temp">
            {/* Current Weather in */}
            Current Temperature:
            {/* {' '}
            {city} */}
          </h2>
          <div className="current_temp_icon">
            <p className="number_temp">
              {/* Temperature:
            {' '} */}
              {(currentWeather.main.temp - 273.15).toFixed(0)}
              {' '}
              °C
            </p>
            {/* <p>
            Description:
            {' '}
            {currentWeather.weather[0].description}
          </p> */}
            {currentWeather.weather.length > 0 && (
            <img
              className="icon_temp"
              src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
              alt={currentWeather.weather[0].description}
            />
            )}
          </div>
        </div>
      )}

      {forecastData && forecastData.list && (
        <div className="forecast_weather">
          {/* <h2>
            5-Day Weather Forecast for

            {' '}
            {city}
          </h2> */}
          {forecastData.list.slice(0, 5).map((forecast, index) => (
            <div key={forecast.dt} className="daily-forecast">
              <p>
                {/* Day:
                {' '} */}
                {getAbbreviatedDay(index)}
              </p>
              <p>
                {/* Temperature:
                {' '} */}
                {(forecast.main.temp - 273.15).toFixed(0)}
                {' '}
                °C
              </p>
              {/* <p>
                Description:
                {' '}
                {forecast.weather[0].description}
              </p> */}
              {forecast.weather.length > 0 && (
                <img
                  src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;

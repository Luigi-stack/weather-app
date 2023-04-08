import React from 'react';

function WeatherCard({ weatherData }) {
  const { name, main, weather } = weatherData;
  const temperature = Math.round(main.temp);
  const weatherCode = weather[0].id;


  let weatherImageSrc = '';
  if (weatherCode >= 200 && weatherCode <= 232) {
    weatherImageSrc = 'https://cdn-icons-png.flaticon.com/128/2204/2204340.png';
  } else if (weatherCode >= 300 && weatherCode <= 321) {
    weatherImageSrc = 'https://cdn-icons-png.flaticon.com/128/2204/2204337.png';
  } else if (weatherCode >= 500 && weatherCode <= 531) {
    weatherImageSrc = 'https://cdn-icons-png.flaticon.com/128/2204/2204339.png';
  } else if (weatherCode >= 600 && weatherCode <= 622) {
    weatherImageSrc = 'https://cdn-icons-png.flaticon.com/128/4051/4051422.png';
  } else if (weatherCode >= 701 && weatherCode <= 781) {
    weatherImageSrc = 'https://cdn-icons-png.flaticon.com/128/3750/3750480.png';
  } else if (weatherCode === 800) {
    weatherImageSrc = 'https://cdn-icons-png.flaticon.com/128/1207/1207545.png';
  } else if (weatherCode >= 801 && weatherCode <= 804) {
    weatherImageSrc = 'https://cdn-icons-png.flaticon.com/128/3750/3750201.png';
  }

  return (
    <div className="WeatherCard">
      <h2>{name}</h2>
      <img src={weatherImageSrc} alt="Weather" />
      <p>Temperature: {temperature}°C</p>
      <p>Description: {weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;


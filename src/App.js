import './App.css'
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WatherCard';


function App() {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = '3d80c5a1dc5b6f4518fc4e9cd5b38f0b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data)
          console.log(data);
        } else {
          setWeatherData(null);
        }
      } catch (error) {
        console.log(error);
        setWeatherData(null);
      }
    };

    if (query !== '') {
      fetchData();
    } else {
      setWeatherData(null);
    }
  }, [query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;

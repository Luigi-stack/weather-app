import './App.css'
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WatherCard';
import Loading from './components/Loading';


function App() {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);




  useEffect(() => {
    const API_KEY = '3d80c5a1dc5b6f4518fc4e9cd5b38f0b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;

    const fetchData = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
      setIsFirstLoad(false);

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
      {isFirstLoad ? (
        <div className="Welcome">
          <img
            src="https://media.tenor.com/ShTnSrVLePQAAAAi/capoo-bugcat.gif"
            alt="Enter a City Name please!"
          />
          <p>Enter a City Name please!</p>
        </div>
      ) : isLoading ? (
        <Loading />
      ) : weatherData ? (
        <WeatherCard weatherData={weatherData} />
      ) : (
        <div className='NotFound'>
          <img src='https://media.tenor.com/XzpD6ZFaH5MAAAAi/capoo-bugcat.gif'alt="city not found"/>
        <p>CITY NOT FOUND!</p>
        </div>
      )}
    </div>
  );
}

export default App;

import {useState} from 'react';
import WeatherData from '../models/WeatherData';

const API_KEY = 'cbaf267cfada9b18d0e0c37a8801d930';

function HomeScreenViewModel() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
      );
      const data = await response.json();
      const formattedWeatherData: WeatherData = {
        name: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
      };
      setWeatherData(formattedWeatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  const handleLatitudeChange = (text: string) => {
    setLatitude(text);
  };

  const handleLongitudeChange = (text: string) => {
    setLongitude(text);
  };

  return {
    latitude,
    longitude,
    weatherData,
    getWeather,
    handleLatitudeChange,
    handleLongitudeChange,
  };
}

export default HomeScreenViewModel;

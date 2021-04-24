import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { WeatherDay } from '../weatherDay/WeatherDay';
import { WeatherResponse } from '../../../../types/openWeatherResponse';
import fetchWeatherResults from '../../services/apiService';

const WeatherDisplay = () => {
  const params = useParams<any>();
  const [weatherResults, setWeatherResults] = useState<WeatherResponse>();
  const [errorOccured, setErrorOccurred] = useState(false);

  useEffect(() => {
    const getWeatherResults = async () => {
      try {
        const response = await fetchWeatherResults(params.query);

        setWeatherResults(response.data);
      } catch (e) {
        setErrorOccurred(true);
      }
    };

    getWeatherResults();
  }, [params]);

  if (errorOccured) {
    return <div>An error occured</div>;
  }

  if (weatherResults) {
    return (
      <>
        <WeatherDay dayWeather={weatherResults.daily[0]} />
        <WeatherDay dayWeather={weatherResults.daily[1]} />
        <WeatherDay dayWeather={weatherResults.daily[2]} />
        <WeatherDay dayWeather={weatherResults.daily[3]} />
        <WeatherDay dayWeather={weatherResults.daily[4]} />
      </>
    );
  }

  return <div>Fetching weather...</div>;
};

export default WeatherDisplay;

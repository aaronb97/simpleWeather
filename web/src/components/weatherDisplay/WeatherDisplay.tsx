import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { WeatherDay } from "../weatherDay/WeatherDay";

export const WeatherDisplay = () => {
  const query = useParams<any>();
  const [weatherResults, setWeatherResults] = useState<any>();

  console.log(query);

  useEffect(() => {
    const getWeatherResults = async () => {
      const weatherResults = await axios.get(
        `http://localhost:4000/q/${query.query}`
      );

      console.log(weatherResults.data);
      setWeatherResults(weatherResults.data);
    };

    getWeatherResults();
  }, [query]);

  if (weatherResults) {
    return (
      <>
        <WeatherDay dayWeather={weatherResults.daily[0]}></WeatherDay>
        <WeatherDay dayWeather={weatherResults.daily[1]}></WeatherDay>
        <WeatherDay dayWeather={weatherResults.daily[2]}></WeatherDay>
        <WeatherDay dayWeather={weatherResults.daily[3]}></WeatherDay>
        <WeatherDay dayWeather={weatherResults.daily[4]}></WeatherDay>
      </>
    );
  }

  return <div>Fetching weather...</div>;
};

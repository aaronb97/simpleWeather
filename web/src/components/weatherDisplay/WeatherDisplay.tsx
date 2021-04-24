import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { WeatherDay } from "../weatherDay/WeatherDay";
import { WeatherResponse } from "../../../../types/openWeatherResponse";
import { fetchWeatherResults } from "../../services/apiService";

export const WeatherDisplay = () => {
  const params = useParams<any>();
  const [weatherResults, setWeatherResults] = useState<WeatherResponse>();

  useEffect(() => {
    const getWeatherResults = async () => {
      const weatherResults = await fetchWeatherResults(params.query);

      setWeatherResults(weatherResults.data);
    };

    getWeatherResults();
  }, [params]);

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

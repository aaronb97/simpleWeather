import { Daily } from "../../../../types/openWeatherResponse";

interface WeatherDayProps {
  dayWeather: Daily;
}

export const WeatherDay = ({ dayWeather }: WeatherDayProps) => {
  return <div>{dayWeather.clouds}</div>;
};

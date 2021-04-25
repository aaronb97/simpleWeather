import { Daily } from '../../../../types/openWeatherResponse';

interface WeatherDayProps {
  dayWeather: Daily;
}

export const WeatherDay = ({ dayWeather }: WeatherDayProps) => (
  <div>
    <p>Min: {dayWeather.temp.min}</p>
    <p>Max: {dayWeather.temp.max}</p>
  </div>
);
export default WeatherDay;

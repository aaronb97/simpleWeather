import { Daily } from '../../../../types/openWeatherResponse';
import './weatherDay.css';

interface WeatherDayProps {
  dayWeather: Daily;
}

export const WeatherDay = ({ dayWeather }: WeatherDayProps) => (
  <div className="weatherDay">
    <p>Low: {dayWeather.temp.min}</p>
    <p>High: {dayWeather.temp.max}</p>
  </div>
);
export default WeatherDay;

import moment from 'moment';

import { Daily } from '../../../../types/openWeatherResponse';
import './weatherDay.css';

interface WeatherDayProps {
  dayWeather: Daily;
}

const toString = (temp: number) => {
  const num = (temp - 272.15) * (9 / 5) + 32;
  return `${num.toFixed(0)}°`;
};

export const WeatherDay = ({ dayWeather }: WeatherDayProps) => (
  <div className="weatherDay">
    <p>{moment.unix(dayWeather.dt).format('dddd')}</p>
    <p>{dayWeather.weather[0].description}</p>
    <p>
      Lo: {toString(dayWeather.temp.min)} | Hi: {toString(dayWeather.temp.max)}
    </p>
  </div>
);
export default WeatherDay;

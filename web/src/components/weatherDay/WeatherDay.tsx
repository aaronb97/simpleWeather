import moment from 'moment';

import { Daily } from '../../../../types/openWeatherResponse';
import './weatherDay.css';

interface WeatherDayProps {
  dayWeather: Daily;
}

export const WeatherDay = ({ dayWeather }: WeatherDayProps) => (
  <div className="weatherDay">
    <p>{moment.unix(dayWeather.dt).format('dddd')}</p>
    <p>
      Lo: {dayWeather.temp.min} | Hi: {dayWeather.temp.max}
    </p>
  </div>
);
export default WeatherDay;

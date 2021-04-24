import { Daily } from '../../../../types/openWeatherResponse';

interface WeatherDayProps {
  dayWeather: Daily;
}

export const WeatherDay = ({ dayWeather }: WeatherDayProps) => (
  <div>{dayWeather.clouds}</div>
);
export default WeatherDay;

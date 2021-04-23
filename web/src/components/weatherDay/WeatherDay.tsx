interface WeatherDayProps {
  dayWeather: {
    clouds: number;
  };
}

export const WeatherDay = ({ dayWeather }: WeatherDayProps) => {
  return <div>{dayWeather.clouds}</div>;
};

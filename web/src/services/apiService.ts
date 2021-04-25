import axios, { AxiosResponse } from 'axios';
import { WeatherResponse } from '../../../types/openWeatherResponse';

const fetchWeatherResults = async (
  queryString: string,
): Promise<AxiosResponse<WeatherResponse>> =>
  axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/q/${queryString}`);

export default fetchWeatherResults;

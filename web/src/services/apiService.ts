import axios, { AxiosResponse } from "axios";
import { WeatherResponse } from "../../../types/openWeatherResponse";

const fetchWeatherResults = async (
  queryString: string
): Promise<AxiosResponse<WeatherResponse>> =>
  axios.get(`http://localhost:3001/q/${queryString}`);

export default fetchWeatherResults;

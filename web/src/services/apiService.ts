import axios, { AxiosResponse } from "axios";
import { WeatherResponse } from "../../../types/openWeatherResponse";

export const fetchWeatherResults = async (
  queryString: string
): Promise<AxiosResponse<WeatherResponse>> => {
  return axios.get(`http://localhost:4000/q/${queryString}`);
};

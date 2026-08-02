import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

export async function getWeather(city) {

  const response = await axios.get(`${BASE_URL}/weather/${city}`);

  return response.data;

}

export async function getAIInsights(weatherData) {

  const response = await axios.post(`${BASE_URL}/ai`, weatherData);

  return response.data;

}
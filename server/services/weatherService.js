import axios from "axios";

export async function getWeather(city) {

  const API_KEY = process.env.OPENWEATHER_API_KEY;

  console.log("API Key:", API_KEY ? "Loaded ✅" : "Missing ❌");

  const response = await axios.get(

    "https://api.openweathermap.org/data/2.5/weather",

    {

      params: {

        q: city,

        appid: API_KEY,

        units: "metric",

      },

    }

  );

  return response.data;

}
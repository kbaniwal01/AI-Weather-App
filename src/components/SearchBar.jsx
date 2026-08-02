import { useState } from "react";

import { getWeather } from "./services/weatherApi";

function SearchBar({ setWeather }) {

  const [city, setCity] = useState("");

  const [error, setError] = useState("");

  async function handleSearch() {

    if (!city) {

      setError("Please enter a city name");

      return;

    }

    try {

      setError("");

      const weather = await getWeather(city);

      setWeather(weather);

    } catch (err) {

      console.log(err);

      if (err.response) {

        setError(

          err.response.data.message || "City not found"

        );

      } else {

        setError("Unable to fetch weather data");

      }

    }

  }

  return (

    <div>

      <div className="flex gap-3">

        <input

          value={city}

          onChange={(e) => setCity(e.target.value)}

          placeholder="Enter City"

          className="flex-1 rounded-xl p-4 text-white"

        />

        <button

          onClick={handleSearch}

          className="bg-blue-600 px-6 rounded-xl"

        >

          Search

        </button>

      </div>

      {error && (

        <div className="mt-4 bg-red-500/20 border border-red-500 text-red-200 p-3 rounded-xl">

          {error}

        </div>

      )}

    </div>

  );

}

export default SearchBar;
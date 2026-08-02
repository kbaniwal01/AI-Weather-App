import { useState } from "react";

import Navbar from "./components/Navbar";

import SearchBar from "./components/SearchBar";

import WeatherCard from "./components/WeatherCard";

import AQICard from "./components/AQICard";

import SunriseSunset from "./components/SunriseSunset";

import AIInsights from "./components/AIInsights";

function App() {

  const [weather, setWeather] = useState(null);

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-8">

        <SearchBar setWeather={setWeather} />

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <WeatherCard weather={weather} />

          <AQICard weather={weather} />

        </div>

        <div className="mt-6">

          <SunriseSunset weather={weather} />

        </div>

        <div className="mt-6">

          <AIInsights weather={weather} />

        </div>

      </div>

    </div>

  );

}

export default App;
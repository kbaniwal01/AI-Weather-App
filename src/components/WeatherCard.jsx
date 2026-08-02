function WeatherCard({ weather }) {

  if (!weather) {

    return (

      <div className="bg-slate-800 p-6 rounded-xl">

        Search a city to see weather

      </div>

    );

  }

  return (

    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">

      <h2 className="text-3xl font-bold">

        {weather.name}

      </h2>

      <p className="text-5xl font-semibold mt-4">

        {weather.main.temp}°C

      </p>

      <p className="capitalize mt-2">

        {weather.weather[0].description}

      </p>

      <div className="mt-4 space-y-2">

        <p>

          Feels like: {weather.main.feels_like}°C

        </p>

        <p>

          Humidity: {weather.main.humidity}%

        </p>

        <p>

          Wind: {weather.wind.speed} m/s

        </p>

      </div>

    </div>

  );

}

export default WeatherCard;
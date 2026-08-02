function AQICard() {

  return (

    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-5">

        🌫️ Air Quality Index

      </h2>

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-5xl font-bold text-yellow-400">

            87

          </h1>

          <p className="mt-2 text-lg">

            Moderate

          </p>

        </div>

        <div className="text-6xl">

          🌫️

        </div>

      </div>

      <div className="mt-6">

        <div className="w-full bg-gray-700 rounded-full h-3">

          <div

            className="bg-yellow-400 h-3 rounded-full"

            style={{ width: "45%" }}

          ></div>

        </div>

      </div>

      <p className="mt-4 text-gray-300">

        Sensitive individuals should reduce prolonged outdoor exertion.

      </p>

    </div>

  );

}

export default AQICard;
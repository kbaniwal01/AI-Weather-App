function SunriseSunset() {

  return (

    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-6">

        🌅 Sunrise & Sunset

      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-slate-800 rounded-xl p-5">

          <h3 className="text-yellow-300 text-lg font-semibold">

            🌅 Sunrise

          </h3>

          <p className="text-4xl mt-3 font-bold">

            6:01 AM

          </p>

        </div>

        <div className="bg-slate-800 rounded-xl p-5">

          <h3 className="text-orange-300 text-lg font-semibold">

            🌇 Sunset

          </h3>

          <p className="text-4xl mt-3 font-bold">

            7:12 PM

          </p>

        </div>

      </div>

    </div>

  );

}

export default SunriseSunset;
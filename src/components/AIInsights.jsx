function AIInsights() {

  return (

    <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold mb-6">

        🤖 AI Weather Insights

      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="bg-white/10 rounded-xl p-5">

          <h3 className="font-bold text-lg mb-3">

            🌤️ Weather Summary

          </h3>

          <p className="text-gray-100">

            Pleasant weather with partly cloudy skies. Temperature remains comfortable throughout the day.

          </p>

        </div>

        <div className="bg-white/10 rounded-xl p-5">

          <h3 className="font-bold text-lg mb-3">

            🚗 Travel Advice

          </h3>

          <p className="text-gray-100">

            Good conditions for travel. Carry water and sunglasses if driving during the afternoon.

          </p>

        </div>

        <div className="bg-white/10 rounded-xl p-5">

          <h3 className="font-bold text-lg mb-3">

            🏃 Outdoor Activity

          </h3>

          <p className="text-gray-100">

            Morning and evening are excellent for jogging, walking, cycling, or outdoor sports.

          </p>

        </div>

      </div>

    </div>

  );

}

export default AIInsights;

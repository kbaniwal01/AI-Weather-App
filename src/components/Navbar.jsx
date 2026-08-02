function Navbar() {

  return (

    <nav className="bg-slate-900/60 backdrop-blur-md border-b border-slate-700">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">

          🌦️ AI Weather Assistant

        </h1>

        <span className="text-sm text-gray-300">

          Powered by Gemini

        </span>

      </div>

    </nav>

  );

}

export default Navbar;
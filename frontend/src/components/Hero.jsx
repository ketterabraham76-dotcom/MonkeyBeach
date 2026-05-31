import { Link } from "react-router-dom";
import logo from "../assets/monkey-beach-logo.jpg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 min-h-[85vh] flex items-center">
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-6">
            🐒 Welcome to Monkey Beach
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-gray-900">Monkey</span>
            <br />
            <span className="text-yellow-600">Beach</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-semibold text-orange-600">
            Sports Bar & Guest House
          </p>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            Enjoy premium drinks, affordable accommodation, live sports,
            great music, and unforgettable moments in Paynesville, Liberia.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            
            <Link
              to="/drinks"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              🍺 View Drinks Menu
            </Link>

            <Link
              to="/rooms"
              className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all"
            >
              🛏️ Rooms & Rates
            </Link>

          </div>

          {/* STATS */}
          <div className="flex gap-10 mt-12">

            <div>
              <h3 className="text-3xl font-bold text-yellow-600">60+</h3>
              <p className="text-sm text-gray-500">Drink Options</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-600">3</h3>
              <p className="text-sm text-gray-500">Room Types</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-600">24/7</h3>
              <p className="text-sm text-gray-500">Open Daily</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - SMALL LOGO */}
        <div className="flex justify-center items-center">

          <div className="relative">

            {/* glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-30"></div>

            {/* logo card */}
            <div className="relative bg-white/80 backdrop-blur-sm p-5 rounded-3xl shadow-2xl">

              <img
                src={logo}
                alt="Monkey Beach Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-2xl shadow-md mx-auto"
              />

              <div className="text-center mt-3">
                <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                  Since 2024
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
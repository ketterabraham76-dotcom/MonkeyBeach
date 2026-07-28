import { Link } from "react-router-dom";
import logo from "../assets/monkey-beach-logo.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 flex items-center">

      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-24 md:py-32 grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold shadow-sm">
            🐒 Welcome to Monkey Beach
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
            <span className="text-slate-900">
              Monkey
            </span>

            <br />

            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Beach
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl md:text-3xl font-medium text-orange-500 tracking-wide">
            Sports Bar • Guest House • Beach Vibes
          </p>

          {/* Description */}
          <p className="mt-8 text-gray-600 text-lg md:text-xl leading-9 max-w-2xl">
            Experience premium drinks, comfortable accommodation,
            live sports, great music, and unforgettable moments in
            the heart of Paynesville, Liberia.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/drinks"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              🍺 View Drinks Menu
            </Link>

            <Link
              to="/rooms"
              className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white shadow-md transition-all duration-300"
            >
              🛏️ Rooms & Rates
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-14 max-w-xl">

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-orange-500">
                60+
              </h3>
              <p className="text-sm text-gray-500">
                Drink Options
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-orange-500">
                3
              </h3>
              <p className="text-sm text-gray-500">
                Room Types
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-orange-500">
                24/7
              </h3>
              <p className="text-sm text-gray-500">
                Open Daily
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center items-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-[120px] opacity-40 scale-150"></div>

            {/* Logo Card */}
            <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.15)]">

              <img
                src={logo}
                alt="Monkey Beach Logo"
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-3xl shadow-lg mx-auto"
              />

              <div className="text-center mt-5">
                <span className="inline-block text-sm font-semibold text-yellow-700 bg-yellow-100 px-4 py-2 rounded-full">
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
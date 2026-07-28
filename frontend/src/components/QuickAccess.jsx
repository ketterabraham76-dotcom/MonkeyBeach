import { Link } from "react-router-dom";

export default function QuickAccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full">

        <h1 className="text-3xl font-bold text-center mb-2">
          Monkey Beach
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Quick Order & Booking
        </p>

        <div className="space-y-4">

          <Link
            to="/drinks"
            className="block w-full text-center bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            🍺 View Drinks Menu
          </Link>

          <Link
            to="/rooms"
            className="block w-full text-center bg-yellow-500 text-white py-4 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            🛏️ Book a Room
          </Link>

          <Link
            to="/contact"
            className="block w-full text-center bg-gray-800 text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            💬 Contact Us
          </Link>

        </div>

      </div>
    </div>
  );
}
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBeer, FaBed, FaHome, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", icon: FaHome },
    { to: "/drinks", label: "Drinks", icon: FaBeer },
    { to: "/rooms", label: "Rooms", icon: FaBed },
    { to: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-md border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xl">🐒</span>
            </div>

            <div>
              <h1 className="text-yellow-600 font-bold text-lg tracking-tight">
                Monkey Beach
              </h1>
              <p className="text-xs text-gray-500 hidden md:block">
                Sports Bar & Guest House
              </p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-yellow-100 hover:text-yellow-600"
                  }`
                }
              >
                <Icon size={16} />
                {label}
              </NavLink>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:+918007691078"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaPhone size={14} />
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-yellow-600 transition text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 animate-fade-in">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-yellow-50 hover:text-yellow-600"
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}

            <a
              href="tel:+918007691078"
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg mt-2 font-medium hover:shadow-md transition"
            >
              <FaPhone size={18} />
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-yellow-50 border-t border-gray-200 py-14">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-md"></div>
              <span className="font-bold text-yellow-600 text-lg tracking-tight">
                Monkey Beach
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              Sports Bar & Guest House in the heart of Paynesville, Liberia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-500 hover:text-yellow-600 text-sm transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/drinks" className="text-gray-500 hover:text-yellow-600 text-sm transition">
                  Drinks Menu
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-500 hover:text-yellow-600 text-sm transition">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-yellow-600 text-sm transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>📍 ELWA Community, Paynesville</li>
              <li>📞 +918007691078</li>
              <li>✉️ dariusgoll9@gmail.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-yellow-100 hover:text-yellow-600 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-yellow-100 hover:text-yellow-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-yellow-100 hover:text-yellow-600 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-green-100 hover:text-green-600 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p className="hover:text-gray-500 transition">
            © {currentYear} Monkey Beach. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
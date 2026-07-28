import logo from "../assets/monkey-beach-logo.jpg";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <img
          src={logo}
          alt="Monkey Beach"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h1 className="font-bold text-lg">
              Monkey Beach
          </h1>

          <p className="text-sm text-gray-500">
               Sports Bar & Guest House
          </p>
        </div>
      </div>
    </header>
  );
}
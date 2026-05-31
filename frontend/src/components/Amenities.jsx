import { FaWifi, FaTv, FaCoffee, FaMusic, FaParking, FaSnowman } from "react-icons/fa";

const amenities = [
  { icon: FaWifi, label: "Free WiFi", color: "text-blue-500" },
  { icon: FaTv, label: "Big Screens", color: "text-red-500" },
  { icon: FaCoffee, label: "Coffee & Tea", color: "text-amber-600" },
  { icon: FaMusic, label: "Good Music", color: "text-purple-500" },
  { icon: FaParking, label: "Free Parking", color: "text-green-500" },
  { icon: FaSnowman, label: "Air Conditioning", color: "text-cyan-500" }
];

export default function Amenities() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
            Amenities
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
            Everything You Need
          </h3>
          <p className="text-gray-600 mt-2">For a comfortable and enjoyable stay</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
              <amenity.icon className={`text-4xl ${amenity.color} mx-auto mb-3`} />
              <p className="text-sm font-medium text-gray-700">{amenity.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
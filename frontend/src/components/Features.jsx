import { FaCocktail, FaBed, FaMusic } from "react-icons/fa";

const features = [
  {
    icon: FaCocktail,
    title: "Premium Drinks",
    description: "From ice-cold beers to signature cocktails, we've got your perfect drink.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: FaBed,
    title: "Comfort Stays",
    description: "Clean, comfortable rooms with modern amenities for a perfect night's rest.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: FaMusic,
    title: "Live Sports & Music",
    description: "Catch all the big games and enjoy great music with friends.",
    color: "from-yellow-500 to-orange-500"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800">
            Experience the <span className="text-yellow-600">Vibe</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition hover:-translate-y-2">
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
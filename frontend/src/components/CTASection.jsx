import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-12 text-center text-white shadow-2xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to have fun? 🎉
        </h3>
        <p className="text-lg mb-6 opacity-95">
          Book your table or room now and get a welcome drink on us!
        </p>
        <Link to="/contact" className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition">
          Book Now →
        </Link>
      </div>
    </section>
  );
}
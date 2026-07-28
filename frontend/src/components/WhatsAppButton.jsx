import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+918007691078";
  const message = "Hello! I'm interested in Monkey Beach services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition"></div>
        <div className="relative bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300">
          <FaWhatsapp size={28} className="text-white" />
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Chat with us 💬
        </span>
      </div>
    </a>
  );
}
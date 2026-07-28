import { sendWhatsAppMessage } from "../utils/whatsapp";

export default function Contact() {

  const handleMessage = () => {
    sendWhatsAppMessage(`
Hello Monkey Beach 👋

I would like to get more information about rooms and services.
    `);
  };

  return (
    <div className="page">

      {/* HEADER */}
      <section className="section">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">
          We are available 24/7 — reach us anytime
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="container grid grid-2">

        <div className="card p-6">
          <h2 className="font-bold text-xl mb-2">📍 Location</h2>
          <p>Paynesville, Liberia</p>
        </div>

        <div className="card p-6">
          <h2 className="font-bold text-xl mb-2">📞 Phone</h2>
          <p>+918007691078</p>
        </div>

        <div className="card p-6">
          <h2 className="font-bold text-xl mb-2">📧 Email</h2>
          <p>dariusgoll9@gmail.com</p>
        </div>

        <div className="card p-6">
          <h2 className="font-bold text-xl mb-2">💬 WhatsApp</h2>
          <button onClick={handleMessage} className="btn btn-primary mt-3">
            Send Message
          </button>
        </div>

      </section>

    </div>
  );
}
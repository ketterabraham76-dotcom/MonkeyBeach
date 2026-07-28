import { sendWhatsAppMessage } from "../utils/whatsapp";

export default function DrinksCard({ drink }) {

  const handleOrder = () => {
    sendWhatsAppMessage(`
🍺 Drink Order - Monkey Beach

Drink: ${drink.name}
Price: $${drink.price}

Please confirm availability.
    `);
  };

  return (
    <div className="card">

      <div className="card-body">
        <h3 className="font-bold text-lg">{drink.name}</h3>

        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-600 font-bold">
            ${drink.price}
          </span>

          <button onClick={handleOrder} className="btn btn-primary">
            Order
          </button>
        </div>
      </div>

    </div>
  );
}
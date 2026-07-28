import { sendWhatsAppMessage } from "../utils/whatsapp";

export default function RoomCard({ room }) {

  const handleBook = () => {
    const message = `
🏨 Room Booking Request

Room: ${room.name}
Price: $${room.price}/night

Hello, I want to book this room.
Please confirm availability.
    `;

    sendWhatsAppMessage(message);
  };

  return (
    <div className="card">

      <img src={room.image} alt={room.name} />

      <div className="card-body">
        <h3 className="font-bold text-lg">{room.name}</h3>

        <p className="text-gray-500 text-sm">{room.description}</p>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-yellow-600 font-bold">
            ${room.price}/night
          </span>

          <button onClick={handleBook} className="btn btn-primary">
            Book Now
          </button>
        </div>
      </div>

    </div>
  );
}
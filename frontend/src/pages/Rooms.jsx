import { rooms } from "../data/rooms";
import RoomCard from "../components/RoomCard";

export default function Rooms() {
  return (
    <div className="page">

      <section className="section">
        <h1 className="section-title">Our Rooms</h1>
      </section>

      <section className="container grid grid-3">

        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}

      </section>

    </div>
  );
}
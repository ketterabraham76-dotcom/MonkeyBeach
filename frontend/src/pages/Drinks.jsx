import { drinks } from "../data/drinks";
import DrinksCard from "../components/DrinksCard";

export default function Drinks() {
  return (
    <div className="page">

      {/* HEADER */}
      <section className="section">
        <h1 className="section-title">Drinks Menu</h1>
        <p className="section-subtitle">
          Premium drinks available at Monkey Beach
        </p>
      </section>

      {/* MENU GRID */}
      <section className="container grid grid-3">

        {drinks.map((drink) => (
          <DrinksCard key={drink.id} drink={drink} />
        ))}

      </section>

    </div>
  );
}
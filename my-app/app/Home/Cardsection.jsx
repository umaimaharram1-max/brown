"use client";
import { FaCoffee, FaMugHot, FaHeart, FaStar } from "react-icons/fa";
import { GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";

const cards = [
  { id: 1, quote: "Coffee is a hug in a mug.", color: "bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300", icon: <FaCoffee /> },
  { id: 2, quote: "Life happens, coffee helps.", color: "bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300" }, // no icon
  { id: 3, quote: "Coffee — because adulting is hard.", color: "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300", icon: <FaMugHot /> },
  { id: 4, quote: "Espresso yourself!", color: "bg-gradient-to-r from-lime-300 via-lime-400 to-lime-300" }, // no icon
  { id: 5, quote: "Stay grounded, drink coffee.", color: "bg-gradient-to-r from-teal-300 via-teal-400 to-teal-300", icon: <FaHeart /> },
  { id: 6, quote: "All you need is love and coffee.", color: "bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300" }, // no icon
  { id: 7, quote: "Better latte than never.", color: "bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300", icon: <GiCoffeeCup /> },
  { id: 8, quote: "Keep calm and drink coffee.", color: "bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-300" }, // no icon
  { id: 9, quote: "Life's too short for bad coffee.", color: "bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300", icon: <GiCoffeeBeans /> },
  { id: 10, quote: "First I drink coffee, then I do things.", color: "bg-gradient-to-r from-fuchsia-300 via-fuchsia-400 to-fuchsia-300" }, // no icon
];

export default function Home() {
  return (
    <main className="px-8 py-12 bg-[#360202ea] min-h-screen">

      {/* Heading */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-400 mb-4">A1 Coffee Quotes</h2>
        <p className="text-lg text-gray-100">
          Enjoy your favorite coffee quotes in aesthetic cards with selective icons!
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative ${card.color} 
                        rounded-xl p-6 flex flex-col items-center justify-center text-center
                        shadow-md transition transform duration-500
                        hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.6)]
                        hover:border-4 hover:border-white`}
          >
            {card.icon && <div className="text-4xl mb-4 text-white">{card.icon}</div>}
            <p className="text-gray-900 font-semibold text-lg">
              "{card.quote}"
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

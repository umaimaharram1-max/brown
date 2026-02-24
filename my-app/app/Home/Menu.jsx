
"use client";
import Image from "next/image";
import { GiCoffeeCup } from "react-icons/gi";

export default function Menu() {
  const coffees = [
    { name: "Latte", img: "/cofee4.jpg", hoverColor: "#FBBF24" },       // Yellow
    { name: "Hot Coffee", img: "/cofee3.jpg", hoverColor: "#F97316" },   // Orange
    { name: "White Coffee", img: "/cofee5.jpg", hoverColor: "#34D399" }, // Green
  ];

  return (
    <section className="py-32 px-6 md:px-16 
                        bg-orange-900">

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold 
                       bg-linear-to-r from-[#fff8e1] to-[#c8a97e] 
                       bg-clip-text text-transparent mb-4">
          Our Special Coffees
        </h2>
        <p className="text-[#f5e6dc] text-lg md:text-xl">
          Premium coffees brewed to perfection ☕
        </p>
      </div>

      {/* Coffee Cards */}
      <div className="grid md:grid-cols-3 gap-12">

        {coffees.map((coffee, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden shadow-2xl
                       transition-transform duration-500 transform hover:-translate-y-3
                       flex flex-col h-full"
            style={{
              animation: `fadeUp 0.8s ease forwards`,
              animationDelay: `${index * 0.3}s`,
              opacity: 0
            }}
          >

            {/* Image */}
            <div className="overflow-hidden rounded-t-3xl shrink-0">
              <Image
                src={coffee.img}
                width={400}
                height={300}
                alt={coffee.name}
                className="w-full h-64 object-cover 
                           group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center bg-white flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-center mb-2 text-3xl text-gray-800">
                  <GiCoffeeCup />
                </div>
                <h3 className="text-2xl font-bold mb-1">{coffee.name}</h3>
                <p className="text-gray-600 text-sm">
                  Delicious & creamy premium taste.
                </p>
              </div>

              <button className={`mt-4 px-6 py-2 rounded-full 
                                 font-semibold text-white
                                 bg-[${coffee.hoverColor}] 
                                 hover:brightness-110 transition duration-300`}>
                Order Now
              </button>
            </div>

            {/* Colorful Hover Glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none
                         opacity-0 group-hover:opacity-100
                         transition duration-500"
              style={{
                boxShadow: `0 0 40px 15px ${coffee.hoverColor}`,
              }}
            ></div>

          </div>
        ))}

      </div>

      {/* FadeUp Animation */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}

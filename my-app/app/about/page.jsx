"use client";
import { FaCoffee, FaLeaf, FaHeart, FaStar, FaMugHot } from "react-icons/fa";

export default function About() {
  const sections = [
    {
      title: "About Our Coffee",
      icon: <FaCoffee />,
      text: "At CoffeeTime, we believe coffee is more than just a drink — it’s an experience. Every cup is crafted with precision, passion, and premium handpicked beans sourced from trusted farms. We focus on delivering rich aroma, smooth texture, and unforgettable flavor in every sip.",
    },
    {
      title: "Our Story",
      icon: <FaLeaf />,
      text: "Founded in 2020, CoffeeTime began with a simple dream — to create a space where people can relax, connect, and enjoy world-class coffee. What started as a small vision has grown into a beloved brand built on dedication, quality, and customer happiness.",
    },
    {
      title: "Our Beans",
      icon: <FaHeart />,
      text: "We carefully select beans from top coffee-growing regions across the globe. Each batch is ethically sourced and freshly roasted to maintain authenticity and depth of flavor. Quality control is our highest priority — because you deserve the best.",
    },
    {
      title: "Brewing Perfection",
      icon: <FaStar />,
      text: "Our skilled baristas are trained to perfect every brewing method — from espresso to pour-over. We maintain the perfect balance of temperature, timing, and technique to ensure every cup delivers excellence.",
    },
    {
      title: "Join Our Coffee Journey",
      icon: <FaMugHot />,
      text: "Whether you're a casual coffee lover or a true caffeine enthusiast, CoffeeTime welcomes you. Visit our cafes, experience the ambiance, and become part of our growing coffee family.",
    },
  ];

  return (
    <main className="bg-[#0f172a] text-white px-6 md:px-20 py-20 space-y-24">

      {/* Page Heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold 
                       bg-gradient-to-r from-teal-400 via-amber-300 to-rose-400 
                       bg-clip-text text-transparent">
          About CoffeeTime
        </h1>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Discover our passion, our story, and the craft behind every perfect cup.
        </p>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className="group relative max-w-5xl mx-auto p-10 rounded-3xl 
                     bg-gradient-to-br from-[#1e293b] to-[#111827]
                     shadow-2xl transition-all duration-500
                     hover:scale-105 hover:shadow-[0_0_40px_rgba(45,212,191,0.6)]
                     border border-gray-700 hover:border-teal-400"
        >

          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl text-teal-400 
                            transition duration-500
                            group-hover:text-amber-300
                            group-hover:rotate-12">
              {section.icon}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold 
                           transition duration-500
                           group-hover:text-teal-300">
              {section.title}
            </h2>
          </div>

          {/* Text */}
          <p className="text-gray-300 text-lg leading-relaxed 
                        transition duration-500
                        group-hover:text-gray-100">
            {section.text}
          </p>

          {/* Decorative Glow Effect */}
          <div className="absolute inset-0 rounded-3xl 
                          opacity-0 group-hover:opacity-100
                          transition duration-500
                          bg-linear-to-r from-teal-500/10 via-transparent to-amber-400/10">
          </div>

        </section>
      ))}

    </main>
  );
}

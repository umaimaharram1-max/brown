"use client";
import Image from "next/image";

export default function Branches() {
  const branches = [
    { city: "Lahore", img: "/lahore6.jpg" },
    { city: "Karachi", img: "/karachi7.jpg" },
    { city: "Islamabad", img: "/islamabad8.jpg" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center
                        px-6 md:px-16 py-16 
                        bg-linear-to-br from-[#3e2723] via-[#5d4037] to-[#d7ccc8]">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold 
                       bg-linear-to-r from-[#fff8e1] to-[#c8a97e] 
                       bg-clip-text text-transparent mb-4">
          Visit Our Branches
        </h2>
        <p className="text-[#f5e6dc] text-lg md:text-xl">
          Experience the finest coffee across Pakistan ☕
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full">

        {branches.map((branch, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl 
                       shadow-2xl cursor-pointer bg-[#4e342e]
                       transition-all duration-500 hover:scale-105"
          >

            {/* Image */}
            <div className="overflow-hidden rounded-t-3xl">
              <Image
                src={branch.img}
                width={500}
                height={350}
                alt={branch.city}
                className="w-full h-72 object-cover 
                           transition-transform duration-500
                           group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 
                            flex flex-col items-center justify-center
                            opacity-0 group-hover:opacity-100
                            transition duration-500 rounded-3xl">
              <h3 className="text-white text-3xl font-bold mb-2">
                {branch.city}
              </h3>
              <p className="text-[#f5e6dc] text-sm md:text-base">
                Visit our cafe and enjoy fresh coffee
              </p>
            </div>

            {/* Hover Glow Border */}
            <div className="absolute inset-0 rounded-3xl
                            border-4 border-transparent
                            group-hover:border-[#c8a97e]
                            group-hover:shadow-[0_0_35px_#c8a97e]
                            transition duration-500">
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

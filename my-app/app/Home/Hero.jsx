"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-center"
      style={{
        backgroundImage: "url('/coffee-bean.png')", // image public folder me ho
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl text-white space-y-6 animate-fadeIn">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Enjoy Your Perfect Coffee Moment
          </h1>

          {/* Paragraph with Advanced Hover Effects */}
          <p className="
            text-lg md:text-xl text-orange-300
            transition-all duration-500 ease-in-out
            hover:scale-105
            hover:text-orange-400
            hover:tracking-wider
            hover:-translate-y-1
            hover:drop-shadow-[0_0_15px_rgba(255,140,0,0.8)]
            cursor-pointer
          ">
            Discover rich flavors, premium beans, and a cozy atmosphere crafted 
            to make every sip unforgettable. Your perfect cup is waiting.
          </p>

          {/* CTA Button */}
          <button className="
            px-8 py-3 rounded-full
            bg-orange-900 text-white text-lg font-semibold
            transition-all duration-300 ease-in-out
            hover:bg-orange-500
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(255,140,0,0.8)]
          ">
            
<Link href="/order">
  <button>Order Now</button>
</Link>


          </button>

        </div>
      </div>


    </section>
  );
}

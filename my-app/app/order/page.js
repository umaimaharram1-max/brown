"use client";
import { useState } from "react";

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-linear-to-br from-[#2c1810] via-[#5a2d0c] to-[#1a0f07]
                    px-4">

      <div className="bg-white/10 backdrop-blur-lg 
                      border border-white/20
                      shadow-2xl 
                      rounded-2xl 
                      p-10 
                      w-full 
                      max-w-md">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          ☕ Place Your Order
        </h1>

        <p className="text-center text-gray-200 mb-6">
          Freshly brewed happiness is just one click away!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="p-3 w-full rounded-lg bg-white text-black 
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="p-3 w-full rounded-lg bg-white text-black 
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <input
            name="product"
            placeholder="Coffee Type (Latte, Cappuccino...)"
            onChange={handleChange}
            className="p-3 w-full rounded-lg bg-white text-black 
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            min="1"
            onChange={handleChange}
            className="p-3 w-full rounded-lg bg-white text-black 
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 
                       text-white font-semibold 
                       py-3 rounded-lg 
                       transition duration-300 
                       transform hover:scale-105 shadow-lg"
          >
            Order Now ☕
          </button>

        </form>
      </div>
    </div>
  );
}

"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function findus() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 md:px-16 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold 
                       text-center mb-16
                       bg-gradient-to-r from-teal-400 via-amber-300 to-rose-400
                       bg-clip-text text-transparent">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info Side */}
          <div className="space-y-8">

            <div className="p-6 rounded-2xl bg-[#1e293b] 
                            shadow-xl hover:shadow-teal-400/40
                            transition duration-500 hover:scale-105">
              <div className="flex items-center gap-4 text-teal-400 text-xl font-semibold">
                <FaPhone />
                <span>Phone</span>
              </div>
              <p className="text-gray-300 mt-2">+92 300 1234567</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1e293b] 
                            shadow-xl hover:shadow-teal-400/40
                            transition duration-500 hover:scale-105">
              <div className="flex items-center gap-4 text-teal-400 text-xl font-semibold">
                <FaEnvelope />
                <span>Email</span>
              </div>
              <p className="text-gray-300 mt-2">support@coffeetime.com</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1e293b] 
                            shadow-xl hover:shadow-teal-400/40
                            transition duration-500 hover:scale-105">
              <div className="flex items-center gap-4 text-teal-400 text-xl font-semibold">
                <FaMapMarkerAlt />
                <span>Location</span>
              </div>
              <p className="text-gray-300 mt-2">
                Main Boulevard, Gulberg, Lahore, Pakistan
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1e293b] 
                            shadow-xl hover:shadow-teal-400/40
                            transition duration-500 hover:scale-105">
              <div className="flex items-center gap-4 text-teal-400 text-xl font-semibold">
                <FaClock />
                <span>Working Hours</span>
              </div>
              <p className="text-gray-300 mt-2">
                Mon - Sun: 9:00 AM – 11:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form Side */}
          <form className="bg-[#1e293b] p-10 rounded-3xl shadow-2xl 
                           space-y-6 border border-gray-700
                           hover:border-teal-400 transition duration-500">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-800 text-white 
                         focus:outline-none focus:ring-2 focus:ring-teal-400
                         transition duration-300"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-800 text-white 
                         focus:outline-none focus:ring-2 focus:ring-teal-400
                         transition duration-300"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-gray-800 text-white 
                         focus:outline-none focus:ring-2 focus:ring-teal-400
                         transition duration-300"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-semibold
                         bg-gradient-to-r from-teal-400 to-amber-300
                         text-black transition duration-500
                         hover:scale-105 hover:shadow-[0_0_25px_rgba(45,212,191,0.6)]">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

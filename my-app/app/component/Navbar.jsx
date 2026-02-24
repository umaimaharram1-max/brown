"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCoffee } from "react-icons/fa"; // Coffee icon

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-orange-900 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <FaCoffee className="text-2xl " />
          <h1 className="text-2xl font-bold text-orange-300 tracking-wide">
            Coffee
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-orange-300 font-medium">
          <Link href="/" className="hover:text-yellow-300 transition duration-300">
            HOME
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition duration-300">
            ABOUT
          </Link>
          <Link href="/findus" className="hover:text-yellow-300 transition duration-300">
            FINDUS
          </Link>
          <Link href="/faqs" className="hover:text-yellow-600 transition duration-300">
            FAQs
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col space-y-4 mt-4 md:hidden">
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
          <Link href="/findus" className="hover:text-yellow-300 transition">
            Find Us
          </Link>
          <Link href="/faqs" className="hover:text-yellow-300 transition">
            FAQs
          </Link>
        </div>
      )}
    </nav>
  );
}

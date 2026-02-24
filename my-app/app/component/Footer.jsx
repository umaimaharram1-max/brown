"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-14 pb-8">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo & Description */}
        <div>
          <h1 className="text-3xl font-bold text-teal-400 mb-4">
            CoffeeTime
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Savor the finest coffee moments and enjoy your daily dose of 
            caffeine crafted with passion and perfection.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Quick Links
          </h2>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-teal-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-400 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-teal-400 transition duration-300">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-400 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Follow Us
          </h2>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-teal-400 transition duration-300 hover:scale-110 transform">
              Facebook
            </a>
            <a href="#" className="hover:text-teal-400 transition duration-300 hover:scale-110 transform">
              Instagram
            </a>
            <a href="#" className="hover:text-teal-400 transition duration-300 hover:scale-110 transform">
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CoffeeTime. All rights reserved.
      </div>

    </footer>
  );
}

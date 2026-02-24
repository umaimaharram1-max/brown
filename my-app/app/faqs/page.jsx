"use client";
import { useState } from "react";

export default function FAQs() {
  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We are open from 8:00 AM to 10:00 PM, Monday to Sunday.",
    },
    {
      question: "Do you offer home delivery?",
      answer: "Yes, we offer home delivery within the city limits.",
    },
    {
      question: "Can I book a table in advance?",
      answer: "Yes, you can book a table by contacting us through our website.",
    },
    {
      question: "Do you offer vegan options?",
      answer: "Absolutely! We have a variety of vegan-friendly drinks and snacks.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-teal-400">
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-6 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 flex justify-between items-center"
            >
              <span className="font-medium">{faq.question}</span>

              {/* Icon with rotation */}
              <span
                className={`text-xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-45 text-teal-400" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* Smooth Expand Animation */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6 py-4 bg-[#0f172a] text-gray-300">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

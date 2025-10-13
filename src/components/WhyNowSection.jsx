"use client";

import React from "react";
import { FaRegClock, FaLaptopCode, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const shifts = [
  {
    icon: <FaRegClock className="text-green-600 w-8 h-8" />,
    title: "Regulatory Maturity",
    description:
      "India's labour codes are consolidating. What was fragmented across 40+ acts is becoming structured and codifiable.",
  },
  {
    icon: <FaLaptopCode className="text-green-600 w-8 h-8" />,
    title: "Digital Government",
    description:
      "EPFO, ESIC, and state labour departments are digitized. Forms are online. Filings are electronic. Integration is possible.",
  },
  {
    icon: <FaChartLine className="text-green-600 w-8 h-8" />,
    title: "Economic Necessity",
    description:
      "India is scaling to $10 trillion. Millions more formal enterprises need compliance infrastructure that can scale automatically.",
  },
];

const WhyNowSection = () => {
  return (
    <section className="relative z-0 bg-[#f9f3e9] py-24 px-5 lg:px-20 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Now
        </motion.h2>
        <motion.p
          className="text-lg lg:text-xl text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Three structural shifts make this inevitable. The window is open. We're building the foundation now.
        </motion.p>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Timeline Vertical Line for larger screens */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-200 -translate-x-1/2"></div>

          {shifts.map((shift, idx) => (
            <motion.div
              key={idx}
              className="relative md:flex md:flex-col md:items-center text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Circle on timeline */}
              <div className="absolute md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-green-600 rounded-full top-0 mt-2"></div>

              {/* Icon & Content */}
              <div className="bg-gray-50 rounded-2xl shadow-lg p-6 mt-6 md:mt-12 hover:scale-105 transition-transform">
                {shift.icon}
                <h3 className="mt-4 text-xl font-bold">{shift.title}</h3>
                <p className="mt-2 text-gray-600">{shift.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;

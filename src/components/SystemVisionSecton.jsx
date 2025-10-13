"use client";

import React from "react";
import { FaRegLightbulb, FaRegClock, FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const visionPoints = [
  {
    icon: <FaRegLightbulb className="text-green-600 w-8 h-8" />,
    title: "Compliance Becomes Infrastructure",
    description:
      "Invisible, automatic, perfect. Founders stop losing sleep over labour law.",
  },
  {
    icon: <FaRegFileAlt className="text-green-600 w-8 h-8" />,
    title: "Seamless Operations",
    description:
      "CFOs stop paying ₹2 lakh/month to consultants. HR teams no longer drown in government forms.",
  },
  {
    icon: <FaRegClock className="text-green-600 w-8 h-8" />,
    title: "Reliable, Timely Filings",
    description:
      "Workers' benefits are deposited correctly, always. Regulators receive filings before deadlines.",
  },
];

const SystemVisionSection = () => {
  return (
    <section className="relative z-0 bg-[#f9f3e9] py-24 px-5 lg:px-20 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The System We’re Building Toward
        </motion.h2>
        <motion.p
          className="text-lg lg:text-xl text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          In five years, every company employing people in India operates on Workforce. Not chaos managed slightly better, but structured, reliable, infrastructure-scale compliance.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visionPoints.map((point, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {point.icon}
              <h3 className="mt-4 text-xl font-bold">{point.title}</h3>
              <p className="mt-2 text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 text-lg lg:text-xl font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Structure. Order. Infrastructure. This is the foundation India scales on.
        </motion.p>
      </div>
    </section>
  );
};

export default SystemVisionSection;

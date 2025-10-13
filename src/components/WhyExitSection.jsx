"use client";

import React from "react";
import { FaBolt, FaShieldAlt, FaRegFileAlt, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";

const points = [
  {
    icon: <FaBolt className="text-green-600 w-8 h-8" />,
    title: "Scale Without Friction",
    description: "Companies scale without compliance friction.",
  },
  {
    icon: <FaShieldAlt className="text-green-600 w-8 h-8" />,
    title: "Protect Workers",
    description: "Workers' statutory benefits are protected by design.",
  },
  {
    icon: <FaRegFileAlt className="text-green-600 w-8 h-8" />,
    title: "Perfect Filings",
    description: "Regulators receive perfect filings before deadlines.",
  },
  {
    icon: <FaMoneyBillWave className="text-green-600 w-8 h-8" />,
    title: "Capital Moves Faster",
    description: "Legal risk is removed, enabling smoother capital flow.",
  },
];

const WhyExistSection = () => {
  return (
    <section className="relative z-0 bg-[#f9f3e9] py-24 px-5 lg:px-20 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why This Must Exist
        </motion.h2>
        <motion.p
          className="text-lg lg:text-xl text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Every modern economy runs on invisible infrastructure. Electricity. Internet. Payments. These systems work because companies don't manage them—they operate on them. Employment law compliance should work the same way.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map((point, idx) => (
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
          This infrastructure doesn't exist in India. That's what we're building.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyExistSection;

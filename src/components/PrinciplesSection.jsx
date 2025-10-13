"use client";

import React from "react";
import { FaGavel, FaCogs, FaCheckCircle, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const principles = [
  {
    icon: <FaGavel className="text-green-600 w-8 h-8" />,
    title: "Execution, Not Consultation",
    description:
      "We don't advise on compliance. We execute it. Every filing, every deadline, every obligation is handled fully.",
  },
  {
    icon: <FaCogs className="text-green-600 w-8 h-8" />,
    title: "Infrastructure Thinking",
    description:
      "We build for decades, not quarters. For millions of companies, not hundreds of pilots. Civilization-scale thinking.",
  },
  {
    icon: <FaCheckCircle className="text-green-600 w-8 h-8" />,
    title: "Perfect Legality",
    description:
      "We execute the law as written—perfectly and consistently. Companies on Workforce are the most compliant by design.",
  },
  {
    icon: <FaEye className="text-green-600 w-8 h-8" />,
    title: "Verifiable Trust",
    description:
      "Every filing is timestamped, documented, and traceable. Trust is built through transparency, not opacity.",
  },
];

const PrinciplesSection = () => {
  return (
    <section className="relative z-0 bg-[#f9f3e9] py-24 px-5 lg:px-20 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Principles
        </motion.h2>
        <motion.p
          className="text-lg lg:text-xl text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          The foundational mindset guiding every decision, every line of code, and every action at Workforce.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {principle.icon}
              <h3 className="mt-4 text-xl font-bold">{principle.title}</h3>
              <p className="mt-2 text-gray-600">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;

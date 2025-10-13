"use client";

import React from "react";
import { FaUsers, FaBuilding, FaNewspaper } from "react-icons/fa";
import { motion } from "framer-motion";

const audience = [
  {
    icon: <FaUsers className="text-green-600 w-8 h-8" />,
    title: "For Investors",
    description:
      "We're building the regulated backbone of India's growth story—systems that every enterprise will operate on. Fund infrastructure that matters at civilizational scale.",
    cta: "View Investment Deck",
    href: "#",
  },
  {
    icon: <FaBuilding className="text-green-600 w-8 h-8" />,
    title: "For Builders",
    description:
      "We're hiring engineers who think in systems, operators who execute flawlessly, and domain experts who understand regulatory complexity at depth.",
    cta: "Explore Open Roles",
    href: "#",
  },
  {
    icon: <FaNewspaper className="text-green-600 w-8 h-8" />,
    title: "For Media",
    description:
      "If you cover infrastructure, regulatory technology, or India's institutional evolution, we're building something that matters.",
    cta: "Access Press Kit",
    href: "#",
  },
];

const WorkWithUsSection = () => {
  return (
    <section className="relative z-0 bg-[#f9f3e9] py-24 px-5 lg:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work With Us
        </motion.h2>
        <motion.p
          className="text-lg lg:text-xl text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Join us in building India's employment law infrastructure—whether as an investor, builder, or media partner.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {audience.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <a
                href={item.href}
                className="mt-4 inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                {item.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;

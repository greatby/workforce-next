"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const founder = {
  name: "[Founder Name]",
  role: "Founder & CEO",
  bio: [
    "[Founder Name] has spent X years in labour law compliance and regulatory operations, working across dozens of factories and hundreds of companies, witnessing the systemic failure of execution-first compliance.",
    "At [Previous Company/Role], [Founder Name] built compliance systems for X factories, managed labour law for Y employees, and realized that no one was actually executing the law.",
    "Started Workforce to build execution infrastructure—India cannot scale to $10 trillion on consultants and Excel sheets. That's what [Founder Name] is building.",
  ],
  imageUrl: "/images/founder.jpg",
  linkedin: "https://linkedin.com/in/founderprofile",
};

const FounderSection = () => {
  return (
    <section className="relative z-0 bg-[#f9f3e9] py-24 px-5 lg:px-20 text-gray-900">
      <div className="max-w-5xl mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center gap-10">
        {/* Founder Image */}
        <motion.div
          className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={founder.imageUrl}
            alt={founder.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Founder Info */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold mb-2">{founder.name}</h2>
          <h3 className="text-lg text-green-600 font-semibold mb-6">{founder.role}</h3>
          {founder.bio.map((paragraph, idx) => (
            <p key={idx} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}

          <a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline mt-4"
          >
            <FaLinkedin /> View LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;

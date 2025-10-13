"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaCode, FaUniversity } from "react-icons/fa";

const BuildingSection = () => {
  const pillars = [
    {
      icon: <FaDatabase className="h-8 w-8 text-yellow-400" />,
      title: "The Regulatory Knowledge Problem",
      description:
        "We're mapping India's entire employment law framework—every act, every amendment, every state variation, every circular—into structured, executable intelligence.",
      points: [
        "100+ central and state employment acts",
        "36 state-specific variations and procedures",
        "5,000+ forms across authorities",
        "Real-time amendments and circulars",
        "Authority-specific filing requirements",
      ],
      highlight:
        "This regulatory graph is the foundation. Everything else builds on it.",
    },
    {
      icon: <FaCode className="h-8 w-8 text-yellow-400" />,
      title: "The Execution System",
      description:
        "We’ve rebuilt compliance operations as code — not workflow software, but actual execution infrastructure.",
      points: [
        "Contribution calculations that account for state variations",
        "Multi-state challan generation and payment tracking",
        "Deadline monitoring synchronized across authorities",
        "Return filing with automatic reconciliation",
        "Certificate and audit trail management",
      ],
      highlight: "This isn’t automation of your work. This is us doing the work.",
    },
    {
      icon: <FaUniversity className="h-8 w-8 text-yellow-400" />,
      title: "The Authority Integration Layer",
      description:
        "The hardest part isn’t technical — it’s institutional. We’re building relationships and integration points with India’s regulatory network.",
      points: [
        "EPFO regional offices across 36 states",
        "ESIC branch offices and dispensaries",
        "State labour departments and commissioners",
        "Factory inspectorates and registrars",
        "Municipal corporations for S&E registrations",
      ],
      highlight:
        "This is the moat. These relationships take years to build and cannot be replicated through software alone.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            How We’re Building This
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Building employment law infrastructure requires solving problems most software companies don’t touch.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col rounded-xl border border-gray-100 bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-5">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {pillar.description}
              </p>
              <ul className="space-y-2 list-disc pl-5 text-gray-700 text-sm">
                {pillar.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="mt-5 font-medium text-yellow-700 italic">
                “{pillar.highlight}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingSection;

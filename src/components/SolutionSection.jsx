"use client";

import React from "react";
import { motion } from "framer-motion";

const SolutionSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0c0c0c] via-[#111] to-[#0c0c0c] py-24 text-gray-100">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Our Solution: Compliance as Infrastructure
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Workforce is the execution layer for India’s employment law.
          </p>
        </motion.div>

        {/* Core Narrative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 mx-auto max-w-4xl text-left space-y-6 text-gray-300 text-lg leading-relaxed"
        >
          <p>
            We don’t give companies tools to manage compliance.{" "}
            <strong className="text-white">We execute compliance for them</strong> —
            automatically, across every state, for every act, without human
            intervention.
          </p>

          <p className="text-gray-400">
            <strong className="text-yellow-400">What this means in practice:</strong>
          </p>

          <ul className="space-y-3 border-l border-gray-700 pl-5">
            <li>
              When a company hires employees, Workforce registers them with EPF,
              ESIC, and all applicable authorities.
            </li>
            <li>
              Every month, we calculate statutory contributions, generate challans,
              file returns, and track receipts — before deadlines, without human
              input.
            </li>
            <li>
              When companies expand to new states, we handle state-specific
              registrations and variations invisibly.
            </li>
            <li>
              When they close a unit, we execute clean exits across all acts in 30
              days.
            </li>
          </ul>

          <p className="text-gray-300">
            <strong className="text-white">The company operates.</strong>{" "}
            <span className="text-yellow-400">We execute the law.</span>
          </p>

          <div className="rounded-lg bg-[#1a1a1a] p-6 border border-gray-800">
            <p className="text-gray-200 text-lg">
              This is compliance as infrastructure: predictable, automatic,
              invisible. Like electricity or payments —{" "}
              <span className="text-yellow-400">you don’t manage it, you operate on it.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;

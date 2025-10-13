"use client";

import React from "react";
import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            The Problem Is Execution
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Regulation is not the bottleneck. Execution is.
          </p>
        </motion.div>

        {/* Core Narrative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl text-gray-700 space-y-6 text-lg leading-relaxed"
        >
          <p>
            India’s employment law framework is complex by design—it governs
            safety, wages, welfare, and workplace rights for{" "}
            <strong>63 million formal workers</strong>. The problem isn’t that
            these laws exist. The problem is that executing them requires
            navigating 36 state governments, 5,000+ forms, and dozens of
            disconnected authorities.
          </p>

          <div className="rounded-lg bg-gray-50 p-6 shadow-sm border border-gray-100">
            <p className="font-semibold mb-4 text-gray-800">
              Companies face a broken choice:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>
                <strong>Hire consultants →</strong> ₹50K–2L/month, manual
                processes, error-prone
              </li>
              <li>
                <strong>Build internal teams →</strong> Expensive, high
                turnover, limited by human capacity
              </li>
              <li>
                <strong>Use software →</strong> Tools don’t execute; you still
                do the work
              </li>
            </ul>
          </div>

          <p className="mt-6 text-gray-700">
            All three approaches share the same flaw:{" "}
            <strong>
              they treat compliance as an operational task, not as
              infrastructure.
            </strong>
          </p>

          <div className="border-l-4 border-yellow-400 pl-4 italic text-gray-600">
            The result is predictable: missed deadlines, penalties, expansion
            delayed by compliance uncertainty, founders losing sleep over
            government filings, workers’ benefits at risk due to administrative
            failure.
          </div>

          <p className="font-semibold text-gray-800 text-lg">
            This is not a workflow problem.{" "}
            <span className="text-yellow-600">This is an infrastructure gap.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

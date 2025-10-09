"use client";
import { motion } from "framer-motion";
import { HiMiniShieldCheck, HiMiniGlobeAlt } from "react-icons/hi2";

export default function ClosingStatementSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b1211] to-[#14221f] text-white py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          Regulation, Executed.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 max-w-3xl mx-auto"
        >
          Workforce is the infrastructure that connects law to execution, policy
          to practice, and governance to growth. We don’t just build software —
          we build trust as infrastructure. The companies that run on Workforce
          will outlast those that don’t. The nations that adopt systems like
          this will move faster, farther, and fairer.
        </motion.p>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center gap-4 mt-10"
        >
          <HiMiniGlobeAlt className="w-10 h-10 text-indigo-400" />
          <p className="text-xl font-semibold text-white">
            “This isn’t software. It’s sovereignty, written in code.”
          </p>
          <p className="text-sm text-gray-400">— The Workforce Manifesto</p>
        </motion.div>

        {/* Closing Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <HiMiniShieldCheck className="w-12 h-12 text-indigo-500" />
        </motion.div>
      </div>
    </section>
  );
}

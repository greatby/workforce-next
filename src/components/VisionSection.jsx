"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const VisionSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f0fdf9] via-[#e1f7f0] to-[#ccf4ed] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center prose prose-lg prose-slate dark:prose-invert">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="!text-gray-900 !text-3xl sm:!text-3xl !font-bold !leading-tight"
        >
          The Human Challenge:The Cost of Ambition Is Complexity.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="!text-gray-700 !text-base sm:!text-lg mt-4"
        >
          You're building the future, but you're held back by the past. A
          complex web of labour laws—constantly in flux—traps capital, saps
          energy, and elevates risk. This isn't just bureaucracy; it's the
          invisible friction slowing down every strategic move, every hiring
          decision, and every step towards your next milestone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8"
        >
          <Link
            href="/aboutUs"
       
            className="inline-block px-6 py-4 no-underline text-black bg-[#00f5d4] hover:bg-[#5bf5de] text-base font-medium rounded-sm transition"
          >
            Learn About Our Vision
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;

"use client"
import { motion } from "framer-motion";

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
          Beyond Traditional HR: Innovating for Tomorrow
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="!text-gray-700 !text-base sm:!text-lg mt-4"
        >
          The world of work is rapidly evolving, and so are we. We recognized the
          power of technology to revolutionize HR, and we've been building transformative
          software and applications to streamline operations and unlock unprecedented
          efficiency for our clients. Now, we're taking our boldest leap yet – pioneering the
          integration and management of intelligent AI agents that will redefine
          productivity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8"
        >
          <a
            href="/about-us"
            className="inline-block px-6 py-4 no-underline text-black bg-[#00f5d4] hover:bg-[#5bf5de] text-base font-medium rounded-sm transition"
          >
            Learn About Our Vision
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;

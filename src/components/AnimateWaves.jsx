"use client";
import { motion } from "framer-motion";

export default function AnimatedWaves() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f" stopOpacity="0.7">
            <animate
              attributeName="stop-color"
              values="#6366f1; #06b6d4; #6366f1"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#0ff" stopOpacity="0.7">
            <animate
              attributeName="stop-color"
              values="#06b6d4; #6366f1; #06b6d4"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>

      <motion.path
        d="M0,160 C480,320 960,0 1440,160 L1440,900 L0,900 Z"
        fill="url(#waveGradient)"
        animate={{
          d: [
            "M0,160 C480,320 960,0 1440,160 L1440,900 L0,900 Z",
            "M0,120 C480,280 960,80 1440,120 L1440,900 L0,900 Z",
            "M0,160 C480,320 960,0 1440,160 L1440,900 L0,900 Z",
          ],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </svg>
  );
}

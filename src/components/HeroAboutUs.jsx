"use client";

import AboutSection from "./AboutSection";
import { motion } from "framer-motion";

export default function MissionHero() {
  return (
    <section className="relative overflow-hidden bg-[#011e3c] text-white">
      {/* Background wave graphic */}
      <div
        style={{
          backgroundImage: `url("/images/about_hero_wave_outline.svg")`,
        }}
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/2 right-0 top-0 z-[11] h-[1330px] w-[1150px] bg-contain !bg-right-top bg-no-repeat sm:-right-48 sm:left-auto sm:top-36 sm:h-[1220px] sm:w-[1055px] md:-right-32 lg:-right-16"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/2 right-0 top-0 z-10 h-[1330px] w-[1150px] bg-contain !bg-right-top bg-no-repeat
                   sm:-right-48 sm:left-auto sm:top-36 sm:h-[1220px] sm:w-[1055px]
                   md:-right-32 lg:-right-16"
        style={{
          backgroundImage: `url("/images/about_hero_wave_gradient.svg")`,
        }}
      />

      {/* Main content */}
      <section className=" h-screen flex flex-col justify-center items-center py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-5xl px-6 text-center"
        >
          {/* Tagline */}
          <p className="text-sm font-medium uppercase tracking-widest text-yellow-400">
            About Workforce
          </p>

          {/* Main Headline */}
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            The Execution Layer of Law
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl">
            India operates under 100+ employment acts across 36 states. Every
            enterprise must comply. Yet compliance itself—the machinery of
            registration, filing, and closure—remains manual, fragmented, and
            opaque.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-400 sm:text-lg">
            <strong className="text-white">Workforce</strong> rebuilds this
            layer. We don’t advise on the law.{" "}
            <br className="hidden sm:block" />
            <span className="text-yellow-400">We execute it.</span>
          </p>

          {/* Decorative Divider */}
          <div className="mx-auto mt-10 h-[2px] w-20 bg-yellow-500/80"></div>
        </motion.div>
      </section>
      {/* <AboutSection /> */}
    </section>
  );
}

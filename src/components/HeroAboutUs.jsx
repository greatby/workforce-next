"use client";

import AboutSection from "./AboutSection";

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
      <section className=" py-20 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl mx-auto">
          Rebuilding the Execution Layer of Law
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Workforce transforms compliance from paperwork into infrastructure —
          mapping every Act, department, and filing into executable systems.
          When regulation runs on code, governance becomes predictable, and
          trust becomes scalable.
        </p>
      </section>
      <AboutSection />
    </section>
  );
}

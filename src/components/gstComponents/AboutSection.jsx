"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center py-36 gap-12 mt-10 lg:mt-24 mb-20 lg:mb-28 px-4">
      {/* Left side */}
      <figure className="relative flex-1 w-full max-w-md">
        <div className="relative w-full">
          {/* Replace canvas with image */}
          <div className="pt-[108%]" />
          <img
            src="images/about-bg.png" // replace with your screenshot
            alt="About background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </figure>

      {/* Right side */}
      <div className="flex flex-col items-start w-full lg:max-w-2xl mt-10 lg:mt-0">
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          <span className="block">
            The Human Challenge:The Cost of Ambition Is Complexity.
          </span>
        </h3>

        <div className="mt-6 text-white space-y-4">
          <p>
            You're building the future, but you're held back by the past. A
            complex web of labour laws—constantly in flux—traps capital, saps
            energy, and elevates risk. This isn't just bureaucracy; it's the
            invisible friction slowing down every strategic move, every hiring
            decision, and every step towards your next milestone.
          </p>
          {/* <p>
            At <span className="text-[#c7e410]">Workforce Limited</span>, we are the operators. Our team is comprised of
            the architects of the GST system and the seasoned experts who run it
            day in and day out. We provide the elite human layer of expertise
            that makes your technology work flawlessly, transforming your GST
            function from a compliance risk into a streamlined asset. Stop
            spending hours on manual reconciliation and data-chasing. Start
            leveraging your technology to its full potential with the ultimate
            human oversight.
          </p> */}
        </div>

        {/* Button */}
        {/* <a
          href="/get-started/"
          className="inline-flex items-center gap-3 h-12 px-6 mt-8 rounded-2xl font-mono text-sm md:text-base bg-white text-black hover:bg-[#c7e410] transition"
        >
          Build your team now
          <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#c7e410] hover:bg-[#460021] text-black">
            <svg
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-3"
            >
              <path
                d="M6.55 0.83L10.25 5.22M10.25 5.22L6.55 9.29M10.25 5.22H0.19"
                strokeWidth="2"
                stroke="currentColor"
              />
            </svg>
          </span>
        </a> */}
      </div>
    </section>
  );
};

export default AboutSection;

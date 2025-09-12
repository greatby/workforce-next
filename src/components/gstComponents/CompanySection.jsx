"use client";
import React from "react";

const HeroWithBackground = () => {
  const items = [
    {
      title: "The AI Engine",
      text: "The most comprehensive and intelligent compliance engine ever built for the Indian market. It is our silent partner, tirelessly auditing every regulation and every data point.",
    },
    {
      title: "The Human Layer",
      text: "Our legal experts are not check-box auditors. They are strategic advisors who use the AI's insights to provide nuanced counsel, navigate disputes, and chart a course through regulatory unknowns.",
    },
    {
      title: "The Partnership",
      text: "We don't deliver a report; we embed ourselves as an extension of your leadership. Your compliance becomes our core business, ensuring you are always positioned for success.",
    },
    // {
    //   title: "We Are",
    //   text: "Eliminating hours of manual reconciliation and data-chasing by leveraging technology to its fullest",
    // },
  ];
  return (
    <section className="relative w-full my-14">
      {/* Background screenshot */}
      <div className="absolute inset-0 -z-10">
        <img
          src="images/hero-bg.png"
          alt="Hero background"
          className="object-cover hidden md:block"
        />
      </div>
      {/* Overlay content */}
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-y-10 items-center py-16 text-center px-4 relative z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          <span className="inline-block">Empowering India's Workforce:</span>{" "}
          <span className="inline-block">From People to Pioneering AI Agents</span>{" "}
          {/* <span className="inline-block">For Every buisness,</span>{" "}
          <span className="inline-block">Every rupee,</span>{" "}
          <span className="inline-block">Every deadline.</span>
          <br /> */}
          {/* <span className="inline-block">valued</span>{" "}
          <span className="inline-block">partner.</span> */}
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl text-black">
        We're not just shaping HR; we're architecting the future of work with cutting-edge software and intelligent AI.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto relative mt-[100px] px-4">
        <h1 className="text-center text-4xl my-4">We Built the Antidote.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black text-black bg-white">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative py-10 md:py-12 px-6 md:px-12 flex flex-col items-start justify-center ${
                index < items.length - 1
                  ? "border-b md:border-b-0 lg:border-r border-black"
                  : ""
              }`}
            >
              <div className="text-sm uppercase font-semibold text-red-800">
                {item.title}
              </div>
              <p className="mt-4 text-gray-700 max-w-xs">{item.text}</p>

              {/* SVG connector between blocks */}
              {index < items.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-2">
                  <svg
                    viewBox="0 0 45 26"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-6 text-black"
                    fill="currentColor"
                  >
                    <path d="M26.7464 25.6228V16.849H44.7329C44.7329 12.0027 40.8048 8.0752 35.9579 8.0752H26.7406C21.8937 8.0752 17.9656 12.0027 17.9656 16.849C17.9656 21.6953 21.8937 25.6228 26.7406 25.6228H26.7464Z" />
                    <path d="M18.7502 0.211169V8.98498H0.763672C0.763672 13.8312 4.69177 17.7588 9.53872 17.7588H18.756C23.6029 17.7588 27.531 13.8312 27.531 8.98498C27.531 4.13871 23.6029 0.211169 18.756 0.211169H18.7502Z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroWithBackground;

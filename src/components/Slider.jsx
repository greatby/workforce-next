"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

export default function ImageHighlightBlock({ sectionData }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newIndex) => {
    if (newIndex === index) return;
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  const next = () => {
    if (index < slides.length - 1) paginate(index + 1);
  };

  const prev = () => {
    if (index > 0) paginate(index - 1);
  };

  const slides = sectionData.slides;

  const { title, description } = slides[index];

  return (
    <section className="w-full bg-gradient-to-br from-lime-100 via-cyan-100 to-yellow-100 px-4 py-16 overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 max-w-3xl mx-auto mb-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        {sectionData.header}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700">
         {sectionData.subtext}
        </p>
      </div>

      <div className="mx-auto max-w-6xl flex flex-col gap-6">
        {/* Top Section */}
        <div className="flex flex-col justify-between md:flex-row md:items-start">
          {/* Left: Title + Description */}
          <div className="mb-4 max-w-2xl text-center md:text-left">
            <motion.h4
              key={index + "-title"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm md:text-base font-semibold text-green-700 uppercase"
            >
              {title}
            </motion.h4>
            <motion.p
              key={index + "-desc"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-2 text-sm md:text-lg text-green-800"
            >
              {description}
            </motion.p>
          </div>

          {/* Right: Controls */}
          <div className="flex  items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`rounded-full w-[46px] h-[46px] md:w-[64px] md:h-[64px] lg:w-[64px] lg:h-[64px] px-4 md:px-6 lg:px-6 transition-colors ${
                index === 0
                  ? "bg-transparent text-green-700 cursor-default"
                  : "bg-green-700 text-white hover:bg-green-800"
              }`}
            >
              <FaArrowLeftLong />
            </button>

            <div className="flex gap-1">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block h-[2px] w-4 rounded-full transition-all duration-200 ${
                    i === index ? "bg-green-600" : "bg-green-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={index === slides.length - 1}
              className={`rounded-full w-[46px] h-[46px] md:w-[64px] md:h-[64px] lg:w-[64px] lg:h-[64px] px-4 md:px-6 lg:px-6 transition-colors ${
                index === slides.length - 1
                  ? "bg-transparent text-green-700 cursor-default"
                  : "bg-green-700 text-white hover:bg-green-800"
              }`}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-[60%] lg:w-[60%] mx-auto aspect-video rounded-xl overflow-hidden bg-white shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].image}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center p-4 will-change-transform"
            >
              <img
                src={slides[index].image}
                alt="Slide"
                loading="eager"
                className="w-full h-full object-cover rounded-md"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

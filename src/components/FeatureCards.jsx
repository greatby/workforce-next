"use client"
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import clsx from "clsx";
import { HiClipboardList, HiUserGroup, HiChip, HiSparkles } from "react-icons/hi";

const slides = [
  {
    title: "HR Compliance & Payroll",
    description:
      "Stay ahead of regulations, audits, and accuracy. We manage your compliance, so you can manage your business.",
    image: "/images/pexels-photo-29789465.jpeg",
    icon: HiClipboardList,
  },
  {
    title: "Temp Staffing",
    description:
      "Onboard pre-vetted, high-performing talent at scale — the right people, right when you need them.",
    image: "/images/pexels-photo-32079860.jpeg",
    icon: HiUserGroup,
  },
  {
    title: "HR Tech & Software",
    description:
      "We don’t just deliver HR services; we build the tools that power them. Custom apps and systems that automate, integrate, and elevate your HR function.",
    image: "/images/pexels-photo-30824935.jpeg",
    icon: HiChip,
  },
  {
    title: "AI Workforce Evolution",
    description:
      "Tomorrow’s workforce isn’t just human. We’re designing AI agents that automate decisionmaking, learning, and HR execution — at scale, with precision.",
    image: "/images/pexels-photo-29145098.jpeg",
    icon: HiSparkles,
  },
];


export default function CardSlider() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(380);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;
      const padding = 40; // left+right space
      setCardWidth(screenWidth < 560 ? screenWidth - padding : 380);
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const goPrev = () => {
    if (index > 0) setIndex(index - 1);
  };
  const goNext = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  return (
    <section className="bg-[#001935] py-16">
      <div className="w-full md:w-[50%] lg:w-50% mx-auto text-center mb-10">
        <h1 className="text-white text-4xl">Our Core Offerings</h1>
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Cards Wrapper */}
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (cardWidth + 20)}px)`,
              width: `${slides.length * (cardWidth + 20)}px`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col p-[1px]"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="flex h-full flex-col justify-between rounded-md bg-[#FAF7F5]">
                  <div className="flex flex-col gap-4 p-5">
                    {slide.icon && <slide.icon className="h-6 w-6 text-[#001935]" />}
                    <p className="text-sm font-semibold text-gray-900">
                      {slide.title}
                    </p>
                    <p className="text-sm text-gray-500">{slide.description}</p>
                  </div>
                  <div className="flex h-[250px] justify-end overflow-hidden rounded-b-md bg-black">
                    <img
                      src={slide.image}
                      alt={slide.title}
                        loading="eager"
                      className="-mb-3 h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={goPrev}
            disabled={index === 0}
            className={clsx(
              "rounded-full p-3 transition-all",
              index === 0
                ? "bg-transparent text-white/20"
                : "bg-white text-black hover:bg-gray-200"
            )}
          >
            <FaChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goNext}
            disabled={index === slides.length - 1}
            className={clsx(
              "rounded-full p-3 transition-all",
              index === slides.length - 1
                ? "bg-transparent text-white/20"
                : "bg-white text-black hover:bg-gray-200"
            )}
          >
            <FaChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

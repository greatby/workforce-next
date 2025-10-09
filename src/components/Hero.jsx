"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const gradientRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const animationSpeed = 0.05;
  const fadeDelay = 500;

  useEffect(() => {
    let raf;

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * animationSpeed;
      pos.current.y += (target.current.y - pos.current.y) * animationSpeed;

      if (gradientRef.current) {
        gradientRef.current.style.background = `
          radial-gradient(
            600px circle at ${pos.current.x}px ${pos.current.y}px,
            rgba(255, 228, 122, 0.8),
            rgba(251, 156, 229, 0.6),
            rgba(9, 111, 255, 0.5),
            transparent 80%
          )
        `;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    target.current.x = e.clientX - rect.left;
    target.current.y = e.clientY - rect.top;

    if (!visible) setVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setVisible(false), fadeDelay);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-screen bg-[#011e3c] text-white overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image */}
      <div
        className="pointer-events-none absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2] md:scale-[1.25] lg:scale-100"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url("/images/bg.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Effect */}
      <div
        ref={gradientRef}
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-700"
        style={{
          opacity: visible ? 1 : 0,
          mixBlendMode: "screen",
          transition: "opacity 700ms ease",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto md:mt-0 flex h-full w-full max-w-7xl flex-col items-start justify-center px-5">
        <div className="flex w-full flex-col gap-10 md:gap-16 md:max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
            Regulation, Executed.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl">
            The regulatory engine that keeps companies compliant by design—every
            Act, every Department, every Industry.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="inline-flex items-center gap-3 justify-center w-full md:w-fit md:min-w-[15rem] px-6 py-4 text-base md:text-lg font-medium text-black bg-[#00f5d4] hover:bg-[#5bf5de] transition rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[#00f5d4] focus-visible:ring-offset-[#00c8aa] disabled:opacity-30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              See How It Works
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-[6px] w-[6px] bg-[#00f5d4]" />
            <p className="text-sm md:text-base text-white/80">
              10,000+ compliances executed · 30+ industries · 36 states & UTs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

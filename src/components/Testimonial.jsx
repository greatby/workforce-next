"use client"
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },
  {
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },
  {
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },{
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },{
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },{
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },{
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },{
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },{
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },{
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },{
    name: "Sandhya Sridharan",
    role: "Global Head of Engineers’ Platform & Integrated Experience, JPMorgan Chase",
    logo: "/logo/external-logos/jpmorgan_chase_logo.svg",
    link: "https://windsurf.com/blog/jpmc-codeium-hall-of-innovation",
    quote:
      "We are pleased to induct Windsurf into the JPMorganChase Hall of Innovation...",
    bg: "bg-[#D3F2EF]",
    outline: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient: "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
  },

];



export default function CaseStudyTestimonials() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);


  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -500 : 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-24 md:py-44">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Case Study Testimonials
          </h2>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border ${
                canScrollLeft
                  ? "bg-cyan-700 text-white hover:opacity-80"
                  : "opacity-30 text-gray-400 cursor-not-allowed"
              }`}
            >
              <FaArrowLeftLong className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full ${
                canScrollRight
                  ? "bg-cyan-700 text-white hover:opacity-90"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <FaArrowRightLong className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => (
            <a
              key={i}
              href={t.link}
              target="_blank"
              className={`relative group shrink-0 snap-start rounded-md ${t.bg} w-[280px] sm:w-[340px] md:w-[480px] xl:w-[525px] h-[520px] md:h-[612px] p-6 md:p-14 overflow-hidden hover:scale-[.98] transition-transform`}
            >
              <div
                className="absolute inset-0 bg-bottom bg-no-repeat bg-contain transition-opacity duration-700 group-hover:opacity-0"
                style={{ backgroundImage: t.outline }}
              />
              <div
                className="absolute inset-0 bg-bottom bg-no-repeat bg-contain opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                style={{ backgroundImage: t.gradient }}
              />
              <div className="relative flex h-full flex-col justify-between z-10">
                <p className="text-sm md:text-lg text-black leading-snug whitespace-pre-line">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="h-12 w-12 rounded-lg bg-white p-2">
                    <img
                      src={t.logo}
                      alt="logo"
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium text-black text-sm md:text-lg">
                      {t.name}
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-black">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

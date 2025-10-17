// "use client";
// import { useEffect, useRef, useState } from "react";
// import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
// import { motion,useInView } from "framer-motion";

// const testimonials = [
//   {
//     quote: "Monthly Statutory Compliance",
//     role: `EPF, ESIC, Professional Tax, Labour Welfare Fund—filed automatically before
// every deadline. We handle contribution calculations, challan generation, return filing, and
// payment tracking across all your locations and entities.`,
//     bg: "bg-[#D3F2EF]",
//     outline:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
//     gradient:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
//     logo: "https://windsurf.com/logo/external-logos/jpmorgan_chase_logo.svg",
//   },
//   {
//     quote: "Registrations & Licenses",
//     role: `When you expand to a new state, open a factory, or cross employee thresholds, we
// execute every registration—EPF, ESIC, Factories Act, Shops & Establishments, Contract
// Labour. You focus on operations. We secure every license before you need it.`,
//     bg: "bg-[#D3F2EF]",
//     outline:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_1.svg')",
//     gradient:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_1.svg')",
//     logo: "https://windsurf.com/logo/external-logos/mercado_libre_logo.svg",
//   },

//   {
//     quote: "Clean Closures & Exits",
//     role: `Shutting down a unit? Restructuring? Workforce executes complete employment law
// closure—EPF, ESIC, Factories, Contract Labour, Shops & Establishments—in 30 days.
// Zero penalties. Zero disputes. Clean exit guaranteed.`,
//     bg: "bg-[#D3F2EF]",
//     outline:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_2.svg')",
//     gradient:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_2.svg')",
//     logo: "https://windsurf.com/logo/external-logos/athena_logo.svg",
//   },
//   {
//     quote: "Multi-State Expansion",
//     role: `Open a new location in any of India's 36 states without worrying about local labour
// codes. We map state-specific requirements, execute registrations, and maintain ongoing
// compliance—so geography never limits your growth.`,
//     bg: "bg-[#D3F2EF]",
//     outline:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_3.svg')",
//     gradient:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_3.svg')",
//     logo: "https://windsurf.com/logo/external-logos/athena_logo.svg",
//   },
//   {
//     quote: "Real-Time Regulatory Intelligence",
//     role: `Labour laws change constantly—new circulars, rate revisions, form updates,
// deadline shifts. We capture every change the day it's published and apply it to your
// operations automatically. You're always compliant, never caught off-guard.`,
//     bg: "bg-[#D3F2EF]",
//     outline:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
//     gradient:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
//     logo: "https://windsurf.com/logo/external-logos/athena_logo.svg",
//   },
//   {
//     quote: "Audit & Inspection Support",
//     role: `When labour inspectors arrive or statutory audits begin, we provide complete
// documentation, represent your compliance posture, and resolve any discrepancies. Your
// operations continue undisrupted.`,
//     bg: "bg-[#D3F2EF]",
//     outline:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_1.svg')",
//     gradient:
//       "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_1.svg')",
//     logo: "https://windsurf.com/logo/external-logos/athena_logo.svg",
//   },
// ];

// export default function CaseStudyTestimonials() {
//   const scrollRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const checkScroll = () => {
//     const el = scrollRef.current;
//     if (!el) return;
//     setCanScrollLeft(el.scrollLeft > 0);
//     setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 10);
//   };

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;
//     checkScroll();
//     el.addEventListener("scroll", checkScroll);
//     return () => el.removeEventListener("scroll", checkScroll);
//   }, []);

//   const scroll = (dir) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: dir === "left" ? -500 : 500,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="bg-white py-24 md:py-44">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="flex items-center justify-between mb-10">
//           <h2 className="text-2xl font-title font-semibold md:text-4xl">
//             What We Execute for You
//           </h2>
//           <div className="hidden md:flex gap-4">
//             <button
//               onClick={() => scroll("left")}
//               disabled={!canScrollLeft}
//               className={`p-3 rounded-full border ${
//                 canScrollLeft
//                   ? "bg-cyan-700 text-white hover:opacity-80"
//                   : "opacity-30 text-gray-400 cursor-not-allowed"
//               }`}
//             >
//               <FaArrowLeftLong className="w-6 h-6" />
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               disabled={!canScrollRight}
//               className={`p-3 rounded-full ${
//                 canScrollRight
//                   ? "bg-cyan-700 text-white hover:opacity-90"
//                   : "bg-gray-300 text-gray-500 cursor-not-allowed"
//               }`}
//             >
//               <FaArrowRightLong className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//         <div
//           ref={scrollRef}
//           className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//         >
//           {testimonials.map((t, i) => (
//             <a
//               key={i}
//               href={t.link}
//               target="_blank"
//               className={`relative group shrink-0 snap-start rounded-md ${t.bg} w-[280px] sm:w-[340px] md:w-[480px] xl:w-[525px] h-[520px] md:h-[612px] p-6 md:p-14 overflow-hidden hover:scale-[.98] transition-transform`}
//             >
//               <div
//                 className="absolute inset-0 bg-bottom bg-no-repeat bg-contain transition-opacity duration-700 group-hover:opacity-0"
//                 style={{ backgroundImage: t.outline }}
//               />
//               <div
//                 className="absolute inset-0 bg-bottom bg-no-repeat bg-contain opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
//                 style={{ backgroundImage: t.gradient }}
//               />
//               <div className="relative flex h-full flex-col justify-between z-10">
//                 <p className="text-sm md:text-2xl font-semibold font-subtitle text-black leading-snug whitespace-pre-line">
//                   {t.quote}
//                 </p>
//                 <div className="flex items-center gap-4 mt-6">
//                   <div className="w-42 h-42 rounded-lg">
//                     <img
//                       src={t.logo}
//                       alt="logo"
//                       className="object-contain h-full w-full"
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <p className="text-sm md:text-sm font-subtitle font-semibold text-black">
//                       {t.role}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
        
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function CaseStudyTestimonials() {
  const scrollRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

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

  // 👇 Mobile viewport detection
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleCards((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.4 }
    );

    const cards = document.querySelectorAll(".testimonial-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

const testimonials = [
  {
    quote: "Monthly Statutory Compliance",
    role: `EPF, ESIC, Professional Tax, Labour Welfare Fund—filed automatically before
every deadline. We handle contribution calculations, challan generation, return filing, and
payment tracking across all your locations and entities.`,
    bg: "bg-[#D3F2EF]",
    outline:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
    logo: "https://windsurf.com/logo/external-logos/jpmorgan_chase_logo.svg",
  },
  {
    quote: "Registrations & Licenses",
    role: `When you expand to a new state, open a factory, or cross employee thresholds, we
execute every registration—EPF, ESIC, Factories Act, Shops & Establishments, Contract
Labour. You focus on operations. We secure every license before you need it.`,
    bg: "bg-[#D3F2EF]",
    outline:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_1.svg')",
    gradient:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_1.svg')",
    logo: "https://windsurf.com/logo/external-logos/mercado_libre_logo.svg",
  },

  {
    quote: "Clean Closures & Exits",
    role: `Shutting down a unit? Restructuring? Workforce executes complete employment law
closure—EPF, ESIC, Factories, Contract Labour, Shops & Establishments—in 30 days.
Zero penalties. Zero disputes. Clean exit guaranteed.`,
    bg: "bg-[#D3F2EF]",
    outline:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_2.svg')",
    gradient:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_2.svg')",
    logo: "https://windsurf.com/logo/external-logos/athena_logo.svg",
  },
  {
    quote: "Multi-State Expansion",
    role: `Open a new location in any of India's 36 states without worrying about local labour
codes. We map state-specific requirements, execute registrations, and maintain ongoing
compliance—so geography never limits your growth.`,
    bg: "bg-[#D3F2EF]",
    outline:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_3.svg')",
    gradient:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_3.svg')",
    logo: "https://windsurf.com/logo/external-logos/athena_logo.svg",
  },
  {
    quote: "Real-Time Regulatory Intelligence",
    role: `Labour laws change constantly—new circulars, rate revisions, form updates,
deadline shifts. We capture every change the day it's published and apply it to your
operations automatically. You're always compliant, never caught off-guard.`,
    bg: "bg-[#D3F2EF]",
    outline:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_0.svg')",
    gradient:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_0.svg')",
    logo: "https://windsurf.com/logo/external-logos/athena_logo.svg",
  },
  {
    quote: "Audit & Inspection Support",
    role: `When labour inspectors arrive or statutory audits begin, we provide complete
documentation, represent your compliance posture, and resolve any discrepancies. Your
operations continue undisrupted.`,
    bg: "bg-[#D3F2EF]",
    outline:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/outline_1.svg')",
    gradient:
      "url('https://exafunction.github.io/public/images/waves/case_study/aqua_waves/gradient_1.svg')",
    logo: "https://windsurf.com/logo/external-logos/athena_logo.svg",
  },
];

  return (
    <section className="bg-white py-24 md:py-44">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-title font-semibold md:text-4xl">
            What We Execute for You
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

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => {
            const isVisible = visibleCards.includes(i);

            return (
              <a
                key={i}
                data-index={i}
                href={t.link}
                target="_blank"
                className={`testimonial-card relative group shrink-0 snap-start rounded-md ${t.bg} w-[280px] sm:w-[340px] md:w-[480px] xl:w-[525px] h-[520px] md:h-[612px] p-6 md:p-14 overflow-hidden hover:scale-[.98] transition-transform`}
              >
                {/* Outline Layer */}
                <div
                  className="absolute inset-0 bg-bottom bg-no-repeat bg-contain transition-opacity duration-700 group-hover:opacity-0"
                  style={{ backgroundImage: t.outline }}
                />

                {/* Gradient Layer */}
                <div
                  className={`
                    absolute inset-0 bg-bottom bg-no-repeat bg-contain transition-opacity duration-1000 
                    ${isVisible ? "opacity-100" : "opacity-0"}
                    md:opacity-0 md:group-hover:opacity-100
                  `}
                  style={{ backgroundImage: t.gradient }}
                />

                <div className="relative flex h-full flex-col justify-between z-10">
                  <p className="text-sm md:text-2xl font-semibold font-subtitle text-black leading-snug whitespace-pre-line">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-42 h-42 rounded-lg">
                      <img
                        src={t.logo}
                        alt="logo"
                        className="object-contain h-full w-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm md:text-sm font-subtitle font-semibold text-black">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

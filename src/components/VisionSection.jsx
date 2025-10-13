// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const VisionSection = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-[#f0fdf9] via-[#e1f7f0] to-[#ccf4ed] py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto text-center prose prose-lg prose-slate dark:prose-invert">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="!text-gray-900 !text-3xl sm:!text-3xl !font-bold !leading-tight"
//         >
//           The Human Challenge:The Cost of Ambition Is Complexity.
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="!text-gray-700 !text-base sm:!text-lg mt-4"
//         >
//           You're building the future, but you're held back by the past. A
//           complex web of labour laws—constantly in flux—traps capital, saps
//           energy, and elevates risk. This isn't just bureaucracy; it's the
//           invisible friction slowing down every strategic move, every hiring
//           decision, and every step towards your next milestone.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="mt-8"
//         >
//           <Link
//             href="/aboutUs"

//             className="inline-block px-6 py-4 no-underline text-black bg-[#00f5d4] hover:bg-[#5bf5de] text-base font-medium rounded-sm transition"
//           >
//             Learn About Our Vision
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default VisionSection;

// "use client";

// import Link from "next/link";
// import React from "react";

// const CascadeHero = ({data}) => {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#5c0047] md:h-screen">
//       {/* Background Image */}
//       <div className="pointer-events-none absolute inset-0 h-full w-full">
//         <img
//           src="/images/cascade_icon.svg"
//           alt="Cascade"
//           className="z-[5] scale-75 object-cover object-left"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex h-full w-full items-center justify-end px-5 py-20 md:py-0">
//         <div className="flex h-full w-full flex-col items-center justify-center xl:max-w-[50%] xl:items-start">
//           <div className="flex max-w-2xl flex-col gap-5 md:gap-12">
//             <h4 className="text-center text-[#fb9ce5] md:text-left text-3xl md:text-4xl font-semibold leading-tight">
//               {data.title}
//             </h4>
//             <p className="text-center text-[#fb9ce5] md:text-left text-base leading-relaxed opacity-90">
//            {data.subTitle}
//             </p>

//             {/* Buttons */}
//             <div className="z-10 mt-5 flex flex-wrap items-center justify-center gap-6 md:mt-0 md:justify-start">
//               {/* Primary CTA */}
//               <Link
//                 href="/aboutUs"
//                 className="w-full sm:w-auto"
//               >
//                 <button
//                   type="button"
//                   className="inline-flex w-full items-center justify-center gap-3 rounded-[2px] bg-[#ffe715] px-6 py-4 text-base font-medium text-sk-black transition-colors hover:bg-sk-sun-up-tint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sk-sun-up focus-visible:ring-offset-4 focus-visible:ring-offset-sk-sun-up-shade md:min-w-[15rem] md:w-fit md:text-lg"
//                 >
//                    Learn About Our Vision
//                 </button>
//               </Link>

//               {/* Secondary CTA */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CascadeHero;


"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroFlowState({data}) {
  return (
    <div className="relative w-full overflow-hidden lg:h-screen">
      {/* Main Section */}
      <section className="relative mx-auto h-[85vh] w-full xl:h-[65vh]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-10 bg-[#f9f3e9] pb-20 pt-16" />

        {/* Content Wrapper */}
        <div className="mx-auto h-full w-full max-w-7xl px-5 relative z-20">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="z-30 flex flex-col items-start justify-center gap-8 xl:flex-row xl:items-start xl:justify-between">
              {/* Left: Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1B1B] xl:flex-1 leading-tight">
                 {data.title}
              </h1>

              {/* Right: Text + CTA */}
              <div className="z-30 flex max-w-[550px] flex-col gap-12 xl:flex-1">
                <p className="border-l-2 border-[#3E3C4A] pl-3 text-base md:text-xl text-[#1B1B1B]">
                {data.subTitle}
                </p>

                {/* CTA Buttons */}
                <div className="z-10 flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-2">
                  <Link href="/aboutUs" className="inline-flex items-center justify-center gap-3 bg-[#00F6D2] text-[#1B1B1B] hover:bg-[#4FFFF3] font-medium leading-6 px-6 py-4 text-base md:text-lg rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[#00E1C4] w-full md:w-auto">
                   
                     Learn About Our Vision
                  </Link>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Wave Section */}
      <div className="z-5 h-[15vh] w-full bg-[#10102B] xl:h-[35vh]">
        <div className="absolute bottom-[-80rem] left-[-65rem] h-[2581px] w-[4682px] md:bottom-[-82rem]">
          <Image
            src="/images/editor_hero_wave_gradient.svg"
            alt="Editor hero wave gradient"
            fill
            className="object-cover z-3"
            priority
          />
          <Image
            src="/images/editor_hero_wave_outline.svg"
            alt="Editor hero wave outline"
            fill
            className="object-cover z-11"
            priority
          />
        </div>
      </div>
    </div>
  );
}


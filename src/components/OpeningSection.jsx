"use client";

import Image from "next/image";

const OPeningSection = ({quote}) => {
  return (
    <section className="bg-white p-3 md:p-4">
      <div
        className="rounded-lg py-12 bg-[#ffccf3] md:py-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/wave6_end_outline.png) ` }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-8 md:gap-20">
          {/* Quote */}
          <h3 className="text-left font-title text-2xl md:text-3xl font-semibold leading-snug text-[#5c0047]">
            “{quote}”
          </h3>
        </div>
      </div>
    </section>
  );
};

export default OPeningSection;
